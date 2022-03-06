import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Main from '../screens/Main'

const StackNavigator: React.FunctionComponent = () => {
    const Stack = createStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Main' component={Main} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}