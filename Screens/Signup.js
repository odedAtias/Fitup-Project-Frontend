// RN core components & API imports
import { View, StyleSheet } from 'react-native';
// Custom components import
import SignupForm from '../Components/SignupOutput/SignupForm';
// SignUp Component
const Signup = () => {
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
		padding: 10,
	},
});

export default Signup;
