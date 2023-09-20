import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import Homepage from './src/screens/homepage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LostItemForm from './src/screens/lostform';
import Homepage from './src/screens/homepage';
const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
    {/* <View className="">
      <Homepage />
      <StatusBar style="auto" />
    </View> */}
    <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Homepage}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Lost Item" component={LostItemForm}  />
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
