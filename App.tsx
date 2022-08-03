import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from './store/store';
import { RootStackParamList } from './types/RootStackParamList';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import FlashScreen from './screens/FlashScreen';

// TODO: reset origin coordinates on back press
// !!BUG: map doesn't resize correctly

export default function App() {
	const Stack = createNativeStackNavigator<RootStackParamList>();

	return (
		<Provider store={store}>
			<SafeAreaProvider>
				<NavigationContainer>
					<Stack.Navigator initialRouteName='HomeScreen' screenOptions={{ headerShown: false }}>
						<Stack.Screen name='HomeScreen' component={HomeScreen} />
						<Stack.Screen name='MapScreen' component={MapScreen} />
						<Stack.Screen name='FlashScreen' component={FlashScreen} />
					</Stack.Navigator>
				</NavigationContainer>
			</SafeAreaProvider>
		</Provider>
	);
}
