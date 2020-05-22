import React from 'react'
import { TextInput } from 'react-native'

type Props = {
	placeholder:? string
}

const InputComponent = (props: Props): React.ReactElement<*> =>
	<TextInput style={{...props.searchInputStyle}} placeholder={props.placeholder}/>

export default InputComponent
