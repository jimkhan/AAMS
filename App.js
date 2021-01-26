import React from 'react'
import { StyleSheet, TouchableWithoutFeedback } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LogInScreen from './src/LogInScreen';
import RegistrationHomePage from './src/RegistrationHomePage';
import StudentRegistration from './src/StudentRestration';
import TeacherRegistration from './src/TeacherRegistration';
import StudentHome from './src/StudentHome';

const Stack = createStackNavigator();


const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen 
          name="LogInScreen" 
          component={LogInScreen} 
        />
        <Stack.Screen 
          name="RegistrationHomePage" 
          component={RegistrationHomePage} 
        />
        <Stack.Screen 
          name="StudentRegistration" 
          component={StudentRegistration} 
        />
        <Stack.Screen 
          name="TeacherRegistration" 
          component={TeacherRegistration} 
        />
        <Stack.Screen 
          name="StudentHome" 
          component={StudentHome} 
          options={{
            headerShown: true,
            title: "",
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#344564',
            },
          }}
        />
      </Stack.Navigator>

    </NavigationContainer>

  )
}


export default App
