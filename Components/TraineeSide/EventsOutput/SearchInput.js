// RN core components & API imports
import {TextInput, StyleSheet, View, Pressable} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

// Constants
import Colors from '../../../Constants/Colors';

// Input Component
const SearchInput = ({inputConfigurations, onPress}) => {
	return (
		<View style={styles.inputContainer}>
			<TextInput {...inputConfigurations} style={styles.input} />
			<Pressable onPress={onPress}>
				<Ionicons
					name='search-outline'
					size={24}
					color={Colors.Buttons.fourth}
					style={styles.icon}
				/>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		margin: 10,
		backgroundColor: '#f2f2f2',
		borderRadius: 30,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderWidth: 1,
		borderColor: Colors.Buttons.fourth,
	},
	input: {
		flex: 1,
		color: 'black',
		fontFamily: 'rubik',
		textAlign: 'left',
		fontSize: 20,
	},
	icon: {
		marginLeft: 10,
	},
});

export default SearchInput;
