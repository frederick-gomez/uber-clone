import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/RootStackParamList';
import { useAppSelector } from '../store/hooks';

type mapScreenType = NativeStackNavigationProp<RootStackParamList, 'MapScreen'>;
type flashScreenType = NativeStackNavigationProp<RootStackParamList, 'FlashScreen'>;

const NavOptions = () => {
	const navigation = useNavigation<mapScreenType | flashScreenType>();
	const origin = useAppSelector((state) => state.nav.origin);

	return (
		<View style={styles.container}>
			<Pressable
				style={styles.item}
				android_ripple={styles.ripple}
				onPress={() => {
					if (!origin) {
						return;
					}
					navigation.navigate('MapScreen');
				}}
			>
				<Text style={styles.text}>Viajes</Text>
				<Image style={styles.image} source={require('../assets/viaje.png')} />
			</Pressable>

			<Pressable
				style={styles.item}
				android_ripple={styles.ripple}
				onPress={() => navigation.navigate('FlashScreen')}
			>
				<Text style={styles.text}>Envios</Text>
				<Image style={styles.image} source={require('../assets/envios.png')} />
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: 'space-between',
		flexDirection: 'row',
	},
	item: {
		width: 170,
		justifyContent: 'space-between',
		alignItems: 'flex-end',
		flexDirection: 'row',
		backgroundColor: '#ececec',
		borderRadius: 15,
	},
	text: {
		padding: 10,
		fontWeight: '700',
	},
	image: {
		width: 100,
		height: 100,
		resizeMode: 'contain',
	},
	ripple: {
		color: '#ccc',
	},
});

export default NavOptions;
