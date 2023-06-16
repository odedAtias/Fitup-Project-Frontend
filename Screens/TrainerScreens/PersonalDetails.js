// Hooks imports
import {useContext} from 'react';

// RN core components & API imports
import {StyleSheet, Text, View} from 'react-native';

// Custom components imports
import TrainerImage from '../../Components/TraineeSide/EventsOutput/TrainerImage';
import Aboutme from '../../Components/TraineeSide/TrainerProfileOutput/Aboutme';
import TraineeMetrics from '../../Components/TraineeSide/PesonalDetailsOutput/TraineeMetrics';
import Button from '../../Components/UI/Button';

// Constants
import Colors from '../../Constants/Colors';

// Contexts
import {TrainerContext} from './../../store/TrainerContext';

// PersonalDetails
const PersonalDetails = ({navigation}) => {
	const context = useContext(TrainerContext);
	const {image, firstName, lastName, email, description, weight, height} =
		context.trainer;
	return (
		<View style={styles.container}>
			{/* IMAGE & MAIN DETAILS */}
			<View style={styles.trainerHeaderContainer}>
				<TrainerImage
					imageUrl={image}
					style={{
						width: 130,
						height: 130,
						borderRadius: 100,
					}}
				/>
				<Text style={styles.headingText}>{firstName + ' ' + lastName}</Text>
				<Text style={styles.text}>{email}</Text>
			</View>
			{/* ABOUT ME */}
			<Aboutme
				description={
					description.length === 0
						? 'Experienced trainer dedicated to empowering individuals through engaging and customized training programs. Passionate about helping you achieve your goals!'
						: description
				}
			/>
			<View style={{marginBottom: 10}}></View>
			<TraineeMetrics weight={weight} height={height} />
			<View
				style={{width: '100%', alignItems: 'center', justifyContent: 'center'}}
			>
				<Button
					style={{
						backgroundColor: '#F06A6E',
						color: 'white',
						borderRadius: 10,
						width: '80%',
						marginTop: '5%',
					}}
					onPress={() => navigation.navigate('Login')}
					textStyle={{fontSize: 16}}
				>
					Sign Out
				</Button>
			</View>
		</View>
	);
};

export default PersonalDetails;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: '5%',
		paddingVertical: '2%',
		backgroundColor: Colors.Backgrounds.primary,
	},
	trainerHeaderContainer: {
		alignItems: 'center',
	},
	headingText: {
		fontSize: 22,
		fontFamily: 'rubik',
		fontWeight: 'bold',
	},
	text: {
		marginTop: 5,
		fontSize: 16,
		fontFamily: 'rubik',
		color: Colors.Texts.sixth,
	},
});
