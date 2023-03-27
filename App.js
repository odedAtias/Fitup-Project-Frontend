// Hooks imports
import { useFonts } from "expo-font";

// Fonts imports
import Blanka from "./assets/fonts/Blanka-Regular.otf";
import Rubik from "./assets/fonts/Rubik-VariableFont_wght.ttf";

// Status Bar
import { StatusBar } from "expo-status-bar";

// RN core components & API imports
import { StyleSheet, SafeAreaView, Platform } from "react-native";

// Navigation Imports
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Custom Components
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
import ForgotPassword from "./Screens/ForgotPassword";
import Categories from "./Screens/TraineeScreens/Categories";
import FavoriteTrainers from "./Screens/TraineeScreens/FavoriteTrainers";
import RegisteredEvents from "./Screens/TraineeScreens/RegisteredEvents";
import PersonalDetails from "./Screens/TraineeScreens/PersonalDetails";
import Events from "./Screens/TraineeScreens/Events";
import EventDetails from "./Screens/TraineeScreens/EventDetails";
import RegisterEvent from "./Screens/TraineeScreens/RegisterEvent";
import RegistrationSucceed from "./Screens/TraineeScreens/RegistrationSucceed";
import Header from "./Components/Header";
import TrainerProfile from "./Screens/TraineeScreens/TrainerProfile";

// Ionicons
import { Ionicons } from "@expo/vector-icons";

// Context providers
import TraineeContextProvider from "./store/TraineeContext";

// Navigators Initialize`s
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Constants
import Colors from "./Constants/Colors";

// Search Events Stack Navigator
const StackSearchEvent = () => (
  <Stack.Navigator
    mode="modal"
    screenOptions={{
      header: ({ navigation }) => (
        <Header
          label={"Fit\nUp"}
          containerStyle={{
            backgroundColor: Colors.Headers.secondary,
            padding: Platform.OS === "ios" ? 10 : 10,
            paddingTop: Platform.OS === "ios" ? 10 : 30,
          }}
          labelStyle={{
            fontSize: 50,
            color: Colors.Texts.primary,
          }}
          onPressLeft={() => navigation.goBack()}
        />
      ),
      contentStyle: {
        backgroundColor: "white",
      },
    }}
  >
    <Stack.Screen
      name="Categories"
      component={Categories}
      options={{
        header: () => {
          return (
            <Header
              label={"Fit\nUp"}
              containerStyle={{
                backgroundColor: Colors.Headers.primary,
                padding: Platform.OS === "ios" ? 10 : 20,
              }}
            />
          );
        },
      }}
    />
    <Stack.Screen name="Events" component={Events} />
    <Stack.Screen name="EventDetails" component={EventDetails} />
    <Stack.Screen name="RegisterEvent" component={RegisterEvent} />
    <Stack.Screen name="RegistrationSucceed" component={RegistrationSucceed} />
    <Stack.Screen name="TrainerProfile" component={TrainerProfile} />
  </Stack.Navigator>
);

// Auxilliary Components of trainee bottomTabs
const TraineeBottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        header: () => (
          <Header
            label={"Fit\nup"}
            containerStyle={{
              backgroundColor: Colors.Headers.primary,
              padding: Platform.OS === "ios" ? 10 : 20,
            }}
          />
        ),

        tabBarStyle: {
          backgroundColor: Colors.Headers.primary,
          position: "absolute",
          bottom: 10,
          left: 20,
          right: 20,
          borderRadius: 15,
          elevation: 0,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors.Texts.third,
        tabBarInactiveTintColor: Colors.Texts.secondary,
      }}
    >
      <Tab.Screen
        name="StackSearchEvent"
        component={StackSearchEvent}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color }) => {
            let iconName = focused ? "search" : "search-outline";
            return (
              <Ionicons
                name={iconName}
                size={focused ? 35 : 25}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="FavoriteTrainers"
        component={FavoriteTrainers}
        options={{
          tabBarIcon: ({ focused, color }) => {
            let iconName = focused ? "bookmarks" : "bookmarks-outline";
            return (
              <Ionicons
                name={iconName}
                size={focused ? 35 : 25}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="RegisteredEvents"
        component={RegisteredEvents}
        options={{
          tabBarIcon: ({ focused, color }) => {
            let iconName = focused ? "calendar" : "calendar-outline";
            return (
              <Ionicons
                name={iconName}
                size={focused ? 35 : 25}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="PersonalDetails"
        component={PersonalDetails}
        options={{
          tabBarIcon: ({ focused, color }) => {
            let iconName = focused ? "person" : "person-outline";
            return (
              <Ionicons
                name={iconName}
                size={focused ? 35 : 25}
                color={color}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

// App Component
export default function App() {
  // Header font loader
  const [loaded] = useFonts({
    blanka: Blanka,
    rubik: Rubik,
  });
  if (loaded)
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" />
        {/* Our contextProvider */}
        <TraineeContextProvider>
          {/* Stack Navigation Container (Contains 4 Screens)*/}
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                header: ({ navigation }) => {
                  return (
                    <Header
                      label={"Fit\nUp"}
                      containerStyle={{
                        backgroundColor: Colors.Headers.secondary,
                        padding: Platform.OS === "ios" ? 10 : 30,
                      }}
                      onPress={() => navigation.goBack()}
                    />
                  );
                },
                contentStyle: {
                  backgroundColor: Colors.Backgrounds.primary,
                },
              }}
            >
              <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false, presentation: "modal" }}
              />
              <Stack.Screen name="Signup" component={Signup} />
              <Stack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
                options={{ presentation: "modal" }}
              />
              {/* The gate to the trainee app */}
              <Stack.Screen
                name="TraineeBottomTab"
                component={TraineeBottomTab}
                options={{
                  headerShown: false,
                  presentation: "containedModal",
                }}
              />
              {/* The gate to the trainer app */}
            </Stack.Navigator>
          </NavigationContainer>
        </TraineeContextProvider>
      </SafeAreaView>
    );
}

// App StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
