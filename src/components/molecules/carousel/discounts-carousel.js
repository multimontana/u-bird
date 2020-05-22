import React, { Component } from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { font, mixin } from '../../../styles'

class DiscountsCarousel extends Component {
	_renderItem = ({item}) => {
		return (
			<View
				style={styles.carouselContainer}
			>
				<View style={styles.rows}>
					<View style={{
						width: mixin.wp('47%'),
						justifyContent: 'flex-end',
						alignItems: 'flex-start',
					}}>
						<Image style={styles.shopLogo} source={item.shopImg}/>
						<Text style={styles.discountText}>Скидка на {item.discount} %</Text>
					</View>
					<View style={{width: mixin.wp('28%')}}>
						<Image style={styles.productImage} source={item.productImg}/>
					</View>
				</View>
				<Text style={styles.discountDesc}>На любимые продукты</Text>
			</View>
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
	carouselContainer: {
		marginLeft: mixin.size_wp_50,
		marginRight: mixin.size_wp_20,
		marginTop: mixin.size_hp_10,
		padding: mixin.size_hp_20,
		backgroundColor: 'white',
		height: mixin.hp('22%'),
		borderRadius: 10,
		width: mixin.wp('81%'),
	},
	rows: {
		flexDirection: 'row',
		height: mixin.hp('13%'),
		justifyContent: 'space-between',
	},
	discountText: {
		fontStyle: 'normal',
		fontFamily: font.rubik_bold,
		fontWeight: font.rubik_bold_weight,
		fontSize: font.size_28,
		color: '#785D32',
		marginTop: font.size_10,
	},
	discountDesc: {
		fontStyle: 'normal',
		fontFamily: font.rubik_regular,
		fontSize: font.size_23,
		color: '#785D32',
		marginVertical: mixin.hp('0.7%'),
	},
	shopLogo: {
		width: mixin.wp('28%'),
		height: mixin.hp('10%'),
		resizeMode: 'contain',
	},
	productImage: {
		width: mixin.wp('28%'),
		height: mixin.hp('15%'),
		resizeMode: 'contain',
	},
})

export default DiscountsCarousel
