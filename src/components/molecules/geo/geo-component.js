import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import IconComponent from '../../atoms/icon-component'
import TitleComponent from '../../atoms/title-component'
import { font, mixin } from '../../../styles'

const GeoComponent = () => {
	return (
		<View style={styles.geo}>
			<TouchableOpacity>
				<IconComponent name={'map-marker'} size={20} color={'white'}/>
			</TouchableOpacity>
			<TitleComponent>
				<Text style={styles.title}>
					Мясницкая улица, 18
				</Text>
			</TitleComponent>
			<TouchableOpacity>
				<IconComponent name={'pencil'} size={20} color={'white'}/>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	geo: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	title: {
		paddingHorizontal: mixin.size_wp_30,
		color: 'white',
		fontSize: font.size_25,
		fontWeight: font.rubik_bold_weight,
		fontFamily: font.rubik_bold,
	},
})

export default GeoComponent
