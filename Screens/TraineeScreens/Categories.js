// RN core components & API imports
import { View, StyleSheet } from 'react-native';

// Custom components imports
import CategoryList from '../../Components/CategoriesOutput/CategoryList';

// Our categories
const CATEGORIES = [
	{
		id: 'c1',
		name: 'Yoga',
		imageUrl: require('../../Images/Categories/Yoga.png'),
	},
	{
		id: 'c2',
		name: 'Pilates',
		imageUrl: require('../../Images/Categories/Pilates.png'),
	},
	{
		id: 'c3',
		name: 'Spining',
		imageUrl: require('../../Images/Categories/Spining.png'),
	},
	{
		id: 'c4',
		name: 'KickBoxing',
		imageUrl: require('../../Images/Categories/KickBoxing.png'),
	},
	{
		id: 'c5',
		name: 'TRX',
		imageUrl: require('../../Images/Categories/TRX.png'),
	},
	{
		id: 'c6',
		name: 'Strengh',
		imageUrl: require('../../Images/Categories/Strengh.png'),
	},
	{
		id: 'c7',
		name: 'Dumbels',
		imageUrl: require('../../Images/Categories/Dumbels.png'),
	},
	{
		id: 'c8',
		name: 'Zumba',
		imageUrl: require('../../Images/Categories/Zumba.png'),
	},
	{
		id: 'c9',
		name: 'Swimming',
		imageUrl: require('../../Images/Categories/Swiming.png'),
	},
	{
		id: 'c10',
		name: 'Other',
		imageUrl: require('../../Images/Categories/Other.png'),
	},
];

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
