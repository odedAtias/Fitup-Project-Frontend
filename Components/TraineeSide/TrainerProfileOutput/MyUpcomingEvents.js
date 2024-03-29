// RN core components & API imports
import {View, FlatList, StyleSheet} from 'react-native';

// Custom components imports
import Title from '../../UI/Title';
import EventCard from '../../TraineeSide/TrainerProfileOutput/EventCard';

// utils
import {sortedEventsByDate} from '../../../utils/Date';

// MyUpcomingEvents component
const MyUpcomingEvents = ({events, trainerSide}) => {
	// need to sort the cards by the nearest date
	const sortedEvents = sortedEventsByDate(events);
	return (
		<View>
			{!trainerSide && <Title>My upcoming events</Title>}
			<View stlye={styles.container}>
				<FlatList
					data={sortedEvents}
					horizontal
					showsHorizontalScrollIndicator={false}
					renderItem={itemData => (
						<EventCard event={{...itemData.item}} trainerSide={trainerSide} />
					)}
					keyExtractor={item => item._id}
				/>
			</View>
		</View>
	);
};

// ParticipantsList StyleSheet
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		flex: 1,
	},
});

export default MyUpcomingEvents;
