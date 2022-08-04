import React, { useEffect, useRef } from 'react';
import {
	GooglePlacesAutocomplete,
	GooglePlacesAutocompleteRef,
} from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_KEY } from '@env';
import { useAppDispatch } from '../store/hooks';
import { setOrigin, setDestination } from '../store/reducer/navReducer';
import { useNavigation } from '@react-navigation/native';

const SearchOrigin = () => {
	const dispatch = useAppDispatch();
	const navigation = useNavigation();
	const searchBarRef = useRef<GooglePlacesAutocompleteRef>(null);

	useEffect(() => {
		const listener = navigation.addListener('blur', () => searchBarRef.current?.clear());
		return listener;
	}, [navigation]);

	return (
		<GooglePlacesAutocomplete
			ref={searchBarRef}
			styles={{
				container: {
					flex: 0,
					marginVertical: 15,
					borderRadius: 25,
					backgroundColor: '#ececec',
				},
				textInput: {
					borderRadius: 25,
					backgroundColor: '#ececec',
					height: 50,
					paddingLeft: 20,
					fontSize: 14,
				},
			}}
			placeholder='Ingresar punto de partida'
			nearbyPlacesAPI='GooglePlacesSearch'
			debounce={400}
			minLength={2}
			enablePoweredByContainer={false}
			onPress={(data, details = null) => {
				dispatch(
					setOrigin({
						location: {
							lat: details!.geometry.location.lat,
							lng: details!.geometry.location.lng,
						},
						name: data.description,
					})
				);
				dispatch(setDestination(null));
			}}
			fetchDetails
			query={{
				key: GOOGLE_MAPS_KEY,
				language: 'es',
				components: 'country:py',
			}}
		/>
	);
};

export default SearchOrigin;
