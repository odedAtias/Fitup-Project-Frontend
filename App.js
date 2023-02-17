// Status Bar
import { StatusBar } from 'expo-status-bar';

// RN core components & API imports
import { StyleSheet, Text, View } from 'react-native';

// App Component
export default function App() {
	return (
		<>
			<StatusBar style='auto' />
			<View style={styles.container}>
				<Text>Project Cleanup</Text>
			</View>
		</>
	);
}

// App StyleSheet
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
