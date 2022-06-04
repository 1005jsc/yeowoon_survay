import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Page1, Page2, Page3 } from './src/components/pages/pages';
import * as QuestionPage from './src/components/design_pamphlet/question_page/question_page_designs';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;








const Stack = createNativeStackNavigator();



export default function App() {

  console.log(windowHeight)
  console.log(windowWidth)



  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="TestStart">
      <Stack.Screen name="QuestionNo1" component={QuestionPage.No1} options={{ headerShown: false   }}/>
        <Stack.Screen name="Page1" component={Page1} options={{ headerShown: false }} />
        <Stack.Screen name="Page2" component={Page2} options={{ headerShown: false }}/>
        <Stack.Screen name="Page3" component={Page3} options={{ headerShown: false }}/>
    </Stack.Navigator>
  
  </NavigationContainer>    


  );
}







