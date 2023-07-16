// Hooks imports
import {useState, useEffect} from 'react';

// RN core components & API imports
import DateTimePicker from '@react-native-community/datetimepicker';
import {Pressable, SafeAreaView} from 'react-native';

// Custom components imports
import PostEventInput from '../TrainerSide/PostEventOutput/PostEventInput';

// Constatns
import Colors from '../../Constants/Colors';

// Utils
import {getDate, getHour} from '../../utils/Date';

const DateTimeInput = ({mode, onChange}) => {
	const prop = mode === 'time' ? 'Hour' : 'Date';

	const currentDateTime = new Date();
	currentDateTime.setTime(currentDateTime.getTime() + 9 * 60 * 60 * 1000);

	const [dateTime, setDateTime] = useState({
		value: currentDateTime,
		show: false,
	});

	// Set the initial value of the inputs and call onChange with the default value
	useEffect(() => {
		const initialValue =
			mode === 'time' ? getHour(dateTime.value) : getDate(dateTime.value);
		onChange(prop.toLocaleLowerCase(), initialValue);
	}, []);

	const handleInputChange = (_, selectedValue) => {
		setDateTime(prevState => ({
			...prevState,
			show: false,
			value: selectedValue,
		}));
		const currentValue =
			mode === 'time' ? getHour(selectedValue) : getDate(selectedValue);
		onChange(prop.toLocaleLowerCase(), currentValue);
	};

	return (
		<SafeAreaView>
			<Pressable
				onPress={() => setDateTime(prevState => ({...prevState, show: true}))}
			>
				<PostEventInput
					label={prop}
					inputConfigurations={{
						value:
							mode === 'time'
								? getHour(dateTime.value)
								: getDate(dateTime.value),
						editable: false,
						style: {
							color: '#000',
							textAlign: 'left',
							fontSize: 17,
							width: '100%',
							fontFamily: 'rubik',
							paddingVertical: 8,
							paddingLeft: 10,
							backgroundColor: Colors.Backgrounds.secondary,
							borderRadius: 10,
						},
					}}
				/>
			</Pressable>
			{dateTime.show && (
				<DateTimePicker
					testID='dateTimePicker'
					value={dateTime.value}
					mode={mode}
					is24Hour={true}
					onChange={handleInputChange}
				/>
			)}
		</SafeAreaView>
	);
};

export default DateTimeInput;
