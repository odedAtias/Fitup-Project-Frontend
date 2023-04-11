// RN core components & API imports
import { View, Text, StyleSheet, FlatList } from 'react-native';

// Custom components imports
import FavoriteTrainerItem from './FavoriteTrainerItem';

// FavoriteTrainerItem
const FavoriteTrainersList = ({ favoriteTrainers }) => {
	// FavoriteTrainersList handlers
	const renderItem = ({ item }) => {
		const { email, events, description, ...rest } = item;
		return <FavoriteTrainerItem {...rest} />;
	};
	return (
		<View style={styles.container}>
			<FlatList
				data={favoriteTrainers}
				renderItem={renderItem}
				keyExtractor={item => item._id}
				contentContainerStyle={styles.list}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'flex-start',
		padding: 20,
	},
	list: {
		width: '100%',
		height: '100%',
	},
});

export default FavoriteTrainersList;
