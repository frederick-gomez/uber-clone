import { FlatList, Image, Pressable, Text, View } from 'react-native';
import React from 'react';

const data = [
	{
		id: 1,
		title: 'Viaje',
		image: 'https://links.papareact.com/3pn',
		screen: 'MapScreen',
	},
	{
		id: 2,
		title: 'Envios',
		image: 'https://links.papareact.com/28w',
		screen: 'EatsScreen',
	},
];

const NavOptions = () => {
	return (
		<FlatList
			horizontal
			data={data}
			renderItem={({ item }) => (
				<Pressable>
					<Image
						style={{
							width: 100,
							height: 100,
							resizeMode: 'contain',
						}}
						source={{
							uri: item.image,
						}}
					/>
					<Text>{item.title}</Text>
				</Pressable>
			)}
		/>
	);
};

export default NavOptions;
