import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Icon } from '@rneui/themed';

const FlashScreen = () => {
	return (
		<View style={styles.container}>
			<Icon name='engineering' type='material' reverse color='#000' size={100} />
			<Text style={styles.text}>Bajo construcción...</Text>
		</View>
	);
};

export default FlashScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 26,
		fontWeight: '600',
		marginTop: 30,
	},
});
