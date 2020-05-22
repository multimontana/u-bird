import React from 'react'
import { TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import SearchScreen from '../scenes/search'
import Icon from 'react-native-vector-icons/FontAwesome'

const Stack = createStackNavigator()

const SearchStack = ({navigation}) => {
	return (
		<Stack.Navigator
			screenOptions={{
				animation: 'fade',
			}}
		>
			<Stack.Screen
				name="Search"
				component={SearchScreen}
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

export default SearchStack
