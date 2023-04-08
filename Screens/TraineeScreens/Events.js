// Hooks components
import { useLayoutEffect, useContext, useEffect, useState } from 'react';

// Contexts imports
import { TraineeContext } from '../../store/TraineeContext';

// RN core components & API imports
import { View, StyleSheet, Platform } from 'react-native';

// Custom components imports
import Header from '../../Components/UI/Header';
import EventsList from '../../Components/TraineeSide/EventsOutput/EventsList';

// Constants
import Colors from '../../Constants/Colors';

// Utils
import { fetchData } from '../../utils/http';

// Events component
const Events = ({ navigation, route }) => {
	// loading indicator
	const [isFetching, setIsFetching] = useState(true);

	// Context initialize
	const context = useContext(TraineeContext);

	// Loading dynamically the screen options
	useLayoutEffect(() => {
		navigation.setOptions({
			header: () => (
				<Header
					label={route.params.categoryName}
					containerStyle={{
						backgroundColor: Colors.Headers.primary,
						paddingTop: Platform.OS === 'android' ? '15%' : '7%',
						paddingBottom: Platform.OS === 'android' ? '10%' : '7%',
						paddingHorizontal: 10,
					}}
					labelStyle={{
						fontSize: 40,
						color: Colors.Texts.secondary,
					}}
					onPressLeft={() => navigation.goBack()}
					iconsColor={Colors.Texts.secondary}
				/>
			),
		});
	});

	// Loading the Events to our store
	useEffect(() => {
		async function getEvents() {
			setIsFetching(true);
			try {
				const response = await fetchData('events');
				context.setEvents(response.data);
			} catch (error) {
				console.log(error.message);
			}
			setIsFetching(false);
		}
		getEvents();
	}, []);

	if (!isFetching && context.events) {
		return (
			<View style={styles.container}>
				<EventsList
					events={context.events.filter(
						e => e.category === route.params.categoryName
					)}
				/>
			</View>
		);
	}
};

// Events StyleSheet
const styles = StyleSheet.create({
	container: {
		paddingBottom: '12%',
	},
});

export default Events;
