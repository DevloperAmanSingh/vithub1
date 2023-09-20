import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import Homepage from './src/screens/homepage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LostItemForm from './src/screens/lostform';
import Homepage from './src/screens/homepage';
import RegistrationScreen from './src/screens/RegisterScreen';
import LoginScreen from './src/screens/LoginScreen';
import FoundItem from './src/screens/FoundItem';
const Stack = createNativeStackNavigator();

export default function App() {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       // User is logged in
  //       setUser(authUser);
  //     } else {
  //       // User is not logged in
  //       setUser(null);
  //     }
  //   });

  //   return () => unsubscribe();
  // }, []);
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
 

    
        <Stack.Screen
          name="Registeration"
          component={RegistrationScreen}
          options={{headerShown: false}}
        />
          <Stack.Screen name="Homescreen" component={Homepage } options={{headerShown: false}}/>
        <Stack.Screen name="Lost Item" component={LostItemForm}  />
        <Stack.Screen name="Found Item" component={FoundItem} />  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
