import React from 'react'
import { TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import CartScreen from '../scenes/cart'
import Icon from 'react-native-vector-icons/FontAwesome'

const Stack = createStackNavigator()

const CartStack = ({navigation}) => {
	return (
		<Stack.Navigator
			screenOptions={{
				animation: 'fade',
			}}
		>
			<Stack.Screen
				name="Cart"
				component={CartScreen}
				options={{
					title: '',
					headerLeft: () => (
						<TouchableOpacity onPress={() => navigation.goBack()}>
							<Icon style={{paddingHorizontal: 20}}
										name={'chevron-left'}
										size={20} color={'#12B575'}/>
						</TouchableOpacity>
					),
				}}
			/>
		</Stack.Navigator>
	)
}

export default CartStack
