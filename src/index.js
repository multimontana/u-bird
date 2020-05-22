import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomNavigation from './navigations/bottom-navigation'
import { navigationRef } from './navigations/root-navigator'
import { Provider } from 'mobx-react'
import Store from './services'

const App = () => {
	return (
		<Provider {...Store}>
			<NavigationContainer ref={navigationRef}>
				<BottomNavigation/>
			</NavigationContainer>
		</Provider>
	)
}

export default App
