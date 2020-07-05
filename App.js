import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Users } from "./screens/Users";
import { Posts } from "./screens/Posts";
import { Detail } from "./screens/Detail";

const forFade = ({ current, next }) => {
  const opacity = Animated.add(
    current.progress,
    next ? next.progress : 0
  ).interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });

  return {
    leftButtonStyle: { opacity },
    rightButtonStyle: { opacity },
    titleStyle: { opacity },
    backgroundStyle: { opacity },
  };
};

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Users"
        component={Users}
        options={{
          title: 'Usuarios',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#ff926b' },
        }}
      />
      <Stack.Screen
        name="Posts"
        component={Posts}
        options={{ 
          headerStyleInterpolator: forFade,
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#f79071' },
          title: 'Posts' }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{ 
          headerStyleInterpolator: forFade,
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#f79071' },
          title: 'Detalle' }}
      />
    </Stack.Navigator>
  );
}

export default function App(){
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};
