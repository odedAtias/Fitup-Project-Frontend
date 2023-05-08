// RN Core compenents & API imports
import { View, Text, StyleSheet, Image } from "react-native";
import SignupButton from '../../Components/Registration/SignupOutput/SignupButton'; 
import SignupInput from '../../Components/Registration/SignupOutput/SignupInput'; 

// ForgotPassword Component
const ForgotPassword = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Your Password?</Text>
      <SignupInput  label="Enter your email and we'll send you a link to reset your password" />
      <View style={styles.button}>
        <SignupButton children={"Send Email"} />
      </View>
      <View>
        <Image style={styles.image} source={require('./../../Images/Signup/forgotPassword.png')}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 5,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
  button: {
    paddingHorizontal: 40,
  },
  image: {
    width: 230,
    height: 230,
    alignSelf: 'center',
  }
});

export default ForgotPassword;
