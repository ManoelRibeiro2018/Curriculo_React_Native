import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/screens/Home';
import Curriculo from './src/screens/Curriculo';
import Hobbies from './src/screens/Hobbies';
import Outros from './src/screens/Outros'



const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name= "Home" component = {Home}/>
        <Stack.Screen name= "Curriculo" component = {Curriculo}/>
        <Stack.Screen name= "Hobbies" component = {Hobbies}/>
        <Stack.Screen name= "Outros" component = {Outros}/>



      </Stack.Navigator>
    </NavigationContainer>  
    );
}
