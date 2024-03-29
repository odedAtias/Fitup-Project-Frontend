// Hooks imports
import {useContext} from 'react';

// RN core components & API imports
import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import Checkbox from 'expo-checkbox';

// Custom component import
import SignupButton from '../SignupOutput/SignupButton';
import Link from '../../UI/Link';

// Contexts imports
import {SignupContext} from '../../../store/SignupContext';

// Constants
import Colors from '../../../Constants/Colors';
import {alert} from '../../../Constants/Alert';

// Step1 component
const Step1 = ({navigation}) => {
	// Context initialize
	const context = useContext(SignupContext);
	
	// Step1 submit handler
	const handleSubmit = () => {
		// Input validation
		if (!context.type) {
			alert(
				'Missing Required Information',
				'Please select the relevant type to continue.'
			);
			return;
		}
		navigation.navigate('Step2');
	};
	
	return (
		<View style={styles.container}>
			<Text style={[styles.headingText, styles.spacing]}>
				Let's customize your profile
			</Text>
			<Text style={[styles.text]}>Choose the type of your account :</Text>
			<View style={styles.CheckboxesContainer}>
				<Pressable
					style={[
						styles.checkboxContainer,
						context.type === 'trainee' && styles.checked,
					]}
					onPress={() => context.setType('trainee')}
				>
					<Checkbox
						style={styles.checkbox}
						color={
							context.type === 'trainee' ? Colors.Buttons.third : undefined
						}
						value={context.type === 'trainee'}
					/>
					<Text style={styles.checkboxText}>Trainee</Text>
				</Pressable>
				<Pressable
					style={[
						styles.checkboxContainer,
						context.type === 'trainer' && styles.checked,
					]}
					onPress={() => context.setType('trainer')}
				>
					<Checkbox
						style={styles.checkbox}
						color={
							context.type === 'trainer' ? Colors.Buttons.third : undefined
						}
						value={context.type === 'trainer'}
					/>
					<Text style={styles.checkboxText}>Trainer</Text>
				</Pressable>
			</View>
			<SignupButton onPress={handleSubmit}>{'Next >'}</SignupButton>
			<View style={styles.linkContainer}>
				<Text style={[styles.text, {marginRight: 5}]}>
					Alreay have an account ?
				</Text>
				<Link onPress={() => navigation.goBack()}>Sign in</Link>
			</View>
			<Image
				source={require('../../../Images/Signup/step1.png')}
				style={{
					width: 180,
					height: 180,
					resizeMode: 'contain',
					alignSelf: 'center',
					marginTop: '5%',
				}}
			></Image>
		</View>
	);
};

// Step1 StyleSheet
const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		paddingHorizontal: '5%',
	},
	headingText: {
		fontFamily: 'rubik',
		fontSize: 26,
		fontWeight: '600',
		textAlign: 'left',
	},
	spacing: {
		marginBottom: '10%',
	},
	text: {
		fontFamily: 'rubik',
		fontSize: 17,
		fontWeight: '600',
		textAlign: 'left',
	},
	checkboxContainer: {
		flexDirection: 'row',
		padding: '5%',
		borderColor: 'gray',
		borderWidth: 1,
		borderRadius: 30,
		marginTop: '10%',
	},
	checkboxText: {
		fontFamily: 'rubik',
		fontWeight: '600',
		fontSize: 16,
		marginLeft: 10,
	},
	checkbox: {
		borderRadius: 50,
		borderWidth: 1,
		borderColor: 'gray',
		backgroundColor: 'white',
	},
	checked: {
		borderColor: 'black',
	},
	linkContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default Step1;
