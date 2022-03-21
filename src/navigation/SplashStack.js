import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreenOne from '../screens/SplashScreenOne';
import SplashScreenTwo from '../screens/SplashScreenTwo';
import SplashScreenThree from '../screens/SplashScreenThree';

const Stack = createNativeStackNavigator();

const SplashStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='SplashScreenOne'
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='SplashScreenOne' component={SplashScreenOne} />
        <Stack.Screen name='SplashScreenTwo' component={SplashScreenTwo} />
        <Stack.Screen name='SplashScreenThree' component={SplashScreenThree} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SplashStack;
