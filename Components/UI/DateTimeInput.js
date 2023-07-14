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
	const [dateTime, setDateTime] = useState({
		value: new Date(1228832224020),
		show: false,
	});

	// Set the initial value of the inputs and call onChange with the default value
	useEffect(() => {
		const initialValue =
			mode === 'time' ? getHour(dateTime.value) : getDate(dateTime.value);
		onChange(mode.toLowerCase(), initialValue);
	}, []);

	const handleInputChange = (_, selectedValue) => {
		setDateTime(prevState => ({
			...prevState,
			show: false,
			value: selectedValue,
		}));
		const currentValue =
			mode === 'time' ? getHour(selectedValue) : getDate(selectedValue);
		onChange(mode.toLowerCase(), currentValue);
	};

	return (
		<SafeAreaView>
			<Pressable
				onPress={() => setDateTime(prevState => ({...prevState, show: true}))}
			>
				<PostEventInput
					label={mode === 'time' ? 'Hour' : 'Date'}
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
