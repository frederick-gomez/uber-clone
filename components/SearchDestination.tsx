import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_KEY } from '@env';
import { useAppDispatch } from '../store/hooks';
import { setDestination } from '../store/reducer/navReducer';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CardStackParamList } from '../types/RootStackParamList';

type rideScreenType = NativeStackNavigationProp<CardStackParamList, 'RideOptions'>;

const SearchDestination = () => {
	const dispatch = useAppDispatch();
	const navigation = useNavigation<rideScreenType>();

	return (
		<GooglePlacesAutocomplete
			styles={{
				container: {
					flex: 0,
					marginVertical: 10,
					borderRadius: 25,
					backgroundColor: '#ececec',
					marginHorizontal: 20,
				},
				textInput: {
					borderRadius: 25,
					backgroundColor: '#ececec',
					height: 50,
					paddingLeft: 20,
					fontSize: 14,
				},
			}}
			placeholder='¿A dónde vas?'
			nearbyPlacesAPI='GooglePlacesSearch'
			debounce={400}
			minLength={2}
			enablePoweredByContainer={false}
			onPress={(data, details = null) => {
				dispatch(
					setDestination({
						location: {
							lat: details!.geometry.location.lat,
							lng: details!.geometry.location.lng,
						},
						name: data.description,
					})
				);
				navigation.navigate('RideOptions');
			}}
			fetchDetails
			query={{
				key: GOOGLE_MAPS_KEY,
				language: 'es',
			}}
		/>
	);
};

export default SearchDestination;
