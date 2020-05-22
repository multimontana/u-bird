import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'


type Props = {
	name?: string,
	size?: number,
	color?: string,
}

const IconComponent = (props: Props): React.ReactElement<*> => <Icon style={{...props.style}}  name={props.name} size={props.size} color={props.color}/>

export default IconComponent
