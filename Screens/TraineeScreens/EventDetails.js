// Hooks imports
import { useLayoutEffect } from 'react';
// RN core components & API imports
import { View, StyleSheet } from 'react-native';
// Custom components imports
import Header from '../../Components/Header';
import EventDetailsCard from '../../Components/EventsDetailsOutput/EventDetailsCard';
import Description from '../../Components/Description';
import Button from '../../Components/Button';
// Constatns
import Colors from '../../Constants/Colors';

// EventDetails component
const EventDetails = ({ navigation, route }) => {
	const { description, id, ...cardDetails } = route.params;
	// Loading the dynamic screen options
	useLayoutEffect(() => {
		navigation.setOptions({
			header: () => (
				<Header
					label={'Fit\nUp'}
					containerStyle={{
						backgroundColor: Colors.Headers.secondary,
						padding: Platform.OS === 'ios' ? 10 : 30,
						paddingHorizontal: 10,
					}}
					labelStyle={{
						fontSize: 50,
						color: Colors.Texts.primary,
					}}
					onPress={() => navigation.goBack()}
				/>
			),
		});
	});
	return (
		<View style={styles.container}>
			<EventDetailsCard {...cardDetails} />
			<Description description={description} />
			<View style={{ alignItems: 'center', marginTop: '5%' }}>
				<Button
					style={{
						backgroundColor: Colors.Buttons.secondary,
					}}>
					Register now
				</Button>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default EventDetails;
