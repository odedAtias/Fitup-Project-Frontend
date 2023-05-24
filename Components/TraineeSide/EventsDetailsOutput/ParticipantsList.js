// RN core components & API imports
import {StyleSheet, FlatList, View} from 'react-native';

// Custom components imports
import ParticipantItem from './ParticipantItem';

// ParticipantsList component
const ParticipantsList = ({participants}) => (
	<View stlye={styles.container}>
		<FlatList
			data={participants}
			horizontal
			showsHorizontalScrollIndicator={false}
			renderItem={itemData => (
				<ParticipantItem participant={{...itemData.item}} />
			)}
			keyExtractor={item => item._id}
		/>
	</View>
);

// ParticipantsList StyleSheet
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		flex: 1,
	},
});

export default ParticipantsList;
