// RN core components & API imports
import { View, Text, StyleSheet } from "react-native";

import EventsList from "../../Components/EventsOutput/EventsList";

// RegisteredEvents component
const RegisteredEvents = () => {
  //Dummy RegisteredEvents
  const EVENTS = [
    {
      id: "event1",
      category: "Spining",
      trainerName: "Max shultz",
      date: "14/12/23",
      hour: "17:00 pm",
      address: "Hatnofa 18 st",
      city: "Jerusalem",
      numOfTrainees: 13,
      maxNumOfTrainees: 15,
      imageUrl: require("../../Images/Trainers/trainer1.png"),
    },
    {
      id: "event2",
      category: "Spining",
      trainerName: "Max shultz",
      date: "14/12/23",
      hour: "17:00 pm",
      address: "Hatnofa 18 st",
      city: "Jerusalem",
      numOfTrainees: 13,
      maxNumOfTrainees: 15,
      imageUrl: require("../../Images/Trainers/trainer1.png"),
    },
  ];
  return (
    <View>
      <EventsList events={EVENTS} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    fontSize: 40,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 24,
  },
});

export default RegisteredEvents;
