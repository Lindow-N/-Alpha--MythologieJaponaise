import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeList from './Components/HomeList/HomeList';
import PageDetails from './Components/PageDetails/PageDetails';

const Stack = createStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeList} />
        <Stack.Screen name="PageDetails" component={PageDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
