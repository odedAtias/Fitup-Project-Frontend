// RN core components & API imports
import { View, StyleSheet } from 'react-native';
// Custom components import
import SignupForm from '../Components/SignupOutput/SignupForm';
// SignUp Component
const Signup = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<SignupForm />
			{/* Already have an account ? sign-in */}
		</View>
	);
};

// SignUp StyleSheet
const styles = StyleSheet.create({
	container: {
		flex: 1,
		borderTopLeftRadius: 20,
		borderBottomRightRadius: 20,
		paddingVertical: '5%',
	},
});

export default Signup;
