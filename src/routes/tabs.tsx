import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/tabs/home';
import Cfg from '../pages/tabs/cfg';
import Inspection from '../pages/tabs/vistoria';
import Imovel from '../pages/tabs/imovel/index';
import Propietario from '../pages/tabs/propietario/index';

import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          backgroundColor: '#233d1d',
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <Ionicons name="home" size={24} color={focused ? '#fff' : '#999'} />
            }
            return <Ionicons name="home-outline" size={24} color={focused ? '#fff' : '#999'} />
          }
        }}
      />
      <Tab.Screen name="Inspection" component={Inspection}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <Ionicons name="checkbox" size={27} color={focused ? '#fff' : '#999'} />
            }
            return <Ionicons name="checkbox-outline" size={27} color={focused ? '#fff' : '#999'} />
          }
        }}
      />
      <Tab.Screen name="Imovel" component={Imovel}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <Ionicons name="business" size={26} color={focused ? '#fff' : '#999'} />
            }
            return <Ionicons name="business-outline" size={26} color={focused ? '#fff' : '#999'} />
          }
        }}
      />
      <Tab.Screen name="Propietario" component={Propietario}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <Ionicons name="person" size={24} color={focused ? '#fff' : '#999'} />
            }
            return <Ionicons name="person-outline" size={24} color={focused ? '#fff' : '#999'} />
          }
        }}
      />
      <Tab.Screen name="Cfg" component={Cfg}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <Ionicons name="settings" size={24} color={focused ? '#fff' : '#999'} />
            }
            return <Ionicons name="settings-outline" size={24} color={focused ? '#fff' : '#999'} />
          }
        }}
      />
    </Tab.Navigator>
  );
}