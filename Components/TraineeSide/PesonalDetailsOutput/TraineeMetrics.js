import { View, Text, StyleSheet, Pressable } from 'react-native';

const TraineeMetrics = ({ height, weight }) => {
	const bmi = (weight / height ** 2).toFixed(1);
	return (
		<View style={styles.container}>
			<View style={styles.metricContainer}>
				<View style={styles.metric}>
					<Text style={styles.title}>Height</Text>
					<Text style={styles.value}>{height}</Text>
					<Pressable
						onPress={() => {
							console.log('edit ...');
						}}>
						<Text style={{ color: 'grey', marginTop: 5 }}>Edit</Text>
					</Pressable>
				</View>
			</View>
			<View style={styles.metricContainer}>
				<View style={styles.metric}>
					<Text style={styles.title}>Weight</Text>
					<Text style={styles.value}>{weight}</Text>
					<Pressable
						onPress={() => {
							console.log('edit ...');
						}}>
						<Text style={{ color: 'grey', marginTop: 5 }}>Edit</Text>
					</Pressable>
				</View>
			</View>
			<View style={styles.metricContainer}>
				<View style={styles.metric}>
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
	// iconButton: {
	// 	position: 'absolute', // to position the IconButton
	// 	top: 5,
	// 	left: 5,
	// },
});

export default TraineeMetrics;
