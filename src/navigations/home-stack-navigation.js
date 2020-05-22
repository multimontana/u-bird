import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../scenes/home'

const Stack = createStackNavigator()

const HomeStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Home"
				component={HomeScreen}
				options={{headerShown: false}}
			/>
		</Stack.Navigator>
	)
}

export default HomeStack
