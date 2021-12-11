import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Menu} from '../screens/Menu';
import {Home} from '../screens/Home';

const Stack = createStackNavigator();

export const Routes = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="Menu" component={Menu} options={{
                headerShown: false,
            }} />
        </Stack.Navigator>
    )
}