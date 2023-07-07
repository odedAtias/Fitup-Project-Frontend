// RN core components & API imports
import {View, Text, StyleSheet, FlatList} from 'react-native';

// Custom components imports
import FavoriteTrainerItem from './FavoriteTrainerItem';
import Colors from '../../../Constants/Colors';

// FavoriteTrainerItem
const FavoriteTrainersList = ({favoriteTrainers}) => {
	// FavoriteTrainersList handlers
	const renderItem = ({item}) => {
		const {email, events, description, ...rest} = item;
		return <FavoriteTrainerItem {...rest} />;
	};
	return (
		<View style={styles.container}>
			<Text style={styles.headingText}>
				Take your trainings to new heights with your favotire trainers
			</Text>
			<FlatList
				data={favoriteTrainers}
				renderItem={renderItem}
				keyExtractor={item => item._id}
				style={styles.list}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: '5%',
		paddingBottom: '15%',
		paddingHorizontal: '3%',
	},
	headingText: {
		fontFamily: 'rubik',
		fontSize: 20,
		textAlign: 'center',
		marginBottom: 15,
		color: Colors.Texts.primary,
	},
	list: {
		width: '100%',
		height: '100%',
	},
});

export default FavoriteTrainersList;
