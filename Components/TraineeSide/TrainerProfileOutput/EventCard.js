// Hooks imports
import {useNavigation} from '@react-navigation/native';
import {useContext} from 'react';

// RN core components & API imports
import {View, ImageBackground, StyleSheet, Pressable, Text} from 'react-native';

// Contexts imports
import {EventsContext} from './../../../store/EventsContext';

// Constants
import {CATEGORIES} from '../../../Constants/Categories';

// EventCard component
const EventCard = ({event}) => {
	// Context intitialize
	const context = useContext(EventsContext);

	// Navigation initialize
	const navigation = useNavigation();

	// destructuring the relevant props
	const {category, date, hour, city, participants, maxParticipants} = event;

	// find the relevant imageUrl
	const imageUrl = CATEGORIES.find(c => c.name === category).imageUrl;

	// EventCard handlers
	const handlePress = () => {
		const adjustedEvent = context.events.find(e => e._id === event._id);
		navigation.navigate('EventDetails', adjustedEvent);
	};

	return (
		<Pressable onPress={handlePress} style={styles.innerContainer}>
			<View style={styles.container}>
				<ImageBackground source={imageUrl} style={styles.contentContainer}>
					<View style={styles.flexRow}>
						<Text style={styles.text}>{date}</Text>
						<Text style={styles.text}>{city}</Text>
					</View>
					<Text style={styles.title}>{category}</Text>
					<View style={styles.flexRow}>
						<Text style={styles.text}>{hour}</Text>
						<Text style={styles.text}>
							{maxParticipants - participants.length === 0
								? 'Sold out'
								: maxParticipants - participants.length + ' avaiable places'}
						</Text>
					</View>
				</ImageBackground>
			</View>
		</Pressable>
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
