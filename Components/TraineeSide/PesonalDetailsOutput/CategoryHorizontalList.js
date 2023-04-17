// Hooks imports
import { useNavigation } from '@react-navigation/native';

// RN core components & API imports
import { FlatList, StyleSheet, View } from 'react-native';

// Constants
import { CATEGORIES } from './../../../Constants/Categories';

// Custom components imports
import CategoryGridTile from './../CategoriesOutput/CategoryGridTile';

// CategoriesHorizontalList component
const CategoryHorizontalList = () => {
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
		<View stlye={styles.container}>
			<FlatList
				data={CATEGORIES}
				keyExtractor={item => item.id}
				horizontal
				showsHorizontalScrollIndicator={false}
				renderItem={itemData => (
					<CategoryGridTile
						categoryName={itemData.item.name}
						categoryImageUrl={itemData.item.imageUrl}
						onPress={() => handlePress(itemData.item)}
					/>
				)}
			/>
		</View>
	);
};

// ParticipantsList StyleSheet
const styles = StyleSheet.create({});

export default CategoryHorizontalList;
