import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import NavFavorites from '../components/NavFavorites';
import NavOptions from '../components/NavOptions';
import SearchOrigin from '../components/SearchOrigin';
import { useAppSelector } from '../store/hooks';

const HomeScreen = () => {
	const origin = useAppSelector((state) => state.nav.origin);

	return (
		<View style={styles.container}>
			<Image
				style={{
					width: 100,
					height: 100,
					resizeMode: 'contain',
				}}
				source={{
					uri: 'https://links.papareact.com/gzs',
				}}
			/>
			<NavOptions />
			<SearchOrigin />
			<NavFavorites />
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		height: '100%',
		backgroundColor: '#fff',
		padding: 20,
	},
});
