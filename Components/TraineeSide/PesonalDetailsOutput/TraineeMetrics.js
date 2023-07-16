// Hooks imports
import {useNavigation} from '@react-navigation/native';

// RN core components & API imports
import {StyleSheet, Text, View} from 'react-native';

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
					<Text style={styles.value}>{height} cm</Text>
				</View>
			</View>
			<View style={styles.metricContainer}>
				<View style={styles.metric}>
					<Text style={styles.title}>Weight</Text>
					<Text style={styles.value}>{weight} kg</Text>
				</View>
			</View>
			<View style={styles.metricContainer}>
				<View style={[styles.metric]}>
					<Text style={[styles.title, {color: bmiColor(bmi)}]}>BMI</Text>
					<Text style={[styles.value, {color: bmiColor(bmi)}]}>{bmi}</Text>
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
		width: '100%',
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
		backgroundColor: 'rgb(216,216,216)',
	},
});

export default TraineeMetrics;
