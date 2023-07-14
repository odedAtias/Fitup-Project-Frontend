// Hooks imports
import {useState} from 'react';

// RN core components & API imports
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

// Constants
import Colors from '../../Constants/Colors';
import {CATEGORIES} from '../../Constants/Categories';

const data = CATEGORIES.map((category, index) => ({
	label: category.name,
	value: index,
}));

// DropDownInput
const DropDownInput = ({label, onChange}) => {
	const [value, setValue] = useState(null);

	const handleDropdownChange = item => {
		setValue(item.value);
		onChange(label.toLowerCase(), item);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.label}>{label}</Text>
			<Dropdown
				style={styles.dropdown}
				placeholderStyle={styles.placeholderStyle}
				selectedTextStyle={styles.selectedTextStyle}
				inputSearchStyle={styles.inputSearchStyle}
				iconStyle={styles.iconStyle}
				data={data}
				search
				maxHeight={300}
				labelField='label'
				valueField='value'
				placeholder='Select category'
				searchPlaceholder='Search...'
				value={value}
				onChange={handleDropdownChange}
				fontFamily='rubik'
				containerStyle={styles.dropdownContainer}
				activeColor={Colors.Backgrounds.secondary}
			/>
		</View>
	);
};

// DropDownInput
const styles = StyleSheet.create({
	container: {
		paddingHorizontal: '5%',
	},
	label: {
		fontSize: 17,
		marginBottom: 10,
		fontFamily: 'rubik',
		fontWeight: '600',
		color: Colors.Texts.primary,
	},
	dropdown: {
		height: 50,
		textAlign: 'left',
		fontSize: 17,
		width: '100%',
		fontFamily: 'rubik',
		paddingVertical: 8,
		backgroundColor: Colors.Backgrounds.secondary,
		paddingLeft: 10,
	},
	iconStyle: {
		width: 20,
		height: 20,
	},
	placeholderStyle: {
		fontSize: 16,
		fontFamily: 'rubik',
	},
	selectedTextStyle: {
		color: '#000',
	},
	inputSearchStyle: {
		fontSize: 16,
		backgroundColor: 'white',
	},
	dropdownContainer: {
		backgroundColor: Colors.Backgrounds.secondary,
	},
});

export default DropDownInput;
