import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { mixin } from '../../styles'

type Props = {
	count?: number,
}

const CartCountComponent = (props: Props): React.ReactElement<*> => {
	const propsCount = () => {
		return (
			(props.count > 0) ?
				<View style={styles.cartCount}>
					<Text style={styles.cartCountText}>{props.count}</Text>
				</View> : null
		)
	}
	return (
		propsCount()
	)
}

const styles = StyleSheet.create({
	cartCount: {
		width: 24,
		height: 24,
		backgroundColor: '#F62658',
		borderRadius: 50,
		position: 'absolute',
		left: mixin.wp('-2%'),
		top: mixin.hp('-.5%'),
		justifyContent: 'center',
		alignItems: 'center'
	},
	cartCountText: {
		fontStyle: 'normal',
		fontWeight: 'bold',
		fontFamily: 'Rubik',
		fontSize: mixin.size_hp_20,
		color: 'white'
	}
})

export default CartCountComponent
