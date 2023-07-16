// Hooks imports
import {useContext} from 'react';

// RN core components & API imports
import {ScrollView, StyleSheet, View} from 'react-native';

// Contexts imports
import {TrainerContext} from '../../store/TrainerContext';

// Custom components imports
import ManageEventForm from '../../Components/TrainerSide/ManageEventOutput/ManageEventForm';

// Utils
import {updateData, deleteData} from '../../utils/http/rest';

// Constants
import {alert} from '../../Constants/Alert';

// ManageEvent Component
const ManageEvent = ({navigation, route}) => {
	const tcx = useContext(TrainerContext);
	const event = tcx.events.find(e => e._id === route.params.eventId);

	const handleDelete = () => {};

	const handleSubmit = () => {};

	return (
		<ScrollView style={styles.scrolling}>
			<View style={styles.container}>
				<ManageEventForm
					event={event}
					navigation={navigation}
					onSubmit={handleSubmit}
					onDelete={handleDelete}
				/>
			</View>
		</ScrollView>
	);
};

// PostEvent StyleSheet
const styles = StyleSheet.create({
	scrolling: {
		flexGrow: 1,
	},
	container: {
		flex: 1,
		paddingVertical: '5%',
	},
	headingText: {
		fontFamily: 'rubik',
		fontSize: 22,
		fontWeight: '600',
		textAlign: 'left',
		marginLeft: '5%',
		marginVertical: '5%',
	},
});

export default ManageEvent;
