import React, { Component } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { mixin, font } from '../../../styles'

class CategoriesCarousel extends Component {

	_renderItem = ({item}) => {
		return (
			<TouchableOpacity onPress={() => this.props.catalog.navigate(item.navigate)}>
				<View style={styles.catalog}>
					<Text style={styles.catalogText}>{item.title}</Text>
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
	catalog: {
		marginTop: mixin.size_hp_50,
		height: mixin.size_hp_60,
		justifyContent: 'center',
		alignItems: 'center',
		padding: mixin.size_hp_10,
		paddingLeft: mixin.size_wp_30,
		paddingRight: mixin.size_wp_30,
		backgroundColor: 'white',
		borderRadius: 10,
		marginRight: mixin.size_wp_20,
	},
	catalogText: {
		color: '#222C54',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: mixin.hp('1.75%'),
		fontFamily: font.rubik_regular,
	},
})

export default CategoriesCarousel
