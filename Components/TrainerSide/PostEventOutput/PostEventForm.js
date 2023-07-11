// Hooks imports
import {useState, useContext} from 'react';

// RN core components & API imports
import {StyleSheet, View} from 'react-native';

// Custom components imports
import PostEventInput from './PostEventInput';
import Button from '../../UI/Button';

// Contexts imports
import {TrainerContext} from '../../../store/TrainerContext';

// Constants
import Colors from '../../../Constants/Colors';

// PostEventForm
const PostEventForm = () => {
	const tcx = useContext(TrainerContext);

	// PostEvent inputs
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

	// PostEvent handlers
	const handleInputChange = (inputIdertifier, enteredValue) => {
		setInputs(currentInputs => {
			return {
				...currentInputs,
				// Way to update keys/values dynamically
				[inputIdertifier]: {value: enteredValue, isValid: true},
			};
		});
	};

	return (
		<View style={styles.container}>
			{/* Hour */}
			<PostEventInput
				label='Hour'
				invalid={!inputs.hour.isValid}
				inputConfigurations={{
					placeholder: 'hh : mm',
					autoCorrect: false,
					value: inputs.hour.value,
					onChangeText: handleInputChange.bind(this, 'hour'),
				}}
			/>
			<View style={styles.twoInRow}>
				{/* City */}
				<View style={styles.inputContainer}>
					<PostEventInput
						label='City'
						invalid={!inputs.city.isValid}
						inputConfigurations={{
							placeholder: 'Jerusalem',
							autoCorrect: false,
							value: inputs.city.value,
							onChangeText: handleInputChange.bind(this, 'city'),
						}}
					/>
				</View>
				<View style={styles.inputContainer}>
					{/* Address */}
					<PostEventInput
						label='Address'
						invalid={!inputs.address.isValid}
						inputConfigurations={{
							placeholder: 'Hakim Eliyahu 37',
							autoCorrect: false,
							value: inputs.address.value,
							onChangeText: handleInputChange.bind(this, 'address'),
						}}
					/>
				</View>
			</View>
			{/* Description */}
			<PostEventInput
				label='Description'
				invalid={!inputs.description.isValid}
				inputConfigurations={{
					placeholder: 'This is can be a great event ...',
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
					{/* Number of particpants */}
					<PostEventInput
						label='How many trainees'
						invalid={!inputs.maxParticipants.isValid}
						inputConfigurations={{
							placeholder: 'digits only',
							autoCorrect: false,
							value: inputs.maxParticipants.value,
							onChangeText: handleInputChange.bind(this, 'maxParticipants'),
						}}
					/>
				</View>
				<View style={styles.inputContainer}>
					{/* Hour */}
					<PostEventInput
						label='Price'
						invalid={!inputs.price.isValid}
						inputConfigurations={{
							placeholder: 'In NIS',
							autoCorrect: false,
							value: inputs.price.value,
							onChangeText: handleInputChange.bind(this, 'price'),
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
					onPress={() => {
						console.log('Hereeeeeeee');
					}}
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
		marginBottom: '20%',
	},
	twoInRow: {
		flexDirection: 'row',
		paddingHorizontal: '2%',
	},
	inputContainer: {
		flex: 1,
	},
});

export default PostEventForm;
