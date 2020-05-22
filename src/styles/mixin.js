import { Dimensions } from 'react-native'

export const WINDOW_WIDTH = Dimensions.get('window').width
export const WINDOW_HEIGHT = Dimensions.get('window').height

import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'

export const wp = widthPercentageToDP
export const hp = heightPercentageToDP

export const size_hp_10 = hp('1%')
export const size_hp_15 = hp('1.5%')
export const size_hp_18 = hp('1.5%')
export const size_hp_20 = hp('2%')
export const size_hp_22 = hp('2.2%')
export const size_hp_24 = hp('2.5%')
export const size_hp_25 = hp('2.5%')
export const size_hp_27 = hp('2.7%')
export const size_hp_30 = hp('3%')
export const size_hp_40 = hp('4%')
export const size_hp_50 = hp('5%')
export const size_hp_60 = hp('6%')
export const size_hp_70 = hp('7%')
export const size_hp_80 = hp('8%')
export const size_hp_90 = hp('9%')

export const size_wp_10 = wp('1%')
export const size_wp_20 = wp('2%')
export const size_wp_22 = wp('2.2%')
export const size_wp_30 = wp('3%')
export const size_wp_35 = wp('3.5%')
export const size_wp_40 = wp('4%')
export const size_wp_50 = wp('5%')
export const size_wp_60 = wp('6%')
export const size_wp_70 = wp('7%')
export const size_wp_80 = wp('8%')
export const size_wp_90 = wp('9%')


