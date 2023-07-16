// Hooks imports
import {useState} from 'react';

// RN core components & API imports
import {StyleSheet, View} from 'react-native';

// Constants
import {alert} from '../../../Constants/Alert';
import Colors from '../../../Constants/Colors';
import {CATEGORIES} from './../../../Constants/Categories';

// Contexts imports

// Custom components imports
import Button from '../../UI/Button';
import DateTimeInput from '../../UI/DateTimeInput';
import DropDownInput from './../../UI/DropDownInput';
import PostEventInput from './PostEventInput';

// Utils
import {
	validateDateHour,
	validateDropdownInput,
	validateLegalTiming,
	validateNumber,
	validatePattern,
} from './../../../utils/validations';

// Drop down list data
const dropDownListData = CATEGORIES.map((category, index) => ({
	label: category.name,
	value: category.name,
}));

// PostEventForm component
const PostEventForm = ({onSubmit}) => {
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
			value:
				'Welcome to my training sanctuary, where champions rise through passion and dedication. Embrace the challenge, push your limits, and leave an indelible mark on the road to greatness.',
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

		let result = true;

		// Step 1 - validate the category input
		const list = dropDownListData.map(c => c.value);
		const isValidCategory = validateDropdownInput(list, category.value);

		// Step 2 - validate the date format
		const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;
		const isValidDate = validatePattern(date.value, datePattern);

		// Step 3 - validate the hour format
		const hourPattern = /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/;
		const isValidHour = validatePattern(hour.value, hourPattern);

		// Step 4 - validate the city and address
		const cityAddressPattern = /^(?!\s*$).{2,45}$/;
		const isValidCity = validatePattern(city.value, cityAddressPattern);
		const isValidAddress = validatePattern(address.value, cityAddressPattern);

		// Step 5 - validate description
		const descriptionPattern = /^(?!\s*$).{10,300}$/;
		const isValidDescription = validatePattern(
			description.value,
			descriptionPattern
		);

		// Step 6 - validate the number of trainees and price
		const isValidMaxParticipants = validateNumber(maxParticipants.value, false);
		const isValidPrice = validateNumber(price.value, true);

		setInputs(currentInputs => ({
			category: {
				value: category.value,
				isValid: isValidCategory,
			},
			date: {
				value: date.value,
				isValid: isValidDate,
			},
			hour: {
				value: hour.value,
				isValid: isValidHour,
			},
			address: {
				value: address.value,
				isValid: isValidAddress,
			},
			city: {
				value: city.value,
				isValid: isValidCity,
			},
			description: {
				value: description.value,
				isValid: isValidDescription,
			},
			maxParticipants: {
				value: maxParticipants.value,
				isValid: isValidMaxParticipants,
			},
			price: {
				value: price.value,
				isValid: isValidPrice,
			},
		}));

		// return true if all these steps returns truthy values
		if (
			!isValidCategory ||
			!isValidDate ||
			!isValidHour ||
			!isValidAddress ||
			!isValidCity ||
			!isValidDescription ||
			!isValidMaxParticipants ||
			!isValidPrice
		) {
			alert('Invalid Input', 'Please check the following red fields');
			result = false;
		}

		// Step 7 - validate (date,hour) together
		if (!validateDateHour(date.value, hour.value)) {
			alert(
				'Invalid Date and Hour',
				'Please enter a valid date and hour that is at least 6 hours ahead of the current date.'
			);
			result = false;
		}

		if (!validateLegalTiming(date.value, hour.value, 45, [])) {
			alert(
				'Invalid Date and Hour',
				'Please enter a valid date and hour that is not conflict with your other trainings.'
			);
			result = false;
		}
		return result;
	};

	const handleSubmit = () => {
		// validateInputs()
		let isValidEvent = validateInputs();
		if (isValidEvent) {
			onSubmit(inputs);
		}
	};

	return (
		<View style={styles.container}>
			<DropDownInput
				label='Category'
				onChange={handleInputChange}
				data={dropDownListData}
				invalid={!inputs.category.isValid}
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
				label={`description [ remaining ${
					300 - inputs.description.value.length
				} characters ]`}
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
						label='Price (NIS)'
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
		marginTop: '2%',
	},
	button: {
		backgroundColor: Colors.Buttons.fifth,
		width: '50%',
	},
	buttonText: {
		fontSize: 18,
	},
});

export default PostEventForm;
