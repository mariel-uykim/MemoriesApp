import React from 'react'
import { TouchableHighlight, Text, StyleSheet } from 'react-native'
import { Colours } from '../constants/theme'

const ClickableTitle = ({text, onPress}) => {
  return (
    <TouchableHighlight>
        <Text style={styles.text}>{text} > </Text>
    </TouchableHighlight>
  )
}
const styles = StyleSheet.create({
    text: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 30,
        color: Colours.primary,
        padding: 10
    }
})
export default ClickableTitle