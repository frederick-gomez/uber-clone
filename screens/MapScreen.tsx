import { StyleSheet, View } from 'react-native';
import { useEffect } from 'react';
import Map from '../components/Map';
import NavigateCard from '../components/NavigateCard';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CardStackParamList } from '../types/RootStackParamList';
import RideOptions from '../components/RideOptions';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from '../store/hooks';
import { setOrigin } from '../store/reducer/navReducer';

const MapScreen = () => {
	const Stack = createNativeStackNavigator<CardStackParamList>();
	const navigation = useNavigation();
	const dispatch = useAppDispatch();

	//Remove origin coordinates when exiting screen
	useEffect(() => {
		navigation.addListener('blur', () => dispatch(setOrigin(null)));
		return navigation.removeListener('blur', () => dispatch(setOrigin(null)));
	}, []);

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
