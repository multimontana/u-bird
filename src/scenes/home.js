import React, { Component } from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity, Animated, PanResponder, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { color, mixin, font } from '../styles'
import GeoComponent from '../components/molecules/geo/geo-component'
import CartComponent from '../components/molecules/cart/cart-component'
import SearchComponent from '../components/molecules/search /search-component'
import DiscountsCarousel from '../components/molecules/carousel/discounts-carousel'
import CategoriesCarousel from '../components/molecules/carousel/categories-carousel'
import PopularsCarousel from '../components/molecules/carousel/populars-carousel'
import TitleComponent from '../components/atoms/title-component'
import IconComponent from '../components/atoms/icon-component'
import Images from '../assets/images'
import Icon from 'react-native-vector-icons/FontAwesome'
import { observer, inject } from 'mobx-react'
import BottomSheet from 'reanimated-bottom-sheet'
import { wp } from '../styles/mixin'

const discountProducts = [
	{
		id: 1,
		title: 'Сыроедов',
		discount: 15,
		shopImg: Images.shopImg,
		productImg: Images.productImg,
	},
	{
		id: 2,
		title: 'Сыроедов',
		discount: 15,
		shopImg: Images.shopImg,
		productImg: Images.productImg,
	},
	{
		id: 3,
		title: 'Сыроедов',
		discount: 15,
		shopImg: Images.shopImg,
		productImg: Images.productImg,
	},
	{
		id: 4,
		title: 'Сыроедов',
		discount: 15,
		shopImg: Images.shopImg,
		productImg: Images.productImg,
	},
	{
		id: 5,
		title: 'Сыроедов',
		discount: 15,
		shopImg: Images.shopImg,
		productImg: Images.productImg,
	},
]
const categories = [
	{
		id: 1,
		title: <Icon name={'bars'} size={20} color={color.red}/>,
	},
	{
		id: 2,
		title: 'Продукты питания',
	},
	{
		id: 3,
		title: 'Доставка еды',
	},
	{
		id: 4,
		title: 'Строительные материалы',
	},
	{
		id: 5,
		title: 'Цветочные магазины',
	},
	{
		id: 6,
		title: 'Аптечные средства',
	},
]
const populars = [
	{
		id: 1,
		title: 'Овёс "Образ Жизни Алтая" голозёрный',
		img: Images.ovesFull,
		price: 16200,
		weight: 150,
		count: 1,
	},
	{
		id: 2,
		title: 'Овёс "Образ Жизни Алтая" голозёрный',
		img: Images.ovesFull,
		price: 16890,
		weight: 150,
		count: 1,
	},
	{
		id: 3,
		title: 'Овёс "Образ Жизни Алтая" голозёрный',
		img: Images.ovesFull,
		price: 6200,
		weight: 150,
		count: 1,
	},
	{
		id: 4,
		title: 'Овёс "Образ Жизни Алтая" голозёрный',
		img: Images.ovesFull,
		price: 9200,
		weight: 150,
		count: 1,
	},
	{
		id: 5,
		title: 'Овёс "Образ Жизни Алтая" голозёрный',
		img: Images.ovesFull,
		price: 11200,
		weight: 150,
		count: 1,
	},
	{
		id: 6,
		title: 'Овёс "Образ Жизни Алтая" голозёрный',
		img: Images.ovesFull,
		price: 14200,
		weight: 150,
		count: 1,
	},
]

@inject('ProductItem', 'Cart')
@observer
class Home extends Component {
	openSwipePanel = () => {
		this.bs.current.snapTo(1)
		console.log(this.bs)
		this.forceUpdate()
		this.render()
	}

	_minus = (product) => {
		let idx = this.props.Cart.cart.findIndex(item => item.id === product.id)
		if (idx != -1) {
			let count = this.props.Cart.cart[idx].count
			return (count <= 0) ? 0 : this.props.Cart.cart[idx].count--
		}
		return
	}

	addToCart = (item) => {
		this.props.Cart.addToCart(item)
	}

	_plus = (product) => {
		let idx = this.props.Cart.cart.findIndex(item => item.id === product.id)
		if (idx != -1) {
			this.props.Cart.cart[idx].count++
			return
		}
		this.addToCart(product)
	}

	renderContent = () => {
		const {id, title, img, price, weight, count} = JSON.parse(JSON.stringify(this.props.ProductItem.getItem()))
		return (
			<View style={styles.productItemContainer}>
				<Image source={img} style={styles.productItemImg}/>
				<View style={styles.productItemInformationContainer}>
					<Text style={styles.productItemTitle}>{title}</Text>
					<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
						<Text style={styles.productItemWeight}>1 шт. 500г</Text>
						<Text style={styles.productItemPrice}>{price} AMD</Text>
					</View>
				</View>
				<View style={{
					marginHorizontal: mixin.size_wp_30,
					marginBottom: mixin.size_hp_30
				}}>
					<LinearGradient
						start={{x: 0, y: 0}} end={{x: 1, y: 0}}
						colors={['#16C781', '#13AC79']}
						style={styles.productItemAddToCart}>
						<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
							<TouchableOpacity style={styles.productItemPlus} onPress={() => this._plus({id, title, img, price, weight, count})}>
								<Icon name={'plus'} size={20} color={'white'}/>
							</TouchableOpacity>
							<Text style={styles.productItemCountText}>{count} шт</Text>
							<TouchableOpacity style={styles.productItemMinus} onPress={() => this._minus({id, title, img, price, weight, count})}>
								<Icon name={'minus'} size={20} color={'white'}/>
							</TouchableOpacity>
						</View>
						<TouchableOpacity style={styles.productItemAddToCartContainer}>
							<Text style={styles.productItemAddToCartButton}>Добавить <Icon name={'shopping-cart'} size={22} color={color.red}/></Text>
						</TouchableOpacity>
					</LinearGradient>
				</View>
				<ScrollView
					style={styles.productItemDescriptionContainer}
					automaticallyAdjustContentInsets={true}
					bounces={true}
				>
					<Text style={styles.productItemSpecification}>Описание</Text>
					<Text style={styles.productItemDescription}>Овес содержит много растворимой клетчатки, витамины Е и К,
						является источником кальция, железа, магния, серы, кремния, хрома, цинка, фтора, йода. Проростки овса
						обладают обволакивающим, желчегонным и мочегонным действием, способствуют выведению токсинов.
					</Text>
					<Text style={styles.productItemSpecification}>Описание</Text>
					<Text style={styles.productItemDescription}>Овес содержит много растворимой клетчатки, витамины Е и К,
						является источником кальция, железа, магния, серы, кремния, хрома, цинка, фтора, йода. Проростки овса
						обладают обволакивающим, желчегонным и мочегонным действием, способствуют выведению токсинов.
					</Text>
				</ScrollView>
			</View>
		)
	}

	bs = React.createRef()

	render(): React.ReactNode {
		return (
			<View>
				<LinearGradient
					start={{x: 0, y: 0}} end={{x: 1, y: 0}}
					colors={['#13B07F', '#00A06D']}
					style={styles.header}>
					<View style={styles.geoCartContainer}>
						<GeoComponent/>
						<CartComponent/>
					</View>
					<SearchComponent style={styles.search}/>
				</LinearGradient>
				<DiscountsCarousel data={discountProducts} style={{
					position: 'absolute',
					top: mixin.hp('22%'),
				}}/>
				<View style={styles.section}>
					<CategoriesCarousel data={categories} style={{}}/>
					<ScrollView
						style={{height: mixin.hp('36%')}}
						automaticallyAdjustContentInsets={true}
						bounces={true}
					>
						<View style={styles.popularContainer}>
							<TitleComponent>
								<Text style={styles.popular}>
									Популярное
								</Text>
							</TitleComponent>
							<TitleComponent>
								<View style={styles.flexBetween}>
									<Text style={styles.all}>
										Все
									</Text>
									<IconComponent name={'chevron-right'} size={13} color={color.green}/>
								</View>
							</TitleComponent>
						</View>
						<PopularsCarousel data={populars} style={{
							marginBottom: mixin.size_hp_20,
						}} openSwipePanel={this.openSwipePanel}/>
					</ScrollView>
				</View>
				<BottomSheet
					ref={this.bs}
					initialSnap={0}
					snapPoints={[0, mixin.WINDOW_HEIGHT / 1.50, mixin.WINDOW_HEIGHT - 100]}
					enabledGestureInteraction={true}
					renderContent={this.renderContent}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	header: {
		paddingVertical: mixin.size_hp_50,
		width: mixin.wp('100%'),
		height: mixin.hp('38%'),
		position: 'relative',
	},
	search: {
		marginVertical: mixin.size_hp_30,
		zIndex: 5
	},
	geoCartContainer: {
		width: mixin.wp('100%'),
		height: mixin.size_hp_50,
		paddingHorizontal: mixin.size_wp_40,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	productItemAddToCart: {
		width: mixin.wp('92%'),
		height: mixin.hp('9%'),
		borderRadius: 40,
		marginTop: mixin.size_hp_40,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: mixin.size_hp_30,
	},
	section: {
		paddingLeft: mixin.size_wp_50,
		marginVertical: mixin.size_hp_50,
	},
	popular: {
		color: '#222C54',
		fontStyle: 'normal',
		fontWeight: font.rubik_bold_weight,
		fontSize: font.size_27,
		fontFamily: font.rubik_bold,
	},
	all: {
		color: '#12B575',
		fontStyle: 'normal',
		fontWeight: font.rubik_bold_weight,
		fontSize: font.size_22,
		fontFamily: font.rubik_bold,
		paddingHorizontal: mixin.size_wp_20,
	},
	productItemContainer: {
		width: mixin.wp('100%'),
		height: mixin.WINDOW_HEIGHT - 110,
		backgroundColor: 'white',
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		zIndex: 10,
		paddingTop: mixin.size_hp_25,
	},
	popularContainer: {
		paddingRight: mixin.size_wp_50,
		marginVertical: mixin.size_hp_30,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	productItemPlus: {
		width: 35,
		height: 35,
		borderRadius: 50,
		borderWidth: 1,
		borderColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
	},
	productItemMinus: {
		width: 35,
		height: 35,
		borderRadius: 50,
		borderWidth: 1,
		borderColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
	},
	productItemCountText: {
		color: 'white',
		fontStyle: 'normal',
		fontSize: mixin.size_hp_25,
		fontFamily: font.rubik_regular,
		marginHorizontal: mixin.size_hp_18,
		alignItems: 'center',
		justifyContent: 'center',
	},
	productItemAddToCartContainer: {
		width: mixin.wp('40%'),
		height: mixin.hp('5%'),
		borderRadius: 30,
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
	},
	productItemAddToCartButton: {
		color: color.red,
		fontStyle: 'normal',
		fontFamily: font.rubik_regular,
		fontSize: font.size_20,
		fontWeight: '500',
	},
	flexBetween: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	productItemImg: {
		width: mixin.wp('100%'),
		height: mixin.hp('30%'),
		resizeMode: 'contain',
		justifyContent: 'center',
		alignItems: 'center',
	},
	productItemDescriptionContainer: {
		zIndex: 1,
		backgroundColor: color.extra_light_grey,
		paddingHorizontal: mixin.size_hp_20,
	},
	productItemInformationContainer: {
		paddingHorizontal: mixin.size_hp_20,
	},
	productItemTitle: {
		fontWeight: font.rubik_bold_weight,
		fontFamily: font.rubik_regular,
		fontStyle: 'normal',
		fontSize: mixin.size_hp_25,
		color: color.dark_blue,
		paddingVertical: mixin.size_hp_30,
	},
	productItemSpecification: {
		fontWeight: '500',
		fontFamily: font.rubik_regular,
		fontStyle: 'normal',
		fontSize: mixin.size_hp_20,
		color: color.dark_blue,
		paddingVertical: mixin.size_hp_25,
	},
	productItemDescription: {
		width: mixin.wp('94%'),
		fontWeight: 'normal',
		fontFamily: font.rubik_regular,
		fontStyle: 'normal',
		fontSize: mixin.size_hp_20,
		color: color.grey,
	},
	productItemWeight: {
		color: color.light_grey,
		fontSize: font.size_18,
		fontStyle: 'normal',
		fontFamily: font.rubik_regular,
		fontWeight: 'normal',
	},
	productItemPrice: {
		color: color.dark_blue,
		fontSize: font.size_25,
		fontStyle: 'normal',
		fontFamily: font.rubik_bold,
		fontWeight: font.rubik_bold_weight,
	},
})

export default Home
