// Hooks import

// RN core components & API imports
import {
	View,
	ImageBackground,
	StyleSheet,
	Pressable,
	Text,
} from 'react-native';

// Context
import { Context } from '../../store/Context';
import { useContext } from 'react';

// EventCard component
const EventCard = ({ event, onPress }) => {
	// destructuring the relevant props
	const { category, date, hour, city, numOfTrainees, maxNumOfTrainees, id } =
		event;

	// Find the categoryImage
	const context = useContext(Context);
	const imageUrl = context.categories.find(c => c.name === category).imageUrl;

	return (
		<View style={styles.container}>
			<Pressable onPress={onPress} style={styles.innerContainer}>
				<ImageBackground source={imageUrl} style={styles.contentContainer}>
					<View style={styles.flexRow}>
						<Text style={styles.text}>{date}</Text>
						<Text style={styles.text}>{city}</Text>
					</View>
					<Text style={styles.title}>{category}</Text>
					<View style={styles.flexRow}>
						<Text style={styles.text}>{hour}</Text>
						<Text style={styles.text}>
							{maxNumOfTrainees - numOfTrainees === 0
								? 'Sold out'
								: maxNumOfTrainees - numOfTrainees + ' avaiable places'}
						</Text>
					</View>
				</ImageBackground>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 0,
		height: 120,
		width: 260,
		opacity: 0.7,
		marginRight: 20,
	},
	innerContainer: {
		flex: 1,
	},
	contentContainer: {
		justifyContent: 'space-between',
		flex: 1,
		padding: '2%',
	},
	flexRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},

	text: {
		fontFamily: 'rubik',
		color: 'white',
		fontSize: 15,
		fontWeight: 'bold',
	},

	title: {
		fontFamily: 'blanka',
		color: 'white',
		fontSize: 25,
		textAlign: 'center',
	},
});

export default EventCard;
