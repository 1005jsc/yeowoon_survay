import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Page1, Page2, Page3 } from './src/components/pages/pages';
import * as QuestionPage from './src/components/design_pamphlet/question_page/question_page_designs';
import { Dimensions } from 'react-native';
import { StatusBarView } from './src/components/design_pamphlet/common_components/common_components.style';
import { SurvayStart } from './src/components/design_pamphlet/survay_start/survay_start_design';
import { Efficient, Exploring, Flexing, Improvisive, OnPlanning, Passionate, Relaxing, SafetyConcerning } from './src/components/design_pamphlet/result_page/result_page_design';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;








const Stack = createNativeStackNavigator();



export default function App() {

  console.log(windowHeight)
  console.log(windowWidth)



  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="SurvayStart">
      {/* 여행전 당신은? */}
      <Stack.Screen name="SurvayStart" component={SurvayStart} options={{ headerShown: false }}/> 
      <Stack.Screen name="QuestionNo1" component={QuestionPage.No1} options={{ headerShown: false }}/> 
      <Stack.Screen name="QuestionNo2" component={QuestionPage.No2} options={{ headerShown: false }} />
      <Stack.Screen name="QuestionNo3" component={QuestionPage.No3} options={{ headerShown: false }} />
      {/* 여행 후 당신은? */}
      <Stack.Screen name="QuestionNo4" component={QuestionPage.No4} options={{ headerShown: false }} />
      <Stack.Screen name="QuestionNo5" component={QuestionPage.No5} options={{ headerShown: false }} />
      <Stack.Screen name="QuestionNo6" component={QuestionPage.No6} options={{ headerShown: false }} />
      <Stack.Screen name="QuestionNo7" component={QuestionPage.No7} options={{ headerShown: false }} />
      <Stack.Screen name="QuestionNo8" component={QuestionPage.No8} options={{ headerShown: false }} />
      <Stack.Screen name="QuestionNo9" component={QuestionPage.No9} options={{ headerShown: false }} />
      {/* 테스트 결과 */}
      <Stack.Screen name="improvisive" component={Improvisive} options={{ headerShown: false }}/> 
      <Stack.Screen name="exploring" component={Exploring} options={{ headerShown: false }}/> 
      <Stack.Screen name="onPlanning" component={OnPlanning} options={{ headerShown: false }}/> 
      <Stack.Screen name="efficient" component={Efficient} options={{ headerShown: false }}/> 
      <Stack.Screen name="passionate" component={Passionate} options={{ headerShown: false }}/> 
      <Stack.Screen name="flexing" component={Flexing} options={{ headerShown: false }}/> 
      <Stack.Screen name="relaxing" component={Relaxing} options={{ headerShown: false }}/> 
      <Stack.Screen name="safetyConcerning" component={SafetyConcerning} options={{ headerShown: false }}/> 
    
    </Stack.Navigator>
  
  </NavigationContainer>    


  );
}







