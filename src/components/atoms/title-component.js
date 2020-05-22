import React from 'react'
import { View, Text } from 'react-native'

type Props = {
	children?: React.ReactNode
}

const TitleComponent = (props: Props): React.ReactElement<*> => {
	return <View>{props.children}</View>
}

export default TitleComponent
