import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

// Resto do seu código aqui

import Welcome from '../pages/welcome';
import Login from '../pages/login';
import Register from '../pages/register';
import NewP from '../pages/tabs/propietario/new';
import ListP from '../pages/tabs/propietario/list';
import { Tabs } from './tabs';
import { Header } from 'react-native/Libraries/NewAppScreen';

const Stack = createNativeStackNavigator();


export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
            <Stack.Screen name="NewP" component={NewP} options={{ headerShown: false }} />
            <Stack.Screen name="ListP" component={ListP} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}
