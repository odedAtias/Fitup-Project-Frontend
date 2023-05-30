// Hooks imports
import {useContext, useState} from 'react';

// RN core components & API imports
import {View, StyleSheet} from 'react-native';

// Custom components imports
import ManageDetailsInput from './ManageDetailsInput';
import TrainerImage from '../EventsOutput/TrainerImage';
import Link from '../../UI/Link';
import Button from '../../UI/Button';

// Constants
import Colors from '../../../Constants/Colors';

// Contexts imports
import {TraineeContext} from './../../../store/TraineeContext';
import {alert} from './../../../Constants/Alert';

// ManageDetailsForm component
const ManageDetailsForm = ({onSubmit}) => {
	const ctx = useContext(TraineeContext);

	const [inputs, setInputs] = useState({
		firstName: {
			value: ctx.trainee.firstName,
			isValid: true,
		},
		lastName: {
			value: ctx.trainee.lastName,
			isValid: true,
		},
		height: {
			value: ctx.trainee.height,
			isValid: true,
		},
		weight: {
			value: ctx.trainee.weight,
			isValid: true,
		},
	});

	// Input validation functions
	const validateNames = input => {
		// First condition - input is requierd
		if (!input || !input.trim()) {
			return false;
		}
		// Second condition - checking the pattern
		const regex = /^[A-Z][a-z]{1,}$/;
		input = input.trim();
		if (!regex.test(input)) {
			return false;
		}
		return true;
	};

	const validateWeight = input => {
		if (!input || !input.trim()) {
			return false;
		}
		const weight = parseInt(input);
		if (weight < 30 || weight > 200) {
			return false;
		}
		return true;
	};

	const validateHeight = input => {
		if (!input || !input.trim()) {
			return false;
		}
		const height = parseInt(input);
		if (height < 140 || height > 220) {
			return false;
		}
		return true;
	};

	// ManageDetailsForm handlers
	const handleInputChange = (inputIdertifier, enteredValue) => {
		setInputs(currentInputs => {
			return {
				...currentInputs,
				// Way to update keys/values dynamically
				[inputIdertifier]: {value: enteredValue, isValid: true},
			};
		});
	};

	const handleConfirm = () => {
		const formData = {
			firstName: inputs.firstName.value,
			lastName: inputs.lastName.value,
			weight: inputs.weight.value.toString(),
			height: inputs.height.value.toString(),
		};

		// Input validation
		const firstNameIsValid = validateNames(formData.firstName);
		const lastNameIsValid = validateNames(formData.lastName);
		const weightIsValid = validateWeight(formData.weight);
		const heightIsValid = validateHeight(formData.height);
		// if some input from the validation returned false
		if (
			!firstNameIsValid ||
			!lastNameIsValid ||
			!weightIsValid ||
			!heightIsValid
		) {
			alert('Invalid Input', 'Please check your input fields.');
			setInputs(currentInputs => {
				return {
					firstName: {
						value: currentInputs.firstName.value,
						isValid: firstNameIsValid,
					},
					lastName: {
						value: currentInputs.lastName.value,
						isValid: lastNameIsValid,
					},
					weight: {
						value: currentInputs.weight.value,
						isValid: weightIsValid,
					},
					height: {
						value: currentInputs.height.value,
						isValid: heightIsValid,
					},
				};
			});
			return;
		}
		onSubmit(formData);
	};

	return (
		<View style={styles.container}>
			{/* Image */}
			<View style={styles.avatar}>
				<TrainerImage
					imageUrl={ctx.trainee.image}
					style={{
						width: 130,
						height: 130,
						borderRadius: 100,
						marginBottom: 2,
					}}
				/>
				<Link>Change Picture</Link>
			</View>
			{/* First Name */}
			<ManageDetailsInput
				label='First Name'
				invalid={!inputs.firstName.isValid}
				inputConfigurations={{
					placeholder: 'John',
					autoCorrect: false,
					value: inputs.firstName.value,
					onChangeText: handleInputChange.bind(this, 'firstName'),
				}}
			/>
			{/* Last Name */}
			<ManageDetailsInput
				label='Last Name'
				invalid={!inputs.lastName.isValid}
				inputConfigurations={{
					placeholder: 'Doe',
					value: inputs.lastName.value,
					onChangeText: handleInputChange.bind(this, 'lastName'),
				}}
			/>
			{/* Weight & Height */}
			<View style={styles.twoInRow}>
				<View style={styles.inputContainer}>
					<ManageDetailsInput
						label='Height (cm)'
						invalid={!inputs.height.isValid}
						inputConfigurations={{
							keyboardType: 'numeric',
							minValue: 30,
							maxValue: 200,
							maxLength: 3,
							value: inputs.height.value.toString(),
							onChangeText: handleInputChange.bind(this, 'height'),
						}}
					/>
				</View>
				<View style={styles.inputContainer}>
					<ManageDetailsInput
						label='Weight (kg)'
						invalid={!inputs.weight.isValid}
						inputConfigurations={{
							keyboardType: 'numeric',
							minValue: 140,
							maxValue: 220,
							maxLength: 3,
							value: inputs.weight.value.toString(),
							onChangeText: handleInputChange.bind(this, 'weight'),
						}}
					/>
				</View>
			</View>
			<View
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					marginTop: '5%',
				}}
			>
				<Button
					style={{backgroundColor: Colors.Buttons.fifth, width: '90%'}}
					textStyle={{fontSize: 18}}
					onPress={handleConfirm}
				>
					Update
				</Button>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: '5%',
	},
	avatar: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	twoInRow: {
		flexDirection: 'row',
		paddingHorizontal: '2%',
	},
	inputContainer: {
		flex: 1,
	},
});

export default ManageDetailsForm;
