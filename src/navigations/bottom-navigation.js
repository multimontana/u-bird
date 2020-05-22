import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'
import AnyScreen from '../scenes/any'
import { color } from '../styles'
import HomeStack from './home-stack-navigation'
import SearchStack from './search-stack-navigation'
import CartStack from './cart-stack-navigation'

const Tab = createBottomTabNavigator()

const BottomNavigation = () => {
	return (
		<Tab.Navigator tabBarOptions={{
			style: {
				paddingVertical: 10,
			},
		}}>
			<Tab.Screen name="Home"
									children={HomeStack}
									options={{
										tabBarIcon: () => (
											<Icon name={'home'} size={25} color={color.light_grey}/>
										),
										tabBarLabel: '',
										title: '',
									}}
			/>
			<Tab.Screen name="Search" children={SearchStack} options={{
				tabBarIcon: () => (
					<Icon name={'search'} size={25} color={color.light_grey}/>
				),
				tabBarLabel: '',
			}}/>
			<Tab.Screen name="Cart" children={CartStack} options={{
				tabBarIcon: () => (
					<Icon name={'shopping-cart'} size={25} color={color.light_grey}/>
				),
				tabBarLabel: '',
			}}/>
			<Tab.Screen name="Any" component={AnyScreen} options={{
				tabBarIcon: () => (
					<Icon name={'ellipsis-h'} size={25} color={color.light_grey}/>
				),
				tabBarLabel: '',
			}}/>
		</Tab.Navigator>
	)
}

export default BottomNavigation
