import { StyleSheet, View } from 'react-native';
import React from 'react';
import Map from '../components/Map';
import NavigateCard from '../components/NavigateCard';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CardStackParamList } from '../types/RootStackParamList';

const MapScreen = () => {
	const Stack = createNativeStackNavigator<CardStackParamList>();

	return (
		<View style={styles.container}>
			<View style={styles.mapContainer}>
				<Map />
			</View>

			<View style={styles.inputContainer}>
				<Stack.Navigator initialRouteName='NavigateScreen' screenOptions={{ headerShown: false }}>
					<Stack.Screen name='NavigateScreen' component={NavigateCard} />
				</Stack.Navigator>
			</View>
		</View>
	);
};

export default MapScreen;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		height: '100%',
	},
	mapContainer: {
		flex: 1,
	},
	inputContainer: {
		flex: 1,
		marginHorizontal: 15,
	},
});
