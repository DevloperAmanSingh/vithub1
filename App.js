import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import Homepage from './src/screens/homepage';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LostItemForm from "./src/screens/lostform";
import Ionicons from "@expo/vector-icons/Ionicons";
import RegistrationScreen from "./src/screens/RegisterScreen";
import LoginScreen from "./src/screens/LoginScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FoundItem from "./src/screens/FoundItem";
import LostPage from "./src/screens/LostPage";
import FoundPage from "./src/screens/FoundPage";
import ProfilePage from "./src/screens/ProfilePage";
import Description from "./src/screens/Description";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreens() {
  
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "FoundPage") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "LostPage") {
            iconName = focused ? "help" : "help-outline";
          } else if (route.name === "Profile"){
            iconName = focused ? "person-circle" : "person-circle-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "blue",

        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="FoundPage" component={FoundPage} options={{
          headerTitle: "VIT Hub",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold", // Make the header title bold
          }, // Center align the header title
        }}
/>
      <Tab.Screen name="LostPage" component={LostPage} options={{
          headerTitle: "VIT Hub",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold", // Make the header title bold
          }, // Center align the header title
        }} />
      <Tab.Screen name="Profile" component={ProfilePage} options={{
          headerTitle: "VIT Hub",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold", // Make the header title bold
          }, // Center align the header title
        }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    // <NavigationContainer>
    // <Stack.Na vigator>
    // <Stack.Screen
    //       name="LoginScreen"
    //       component={LoginScreen}
    //       options={{headerShown: false}}
    //     />

    //     <Stack.Screen
    //       name="Registeration"
    //       component={RegistrationScreen}
    //       options={{headerShown: false}}
    //     />
    //       <Stack.Screen name="Homescreen" component={Homepage } options={{headerShown: false}}/>
    //     <Stack.Screen name="Lost Item" component={LostItemForm}  />
    //     <Stack.Screen name="Found Item" component={FoundItem} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Register' 
        component={RegistrationScreen}/>
        <Stack.Screen name="Homescreen" component={HomeScreens} />
        <Stack.Screen name="lostform" component={LostItemForm}/>
        <Stack.Screen name="founditem" component={FoundItem}/>
        <Stack.Screen name="description" component={Description}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
