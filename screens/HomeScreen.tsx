import React from 'react';
import { Image, SafeAreaView, View, StyleSheet } from 'react-native';
import NavOptions from '../components/NavOptions';
import SearchInput from '../components/SearchInput';
import { useAppSelector } from '../store/hooks';

const HomeScreen = () => {
	const origin = useAppSelector((state) => state.nav.origin);

	return (
		<SafeAreaView style={styles.container}>
			<View style={{ padding: 20 }}>
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
				<View style={origin ? styles.enabled : styles.disabled}>
					<NavOptions />
				</View>
				<SearchInput />
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		height: '100%',
		backgroundColor: '#fff',
	},
	disabled: {
		opacity: 0.5,
	},
	enabled: {
		opacity: 1,
	},
});
