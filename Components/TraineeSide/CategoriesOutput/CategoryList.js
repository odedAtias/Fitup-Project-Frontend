// Hooks imports
import { useNavigation } from '@react-navigation/native';

// RN core components & API imports
import { FlatList, StyleSheet, View } from 'react-native';

// Custom components imports
import CategoryGridTile from './CategoryGridTile';

// CategoryList component
const CategoryList = ({ categories }) => {
	// navigation initialize
	const navigation = useNavigation();

	// CategoryList handlers
	const handlePress = category => {
		navigation.navigate('Events', {
			categoryId: category.id,
			categoryName: category.name,
		});
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={categories}
				keyExtractor={item => item.id}
				renderItem={itemData => (
					<CategoryGridTile
						categoryName={itemData.item.name}
						categoryImageUrl={itemData.item.imageUrl}
						onPress={() => handlePress(itemData.item)}
					/>
				)}
				numColumns={2}
			/>
		</View>
	);
};

// CategoryList StyleSheet
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
	},
});

export default CategoryList;
