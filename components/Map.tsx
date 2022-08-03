import React, { useRef, useEffect } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { useAppSelector } from '../store/hooks';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_KEY } from '@env';

const Map = () => {
	const origin = useAppSelector((state) => state.nav.origin?.location);
	const destination = useAppSelector((state) => state.nav.destination?.location);
	const name = useAppSelector((state) => state.nav.origin?.name);
	const mapRef = useRef<MapView | null>(null);

	useEffect(() => {
		if (!origin || !destination) return;

		mapRef.current?.fitToSuppliedMarkers(['origin-marker', 'destination-marker'], {
			edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
		});
	}, [origin, destination]);

	return (
		<MapView
			ref={mapRef}
			style={{ flex: 1 }}
			provider={PROVIDER_GOOGLE}
			mapType='mutedStandard'
			minZoomLevel={13}
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
					title={name}
					identifier='origin-marker'
				/>
			)}
			{/* Destination Marker */}
			{destination && (
				<Marker
					coordinate={{ latitude: destination.lat, longitude: destination.lng }}
					title={name}
					identifier='destination-marker'
				/>
			)}
		</MapView>
	);
};

export default Map;
