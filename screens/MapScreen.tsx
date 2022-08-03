import { StyleSheet, View } from 'react-native';
import Map from '../components/Map';
import NavigateCard from '../components/NavigateCard';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CardStackParamList } from '../types/RootStackParamList';
import RideOptions from '../components/RideOptions';

const MapScreen = () => {
	const Stack = createNativeStackNavigator<CardStackParamList>();

	return (
		<View style={styles.container}>
			<View style={styles.mapContainer}>
				<Map />
			</View>

			<View style={styles.inputContainer}>
				<Stack.Navigator initialRouteName='NavigateCard' screenOptions={{ headerShown: false }}>
					<Stack.Screen name='NavigateCard' component={NavigateCard} />

					<Stack.Screen name='RideOptions' component={RideOptions} />
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
	},
});
