import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Animated, Image, ScrollView, StyleSheet } from 'react-native'
import Swipeable from "react-native-gesture-handler/Swipeable"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import {observer, inject} from 'mobx-react'
import Icon from 'react-native-vector-icons/FontAwesome'

@inject('Cart')
@observer
class Cart extends Component {
	removeItem = (id) => {
		let idx = this.props.Cart.cart.findIndex(item => item.id === id)
		this.props.Cart.cart.splice(idx, 1)
	}

	_rightAction = (progress, dragX, item) => {
		const scale = dragX.interpolate({
			inputRange: [-100, 0],
			outputRange: [1, 0],
			extrapolate: 'clamp',
		})
		return (
			<TouchableOpacity style={[styles.removeCartItem, {transform: [{scale}]}]} onPress={() => this.removeItem(item.id)}>
				<Animated.View>
					<Icon name={'trash'} size={20} color={'black'}/>
				</Animated.View>
			</TouchableOpacity>
		)
	}
	_minus = (id) => {
		let idx = this.props.Cart.cart.findIndex(item => item.id === id)
		let count = this.props.Cart.cart[idx].count
		return (count <= 0) ? 0 : this.props.Cart.cart[idx].count--
	}

	_plus = (id) => {
		let idx = this.props.Cart.cart.findIndex(item => item.id === id)
		this.props.Cart.cart[idx].count++
	}

	_buy = () => {
		let items = JSON.parse(JSON.stringify(this.props.Cart.getItems()))
		console.log(items)
	}
	render(): React.ReactNode {
		return (
			<View style={styles.container}>
				<ScrollView style={{flex: 2}}>
					{
						JSON.parse(JSON.stringify(this.props.Cart.getItems())).map(item => {
							return (
								<Swipeable key={item.id} renderRightActions={(progress, dragX) => this._rightAction(progress, dragX, item)}>
									<View style={styles.item}>
										<Image source={item.productImg} style={{
											width: wp('35%'),
											height: hp('10%')
										}}/>
										<View>
											<Text style={styles.productPrice}>{item.price * item.count}</Text>
											<Text style={styles.productTitle}>{item.title}</Text>
											<Text style={styles.productWeight}>{item.weight}</Text>
											<View style={styles.countContainer}>
												<TouchableOpacity onPress={() => this._minus(item.id)}>
													<View style={styles.minus}>
														<Icon name={'minus'} size={10} color={'white'}/>
													</View>
												</TouchableOpacity>
												<View>
													<Text style={styles.countText}>{item.count}</Text>
												</View>
												<TouchableOpacity onPress={() => this._plus(item.id)}>
													<View style={styles.plus}>
														<Icon name={'plus'} size={10} color={'white'}/>
													</View>
												</TouchableOpacity>
											</View>
										</View>
									</View>
								</Swipeable>
							)
						})
					}
				</ScrollView>
				<View style={{
					flex: 0.5,
					borderTopWidth: 1,
					borderColor: '#DBDBDB',
					marginTop: hp('2%'),
				}}>
					<View style={styles.addedBlock}>
						<Text>Позиций добавлено</Text>
						<Text>{ JSON.parse(JSON.stringify(this.props.Cart.getItems())).length }
							( {
								JSON.parse(JSON.stringify(this.props.Cart.getItems())).map(
									item => item.weight * item.count
								).reduce(
									(a, b) => {
										let sum = parseInt(a) + parseInt(b)
										if (sum < 1000) {
											return `${sum} г`
										}
										return `${sum.toFixed(2)} г`
									}, 0
								)
							})</Text>
					</View>
					<View style={styles.deliveryBlock}>
						<Text>Доставка:</Text>
						<Text>1 700 AMD</Text>
					</View>
					<TouchableOpacity onPress={this._buy}>
						<View style={styles.buyButton}>
							<Text style={styles.order}>Оформить заказ</Text>
							<Text style={styles.orderPrice}>
								{
									JSON.parse(JSON.stringify(this.props.Cart.getItems())).map(
										item => item.price * item.count
									).reduce(
										(first, last) => {
											return first + last
										}, 0
									)
								} AMD</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#EBEDF2',
		flex: 1,
		paddingHorizontal: wp('5%'),
		marginTop: hp('3%'),
	},
	item: {
		width: wp('90%'),
		padding: hp('1.2%'),
		backgroundColor: 'white',
		borderRadius: 20,
		marginVertical: hp('1%'),
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	removeCartItem: {
		borderTopRightRadius: 20,
		borderBottomRightRadius: 20,
		justifyContent: 'center',
		backgroundColor: '#F62658',
		alignItems: 'flex-end',
		paddingHorizontal: 30,
	},
	productPrice: {
		fontStyle: 'normal',
		fontWeight: '500',
		fontFamily: 'Rubik',
		fontSize: hp('2%'),
		color: '#222C54',

	},
	productTitle: {
		width: wp('55%'),
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontFamily: 'Rubik',
		fontSize: hp('2%'),
		color: '#222C54',
		marginVertical: hp('1.5%'),
	},
	productWeight: {
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontFamily: 'Rubik',
		fontSize: hp('2%'),
		color: '#9FA1AE',
	},
	countContainer: {
		bottom: hp('-1.2%'),
		borderBottomRightRadius: 20,
		borderTopLeftRadius: 20,
		width: wp('22%'),
		height: hp('4.2%'),
		backgroundColor: '#12B575',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		position: 'absolute',
		left: wp('30%')
	},
	minus: {
		justifyContent: 'center',
		alignItems: 'center',
		width: 22,
		height: 22,
		borderRadius: 50,
		backgroundColor: '#186a4c',
	},
	plus: {
		justifyContent: 'center',
		alignItems: 'center',
		width: 22,
		height: 22,
		borderRadius: 50,
		backgroundColor: '#186a4c',
	},
	countText: {
		color: '#FFFFFF',
		fontSize: hp('1.8%'),
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontFamily: 'Rubik',
	},
	addedBlock: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: hp('2%'),
		fontSize: hp('1.8%'),
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontFamily: 'Rubik',
		color: '#222C54'
	},
	deliveryBlock: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: hp('2%'),
		fontSize: hp('1.8%'),
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontFamily: 'Rubik',
		color: '#222C54'
	},
	buyButton: {
		width: wp('90%'),
		height: hp('7%'),
		borderRadius: 30,
		backgroundColor: '#13B378',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		position: 'absolute',
		bottom: hp('-14.5%'),
	},
	order: {
		fontSize: hp('1.8%'),
		fontStyle: 'normal',
		fontWeight: 'bold',
		fontFamily: 'Rubik',
		color: '#FFFFFF'
	},
	orderPrice: {
		fontSize: hp('2%'),
		fontStyle: 'normal',
		fontWeight: 'bold',
		fontFamily: 'Rubik',
		color: '#FFFFFF'
	}
})
export default Cart
