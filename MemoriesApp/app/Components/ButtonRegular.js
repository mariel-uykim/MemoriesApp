import React from 'react'
import { Button, StyleSheet } from 'react-native'
import { Colours } from '../constants/theme'

const ButtonRegular = ({text, onPress, style}) => {
  return (
    <Button title={text} onPress={onPress} style={[styles.btn, style]}/>
  )
}
const styles = StyleSheet.create({
    btn: {
        color: Colours.secondary
    }
})
export default ButtonRegular