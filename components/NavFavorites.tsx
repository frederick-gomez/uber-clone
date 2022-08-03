import { FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from '@rneui/themed';

const data = [
	{
		id: Math.random(),
		icon: 'home',
		location: 'Casa',
		destination: 'A tu casa',
	},
	{
		id: Math.random(),
		icon: 'work',
		location: 'Trabajo',
		destination: 'A tu trabajo',
	},
];

const NavFavorites = () => {
	return (
		<FlatList
			data={data}
			keyExtractor={(item) => item.id.toString()}
			ItemSeparatorComponent={() => <View style={styles.separator} />}
			renderItem={({ item }) => (
				<TouchableOpacity style={styles.itemContainer}>
					<Icon name={item.icon} type='material' style={styles.icon} />
					<View>
						<Text style={styles.title}>{item.location}</Text>
						<Text>{item.destination}</Text>
					</View>
					<View style={{ marginLeft: 'auto' }}>
						<Icon name='chevron-right' color='#ccc' />
					</View>
				</TouchableOpacity>
			)}
		/>
	);
};

export default NavFavorites;

const styles = StyleSheet.create({
	itemContainer: {
		alignItems: 'center',
		flexDirection: 'row',
		marginVertical: 15,
	},
	title: {
		fontSize: 18,
		fontWeight: '600',
	},
	icon: {
		marginRight: 25,
		padding: 15,
		backgroundColor: '#ececec',
		borderRadius: 50,
	},
	separator: {
		backgroundColor: '#ccc',
		height: 1.2,
	},
});
