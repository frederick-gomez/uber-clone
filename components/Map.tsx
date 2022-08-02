import React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { useAppSelector } from '../store/hooks';

const Map = () => {
	const stateOrigin = useAppSelector((state) => state.nav.origin?.location);
	const name = useAppSelector((state) => state.nav.origin?.name);

	return (
		<MapView
			style={{ flex: 1 }}
			provider={PROVIDER_GOOGLE}
			mapType='mutedStandard'
			showsMyLocationButton={true}
			minZoomLevel={13}
			region={{
				latitude: stateOrigin!.lat,
				longitude: stateOrigin!.lng,
				latitudeDelta: 0.005,
				longitudeDelta: 0.005,
			}}
		>
			{stateOrigin && (
				<Marker
					coordinate={{ latitude: stateOrigin!.lat, longitude: stateOrigin!.lng }}
					title={name}
				/>
			)}
		</MapView>
	);
};

export default Map;
