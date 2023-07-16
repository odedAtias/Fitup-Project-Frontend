// Hooks components
import {useLayoutEffect, useContext} from 'react';

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

// Events component
const Events = ({navigation, route}) => {
	// Context initialize
	const eventsContext = useContext(EventsContext);
	const {categoryName} = route.params;

	// Adjsuted events list by category
	const relevantEvents = eventsContext.events.filter(
		e => e.category === categoryName
	);

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

	return (
		<View style={styles.container}>
			<SearchInput inputConfigurations={{placeholder: 'search something'}} />
			<EventsList events={relevantEvents} />
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
