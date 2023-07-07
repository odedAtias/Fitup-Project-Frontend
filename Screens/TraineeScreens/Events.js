// Hooks components
import {useLayoutEffect, useContext} from 'react';

// Contexts imports
import {EventsContext} from '../../store/EventsContext';

// RN core components & API imports
import {View, StyleSheet, Platform} from 'react-native';

// Custom components imports
import Header from '../../Components/UI/Header';
import EventsList from '../../Components/TraineeSide/EventsOutput/EventsList';

// Constants
import Colors from '../../Constants/Colors';

// Events component
const Events = ({navigation, route}) => {
	// Context initialize
	const eventsContext = useContext(EventsContext);
	const {categoryName} = route.params;

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

	if (eventsContext.events && eventsContext.events.length > 0) {
		return (
			<View style={styles.container}>
				<EventsList
					events={eventsContext.events.filter(e => e.category === categoryName)}
					category={categoryName}
				/>
			</View>
		);
	}
};

// Events StyleSheet
const styles = StyleSheet.create({
	container: {
		paddingBottom: '15%',
	},
});

export default Events;
