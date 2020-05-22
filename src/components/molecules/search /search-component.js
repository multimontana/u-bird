import React from 'react'
import { View, TextInput, StyleSheet, Platform } from 'react-native'
import IconComponent from '../../atoms/icon-component'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { font, mixin } from '../../../styles'

type Props = {
	children?: React.ReactNode
}

const SearchComponent = (props: Props): React.ReactElement<*> => {
	return (
		<View style={[styles.search, {...props.style}]}>
			<IconComponent style={styles.searchIcon} name={'search'} size={20} color={'#F62658'}/>
			<TextInput style={styles.searchInput} placeholder={'Поиск по товару или блюду'}/>
		</View>
	)
}

const styles = StyleSheet.create({
	search: {
		marginVertical: mixin.size_hp_10,
		marginBottom: mixin.hp('10%'),
		paddingHorizontal: mixin.size_wp_50
	},
	searchIcon: {
		position: 'absolute',
		left: mixin.wp('10%'),
		top: Platform.OS === 'android' ? mixin.size_hp_20 : mixin.size_hp_25,
		zIndex: 999
	},
	searchInput: {
		width: mixin.wp('90%'),
		height: mixin.size_hp_80,
		backgroundColor: 'white',
		borderRadius: 30,
		fontStyle: 'normal',
		fontFamily: font.rubik_regular,
		fontSize: font.size_20,
		justifyContent: 'center',
		paddingHorizontal: mixin.wp('12%')
	}
})

export default SearchComponent
