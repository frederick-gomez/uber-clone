import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from '../store/hooks';
import { setDestination } from '../store/reducer/navReducer';

const rideOptionsData = [
	{
		image: null,
		title: 'UberX',
		price: '36.400',
		seats: 4,
		eta: '3.14 pm',
	},
	{
		image: null,
		title: 'Comfort',
		price: '54.200',
		seats: 4,
		eta: '3.14 pm',
	},
	{
		image: null,
		title: 'Moto',
		price: '20.600',
		seats: 1,
		eta: '3.14 pm',
	},
	{
		image: null,
		title: 'Flash',
		price: '32.400',
		seats: '3.14 pm',
		eta: 'Hacé llegar o recibí artículos',
	},
];

const RideOptions = () => {
	const navigation = useNavigation();
	const dispatch = useAppDispatch();

	useEffect(() => {
		navigation.addListener('beforeRemove', (e) => {
			dispatch(setDestination(null));
		});
	}, []);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Elige un viaje</Text>
			<FlatList
				data={rideOptionsData}
				renderItem={(items) => (
					<Pressable style={styles.itemContainer} android_ripple={styles.ripple}>
						<View style={styles.topRow}>
							<Text style={styles.itemTitle}>{items.item.title}</Text>
							<Text style={styles.itemSeats}>{items.item.seats}</Text>
							<Text style={styles.itemPrice}>PYG {items.item.price}</Text>
						</View>

						<Text>{items.item.eta}</Text>
					</Pressable>
				)}
			/>
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
	},
	topRow: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	itemContainer: {
		paddingHorizontal: 20,
		paddingVertical: 15,
	},
	itemTitle: {
		fontSize: 22,
	},
	itemSeats: {
		marginLeft: 5,
	},
	itemPrice: {
		fontSize: 20,
		marginLeft: 'auto',
	},
});
