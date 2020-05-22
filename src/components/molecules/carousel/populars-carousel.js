import React, { Component } from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { color, font, mixin } from '../../../styles'
import IconComponent from '../../atoms/icon-component'
import {observer, inject} from 'mobx-react'

@inject('ProductItem', 'Cart')
@observer
class PopularsCarousel extends Component {

	openSwipe = (item) => {
		this.props.ProductItem.createItem(item)
		this.props.openSwipePanel()
	}

	addToCart = (item) => {
		this.props.Cart.addToCart(item)
	}

	_renderItem = ({item}) => {
		return (
			<TouchableOpacity
				style={styles.popularProduct}
				onPress={() => this.openSwipe(item)}>
				<View style={styles.productContainer}>
					<Image source={item.img} style={styles.productImg}/>
				</View>
				<View style={{
					paddingHorizontal: mixin.size_wp_22,
					paddingVertical: mixin.size_hp_10,
				}}>
					<Text style={styles.popularProductTitle}>{item.title}</Text>
					<Text style={styles.popularProductWeight}>{item.weight}г</Text>
					<View style={styles.popularBottomBlock}>
						<Text style={styles.popularProductPrice}>{item.price} amd</Text>
						<TouchableOpacity onPress={() => this.addToCart(item)}>
							<View style={styles.popularProductCart}>
								<IconComponent name={'shopping-cart'} size={15} color={'white'}/>
							</View>
						</TouchableOpacity>
					</View>
				</View>
			</TouchableOpacity>
		)
	}

	render(): React.ReactNode {
		return (
			<FlatList
				style={{
					...this.props.style,
				}}
				data={this.props.data}
				renderItem={this._renderItem}
				horizontal={true}
				keyExtractor={item => item.id.toString()}
				showsHorizontalScrollIndicator={false}
			/>
		)
	}
}

const styles = StyleSheet.create({
	popularTitle: {
		paddingRight: mixin.size_wp_50,
		marginTop: mixin.size_hp_22,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	popularText: {
		color: '#222C54',
		fontStyle: 'normal',
		fontWeight: font.rubik_bold_weight,
		fontSize: mixin.size_hp_27,
		fontFamily: font.rubik_bold,
	},
	allText: {
		color: color.green,
		fontStyle: 'normal',
		fontWeight: font.rubik_bold_weight,
		fontSize: mixin.size_hp_22,
		fontFamily: font.rubik_bold,
	},
	popularProduct: {
		width: mixin.wp('40%'),
		backgroundColor: color.white,
		marginRight: mixin.size_wp_35,
		borderRadius: 20,
	},
	productContainer: {
		padding: 10,
		alignItems: 'center',
		borderBottomColor: color.extra_light_grey,
		borderBottomWidth: 1,
	},
	productImg: {
		width: mixin.wp('40%'),
		height: mixin.hp('11%'),
		resizeMode: 'cover',
	},
	popularBottomBlock: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	popularProductTitle: {
		marginTop: mixin.size_hp_10,
		width: mixin.wp('33%'),
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: mixin.size_hp_18,
		fontFamily: font.rubik_regular,
		color: color.dark_blue,
	},
	popularProductWeight: {
		marginTop: mixin.size_hp_10,
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: mixin.size_hp_18,
		fontFamily: 'Rubik',
		color: '#9FA1AE',
	},
	popularProductPrice: {
		marginTop: mixin.size_hp_15,
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: mixin.size_hp_20,
		fontFamily: font.rubik_regular,
		color: color.dark_blue,
	},
	popularProductCart: {
		width: 38,
		height: 38,
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: color.green,
	},
})

export default PopularsCarousel
