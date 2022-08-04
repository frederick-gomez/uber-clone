import {
	StyleSheet,
	Text,
	View,
	FlatList,
	Pressable,
	TouchableOpacity,
	Image,
	ImageSourcePropType,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setDestination } from '../store/reducer/navReducer';
import { Icon } from '@rneui/themed';

type rideOptionsType = {
	image: ImageSourcePropType;
	title: string;
	price: string;
	seats: number | null;
	subtitle?: string;
	multiplier: number;
};

const rideOptionsData: rideOptionsType[] = [
	{
		image: require('../assets/viaje.png'),
		title: 'UberX',
		price: '36.400',
		seats: 4,
		multiplier: 1,
	},
	{
		image: require('../assets/comfort.png'),
		title: 'Comfort',
		price: '54.200',
		seats: 4,
		multiplier: 1.4,
	},
	{
		image: require('../assets/moto.jpg'),
		title: 'Moto',
		price: '20.600',
		seats: 1,
		multiplier: 0.5,
	},
	{
		image: require('../assets/envios.png'),
		title: 'Flash',
		price: '32.400',
		seats: null,
		multiplier: 1,
		subtitle: 'Hacé llegar o recibí artículos',
	},
];

const CHARGE_RATE = 2.4;

const RideOptions = () => {
	const navigation = useNavigation();
	const dispatch = useAppDispatch();
	const travelTimeInformation = useAppSelector((state) => state.nav.travelTimeInformation);

	//Calculate price according to travel distance and multipliers of each ride
	const calculatePrice = (multiplier: number): string => {
		const price = (travelTimeInformation?.duration?.value * CHARGE_RATE * multiplier) / 100;
		const roundedPrice = Math.round(price).toFixed(3);
		return roundedPrice;
	};

	//Remove destination coordinates when exiting screen
	useEffect(() => {
		navigation.addListener('beforeRemove', () => dispatch(setDestination(null)));
		return navigation.removeListener('beforeRemove', () => dispatch(setDestination(null)));
	}, []);

	const [selectedItem, setSelectedItem] = useState('UberX');

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Elige un viaje - {travelTimeInformation?.distance?.text}</Text>
			<FlatList
				style={{ flex: 3 }}
				data={rideOptionsData}
				extraData={selectedItem}
				renderItem={({ item }) => {
					const backgroundColor = item.title === selectedItem ? '#ececec' : '#fff';

					return (
						<Pressable
							style={[styles.itemContainer, { backgroundColor: backgroundColor }]}
							android_ripple={styles.ripple}
							onPress={() => setSelectedItem(item.title)}
						>
							<Image source={item.image} style={styles.image} />
							<View style={styles.content}>
								<View>
									<View style={{ flexDirection: 'row', alignItems: 'center' }}>
										<Text style={styles.itemTitle}>{item.title}</Text>
										{item.seats && (
											<View style={styles.itemSeats}>
												<Icon name='person' type='material' size={15} />
												<Text>{item.seats}</Text>
											</View>
										)}
									</View>

									{item.subtitle ? (
										<Text>{item.subtitle}</Text>
									) : (
										<Text>Llegada en: {travelTimeInformation?.duration?.text}</Text>
									)}
								</View>

								<Text style={styles.itemPrice}>
									PYG{' '}
									{travelTimeInformation?.duration?.value
										? calculatePrice(item.multiplier)
										: 'Calculando'}
								</Text>
							</View>
						</Pressable>
					);
				}}
			/>
			<TouchableOpacity activeOpacity={0.8} style={styles.confirmContainer}>
				<View style={styles.confirmBtn}>
					<Text style={styles.confirmBtnText}>PEDIR {selectedItem}</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default RideOptions;

const styles = StyleSheet.create({
	ripple: {
		color: '#ccc',
	},
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	title: {
		paddingVertical: 15,
		marginBottom: 10,
		textAlign: 'center',
		fontSize: 18,
		fontWeight: '600',
		borderBottomColor: '#ececec',
		borderBottomWidth: 1,
	},
	image: {
		width: 70,
		height: 70,
		marginRight: 20,
	},
	content: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'baseline',
		alignSelf: 'center',
	},
	itemContainer: {
		flexDirection: 'row',
		paddingHorizontal: 20,
		paddingVertical: 15,
	},
	itemTitle: {
		fontSize: 22,
	},
	itemSeats: {
		marginLeft: 5,
		flexDirection: 'row',
		justifyContent: 'center',
	},
	itemPrice: {
		fontSize: 20,
		marginLeft: 'auto',
	},
	confirmContainer: {
		borderTopWidth: 0.8,
		borderColor: '#ececec',
		paddingVertical: 20,
		paddingHorizontal: 20,
	},
	confirmBtn: {
		backgroundColor: '#000',
		paddingVertical: 15,
	},
	confirmBtnText: {
		color: '#fff',
		fontSize: 18,
		fontWeight: '600',
		textAlign: 'center',
	},
});
