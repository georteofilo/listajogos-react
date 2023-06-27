import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons'

import Home from './ListaJogos';
import Banner from './Banner';
import Detalhes from './Detalhes';
import Perfil from './Perfil';
import Login from './Login';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#65bce1',
        tabBarInactiveTintColor: '#505050',
        tabBarShowLabel: false,
        tabBarStyle:{
            position: 'absolute',
            backgroundColor: '#fff',
            borderTopWidth: 0,

            bottom: 14,
            left: 14,
            right: 14,
            elevation: 0,
            borderRadius: 4,
            height: 60,
        }
  }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          headerShown: false,
          tabBarIcon: ({color, size, focused}) =>{
              if(focused){
                  return <Ionicons name="home" size={size} color={color} />
              }

              return <Ionicons name='home-outline' size={size} color={color} />
          }
        }}
      />
      <Tab.Screen 
        name="Perfil" 
        component={Perfil}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size, focused}) =>{
              if(focused){
                  return <Ionicons name="person" size={size} color={color} />
              }

              return <Ionicons name='person-outline' size={size} color={color} />
          }
        }}
      />
      <Tab.Screen 
        name="Detalhes"
        component={Detalhes}
        options={{
          
        }}
      />
    </Tab.Navigator>
  );
}



export default function App({}) {
  return (
    <NavigationContainer>{
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
          headerShown: false,
        
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={MyTabs} />
        <Stack.Screen name="Banner" component={Banner} />
        <Stack.Screen name="Detalhes" component={Detalhes} />
      </Stack.Navigator>

    }</NavigationContainer>
  );
}
