// Hooks imports
import {useContext, useState} from 'react';

// RN core components & API imports
import {StyleSheet, View} from 'react-native';

// Constants
import Colors from '../../../Constants/Colors';
import {CATEGORIES} from './../../../Constants/Categories';

// Contexts imports
import {TrainerContext} from '../../../store/TrainerContext';

// Custom components imports
import Button from '../../UI/Button';
import PostEventInput from './PostEventInput';
import DateTimeInput from '../../UI/DateTimeInput';
import DropDownInput from './../../UI/DropDownInput';

// Utils
import {
	validateDropdownInput,
	validateDate,
	validateHour,
} from './../../../utils/validations';

// Drop down list data
const dropDownListData = CATEGORIES.map((category, index) => ({
	label: category.name,
	value: category.name,
}));

// PostEventForm component
const PostEventForm = () => {
	const tcx = useContext(TrainerContext);

	const [inputs, setInputs] = useState({
		category: {
			value: '',
			isValid: true,
		},
		date: {
			value: '',
			isValid: true,
		},
		hour: {
			value: '',
			isValid: true,
		},
		address: {
			value: '',
			isValid: true,
		},
		city: {
			value: '',
			isValid: true,
		},
		description: {
			value: '',
			isValid: true,
		},
		maxParticipants: {
			value: null,
			isValid: true,
		},
		price: {
			value: null,
			isValid: true,
		},
	});

	// PostEventForm handlers
	const handleInputChange = (inputIdentifier, enteredValue) => {
		setInputs(currentInputs => ({
			...currentInputs,
			[inputIdentifier]: {value: enteredValue, isValid: true},
		}));
	};

	const validateInputs = () => {
		const {
			category,
			address,
			city,
			date,
			description,
			hour,
			maxParticipants,
			price,
		} = inputs;

		// Step 1 - validate the category input
		const list = dropDownListData.map(c => c.value);
		const isValidCategory = validateDropdownInput(list, category.value);
		// Step 2 - validate the date format
		const isValidDate = validateDate(date.value);

		// Step 3 - validate the hour format
		const isValidateHour = validateHour(hour.value);
		console.log(isValidateHour);
		// Step 4 - validate dont have event with same date and hour

		// Step 5 - validate the city and adress

		// Step 6 - validate description

		// Step 7 - validate the number of trainees and price

		// return true if all these steps returns truthy values
	};

	const handleSubmit = () => {
		// validateInputs()
		validateInputs();
		// POST the object to the backend
		// Update the context (Events + trainer's events)
	};

	return (
		<View style={styles.container}>
			<DropDownInput
				label='Category'
				onChange={handleInputChange}
				data={dropDownListData}
			/>
			<View style={styles.twoInRow}>
				<View style={styles.inputContainer}>
					<DateTimeInput mode='date' onChange={handleInputChange} />
				</View>
				<View style={styles.inputContainer}>
					<DateTimeInput mode='time' onChange={handleInputChange} />
				</View>
			</View>
			<View style={styles.twoInRow}>
				<View style={styles.inputContainer}>
					<PostEventInput
						label='City'
						invalid={!inputs.city.isValid}
						inputConfigurations={{
							autoCorrect: false,
							value: inputs.city.value,
							onChangeText: handleInputChange.bind(this, 'city'),
						}}
					/>
				</View>
				<View style={styles.inputContainer}>
					<PostEventInput
						label='Address'
						invalid={!inputs.address.isValid}
						inputConfigurations={{
							autoCorrect: false,
							value: inputs.address.value,
							onChangeText: handleInputChange.bind(this, 'address'),
						}}
					/>
				</View>
			</View>
			<PostEventInput
				label='Description'
				invalid={!inputs.description.isValid}
				inputConfigurations={{
					autoCorrect: false,
					multiline: true,
					numberOfLines: 4,
					maxLength: 300,
					textAlignVertical: 'top',
					value: inputs.description.value,
					onChangeText: handleInputChange.bind(this, 'description'),
				}}
			/>
			<View style={styles.twoInRow}>
				<View style={styles.inputContainer}>
					<PostEventInput
						label='How many trainees'
						invalid={!inputs.maxParticipants.isValid}
						inputConfigurations={{
							autoCorrect: false,
							value: inputs.maxParticipants.value,
							keyboardType: 'numeric',
							onChangeText: handleInputChange.bind(this, 'maxParticipants'),
						}}
					/>
				</View>
				<View style={styles.inputContainer}>
					<PostEventInput
						label='Price'
						invalid={!inputs.price.isValid}
						inputConfigurations={{
							autoCorrect: false,
							value: inputs.price.value,
							keyboardType: 'numeric',
							onChangeText: handleInputChange.bind(this, 'price'),
						}}
					/>
				</View>
			</View>
			<View style={styles.buttonContainer}>
				<Button
					style={styles.button}
					textStyle={styles.buttonText}
					onPress={handleSubmit}
				>
					Submit
				</Button>
			</View>
		</View>
	);
};

// PostEventForm StyleSheet
const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginBottom: '10%',
	},
	twoInRow: {
		flexDirection: 'row',
		paddingHorizontal: '2%',
	},
	inputContainer: {
		flex: 1,
	},
	buttonContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: '5%',
	},
	button: {
		backgroundColor: Colors.Buttons.fifth,
		width: '90%',
	},
	buttonText: {
		fontSize: 18,
	},
});

export default PostEventForm;
