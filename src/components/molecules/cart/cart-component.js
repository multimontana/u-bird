import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import IconComponent from '../../atoms/icon-component'
import { color } from '../../../styles'
import CartCountComponent from '../../atoms/cart-count-component'
import { observer, inject } from 'mobx-react'
import * as RootNavigator from '../../../navigations/root-navigator'

@inject('Cart')
@observer
class CartComponent extends Component {
	render(): React.ReactNode {
		return (
			<TouchableOpacity style={styles.cart} onPress={() => RootNavigator.navigate('Cart')}>
				<CartCountComponent count={
					(this.props.Cart.cart.length > 0) ? this.props.Cart.cart.length : null
				}/>
				<IconComponent name={'shopping-cart'} size={20} color={'black'}/>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	cart: {
		justifyContent: 'center',
		alignItems: 'center',
		width: 50,
		height: 50,
		borderRadius: 50,
		backgroundColor: color.extra_light_grey,
	},
})

export default CartComponent
