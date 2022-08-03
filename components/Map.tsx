import React, { useRef, useEffect } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { setTravelTimeInformation } from '../store/reducer/navReducer';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_KEY } from '@env';

const Map = () => {
	const origin = useAppSelector((state) => state.nav.origin?.location);
	const destination = useAppSelector((state) => state.nav.destination?.location);
	const nav = useAppSelector((state) => state.nav);
	const dispatch = useAppDispatch();
	const mapRef = useRef<MapView | null>(null);

	// Resize to fit both markers
	useEffect(() => {
		if (!origin || !destination) return;

		mapRef.current?.fitToSuppliedMarkers(['origin-marker', 'destination-marker'], {
			edgePadding: { top: 20, right: 20, bottom: 20, left: 20 },
		});
	}, [origin, destination]);

	//Calculate travel time
	useEffect(() => {
		if (!origin || !destination) return;
		const mapDestination = nav.destination?.name;
		const mapOrigin = nav.origin?.name;

		const getTravelTime = async () => {
			const response = await fetch(
				`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${mapOrigin}&destinations=${mapDestination}&units=metric&key=${GOOGLE_MAPS_KEY}`
			);

			if (!response.ok) {
				throw new Error(`Error status: ${response.status}`);
			}

			const data = await response.json();
			dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
		};

		getTravelTime();
	}, [origin, destination, GOOGLE_MAPS_KEY]);

	return (
		<MapView
			ref={mapRef}
			style={{ flex: 1 }}
			provider={PROVIDER_GOOGLE}
			mapType='mutedStandard'
			// minZoomLevel={13}
			loadingEnabled
			loadingIndicatorColor='#000'
			region={{
				latitude: origin!.lat,
				longitude: origin!.lng,
				latitudeDelta: 0.005,
				longitudeDelta: 0.005,
			}}
		>
			{/* Directions line */}
			{origin && destination && (
				<MapViewDirections
					strokeWidth={3}
					strokeColor='#000'
					language='es'
					origin={{ latitude: origin.lat, longitude: origin.lng }}
					destination={{ latitude: destination.lat, longitude: destination.lng }}
					apikey={GOOGLE_MAPS_KEY}
				/>
			)}
			{/* Origin Marker */}
			{origin && (
				<Marker
					coordinate={{ latitude: origin.lat, longitude: origin.lng }}
					title={nav.origin?.name}
					identifier='origin-marker'
				/>
			)}
			{/* Destination Marker */}
			{destination && (
				<Marker
					coordinate={{ latitude: destination.lat, longitude: destination.lng }}
					title={nav.destination?.name}
					identifier='destination-marker'
				/>
			)}
		</MapView>
	);
};

export default Map;
