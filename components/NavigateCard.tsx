import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const NavigateCard = () => {
	return (
		<View style={styles.container}>
			<Text>NavigateCard</Text>
		</View>
	);
};

export default NavigateCard;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		flex: 1,
	},
});
