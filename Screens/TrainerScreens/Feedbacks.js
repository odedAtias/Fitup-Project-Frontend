import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

// Constants
import {tipsForTrainers} from '../../Constants/Tips';
import Colors from '../../Constants/Colors';

const Feedbacks = () => {
	const [tipIndex, setTipIndex] = useState(0);

	useEffect(() => {
		const today = new Date();
		const dayOfYear = Math.floor(
			(today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24)
		);
		setTipIndex(dayOfYear % tipsForTrainers.length);
	}, []);

	const dailyTip = tipsForTrainers[tipIndex];

	const imageUrl =
		tipIndex % 2 === 0
			? 'https://images.pexels.com/photos/16966329/pexels-photo-16966329/free-photo-of-female-trainer-instructing-a-male-athlete.jpeg?auto=compress&cs=tinysrgb&w=1600'
			: 'https://images.pexels.com/photos/7991623/pexels-photo-7991623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

	return (
		<View style={styles.container}>
			<View style={styles.tipContainer}>
				<Text style={styles.headingText}>Get Your Daily Fitness Tip</Text>
				<Text style={styles.tip}>{dailyTip?.value}</Text>
			</View>
			<Image
				style={styles.image}
				source={{
					uri: imageUrl,
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: '5%',
		alignItems: 'center',
	},
	headingText: {
		fontFamily: 'rubik',
		fontWeight: 'bold',
		fontSize: 24,
		textAlign: 'left',
		width: '95%',
		marginBottom: 20,
	},
	tipContainer: {
		width: '95%',
	},
	tip: {
		fontFamily: 'rubik',
		fontSize: 18,
		marginBottom: 20,
		backgroundColor: Colors.Buttons?.third,
		borderRadius: 5,
		padding: '5%',
	},
	image: {
		width: '100%',
		height: '60%',
		borderRadius: 30,
	},
});

export default Feedbacks;
