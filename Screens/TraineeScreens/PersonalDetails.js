// RN core components & API imports
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

// PersonalDetails Component
const PersonalDetails = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: "https://hips.hearstapps.com/hmg-prod/images/suspension-exercise-royalty-free-image-625859782-1542746842.jpg?resize=800:*",
          }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Or Dayani</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Email:</Text>
        <Text style={styles.infoValue}>odayani21@gmail.com</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Location:</Text>
        <Text style={styles.infoValue}>Israel, Jerusalem</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Bio:</Text>
        <Text style={styles.infoValue}>
          Trainee for 3 years. Expert with swimming and TRX.
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.graphLabel}>Trainings per week:</Text>
        <Text style={styles.graphLabel}> . . Graph . .</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 80,
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 10,
  },
  infoContainer: {
    marginTop: 20,
  },
  infoLabel: {
    fontWeight: "bold",
  },
  infoValue: {
    marginTop: 5,
  },
  graphLabel: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default PersonalDetails;
