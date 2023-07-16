// Hooks components
import {useLayoutEffect, useContext, useState} from 'react';

// Contexts imports
import {EventsContext} from '../../store/EventsContext';

// RN core components & API imports
import {View, StyleSheet, Platform, Text} from 'react-native';

// Custom components imports
import Header from '../../Components/UI/Header';
import EventsList from '../../Components/TraineeSide/EventsOutput/EventsList';
import SearchInput from '../../Components/TraineeSide/EventsOutput/SearchInput';

// Constants
import Colors from '../../Constants/Colors';

// Utils
import {filterEventsByCity} from './../../utils/filters';

// Events component
const Events = ({navigation, route}) => {
	// Context initialize
	const eventsContext = useContext(EventsContext);
	const {categoryName} = route.params;

	// Adjsuted events list by category
	const relevantEvents = eventsContext.events.filter(
		e => e.category === categoryName
	);

	const [searchText, setSearchText] = useState('');
	const [eventsList, setEventsList] = useState(relevantEvents);

	// Loading dynamically the screen options
	useLayoutEffect(() => {
		navigation.setOptions({
			header: () => (
				<Header
					label={categoryName}
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

	if (!relevantEvents || relevantEvents.length === 0) {
		return (
			<View style={styles.fallbackTextContainer}>
				<Text style={styles.headingText}>
					There are no {categoryName} trainings in the system !
				</Text>
			</View>
		);
	}

	const handleChangeText = text => {
		if (!text || text.length === 0) {
			setEventsList(prev => eventsContext.events);
			return;
		}
		const events = filterEventsByCity(relevantEvents, text);
		console.log(text, events);
		setEventsList(prev => events);
	};

	return (
		<View style={styles.container}>
			<SearchInput
				inputConfigurations={{
					placeholder: 'Search events by city ...',
					onChangeText: handleChangeText,
				}}
			/>
			<EventsList events={eventsList} />
		</View>
	);
};

// Events StyleSheet
const styles = StyleSheet.create({
	container: {
		height: '100%',
	},
	fallbackTextContainer: {
		height: '100%',
		paddingHorizontal: '5%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	headingText: {
		fontFamily: 'rubik',
		fontSize: 22,
		textAlign: 'center',
		marginBottom: 20,
		color: Colors.Texts.primary,
	},
});

export default Events;
