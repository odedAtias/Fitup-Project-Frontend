// Hooks imports
import { useContext, useState, useEffect } from 'react';

// RN core components & API imports
import { View, StyleSheet } from 'react-native';

// Custom components imports
import CategoryList from '../../Components/CategoriesOutput/CategoryList';

// Context
import { Context } from '../../store/Context';

// Utils
import { fetchData } from '../../utils/http';

// Categories component
const Categories = () => {
	// Context initialize
	const context = useContext(Context);

	// loading indicator
	const [isFetching, setIsFetching] = useState(true);

	// Loading the Categories to our store
	useEffect(() => {
		async function getCategories() {
			setIsFetching(true);
			try {
				const response = await fetchData('categories');
				const categories = await response.data.map(c => ({
					...c,
					imageUrl: `../../Images/Categories/${c.name}.png`,
				}));
				context.setCategories(categories);
			} catch (error) {
				console.log(error.message);
			}
			setIsFetching(false);
		}
		getCategories();
	}, []);

	if (!isFetching) {
		return (
			<View style={styles.container}>
				<CategoryList categories={context.categories} />
			</View>
		);
	}
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
