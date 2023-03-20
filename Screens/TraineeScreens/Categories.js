// RN core components & API imports
import { View, StyleSheet } from 'react-native';

// Custom components imports
import CategoryList from '../../Components/CategoriesOutput/CategoryList';

// Constants
import { CATEGORIES } from '../../Constants/Categories';

// Categories component
const Categories = () => {
	return (
		<View style={styles.container}>
			<CategoryList categories={CATEGORIES} />
		</View>
	);
};

// Categories styleSheet
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: '5%',
		paddingBottom: '15%',
		backgroundColor: 'white',
	},
});

export default Categories;
