import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SearchDestination from './SearchDestination';

const NavigateCard = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Elige un viaje</Text>
			<View>
				<SearchDestination />
			</View>
		</View>
	);
};

export default NavigateCard;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		flex: 1,
	},
	text: {
		paddingVertical: 15,
		marginBottom: 10,
		textAlign: 'center',
		fontSize: 18,
		fontWeight: '600',
		borderBottomColor: '#ececec',
		borderBottomWidth: 1,
	},
});
