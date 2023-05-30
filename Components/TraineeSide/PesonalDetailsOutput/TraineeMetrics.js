// Hooks imports
import {useNavigation} from '@react-navigation/native';

// RN core components & API imports
import {View, Text, StyleSheet, Pressable} from 'react-native';

// Utils
import {bmiColor, calculateBMI} from './../../../utils/stats';

// TraineeMetrics
const TraineeMetrics = ({height, weight}) => {
	const navigation = useNavigation();
	const bmi = calculateBMI(height, weight);

	return (
		<View style={styles.container}>
			<View style={styles.metricContainer}>
				<View style={styles.metric}>
					<Text style={styles.title}>Height</Text>
					<Text style={styles.value}>{height}</Text>
					<Pressable
						onPress={() => {
							navigation.navigate('ManageDetails');
						}}
					>
						<Text style={{color: 'grey', marginTop: 5}}>Edit</Text>
					</Pressable>
				</View>
			</View>
			<View style={styles.metricContainer}>
				<View style={styles.metric}>
					<Text style={styles.title}>Weight</Text>
					<Text style={styles.value}>{weight}</Text>
					<Pressable
						onPress={() => {
							navigation.navigate('ManageDetails');
						}}
					>
						<Text style={{color: 'grey', marginTop: 5}}>Edit</Text>
					</Pressable>
				</View>
			</View>
			<View style={styles.metricContainer}>
				<View style={[styles.metric, {backgroundColor: bmiColor(bmi)}]}>
					<Text style={styles.title}>BMI</Text>
					<Text style={styles.value}>{bmi}</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: '20%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '90%',
	},
	title: {
		fontFamily: 'rubik',
		fontSize: 18,
		marginBottom: 5,
	},
	value: {
		fontFamily: 'rubik',
		fontSize: 15,
	},
	metricContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 100,
		height: 100,
		borderTopColor: 'black',
	},
	metric: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 100,
		height: 100,
		borderRadius: 50,
		backgroundColor: '#f2dcc5',
	},
});

export default TraineeMetrics;
