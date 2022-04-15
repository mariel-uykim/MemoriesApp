import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import { Colours } from '../constants/theme'
import { Ionicons } from '@expo/vector-icons';

const ButtonRegular = ({text, icon, onPress, style, iconSize=20}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn, style]}>
        {icon && <Ionicons name={icon} size={iconSize} color={Colours.white}/>}
        {text && <Text style={styles.btnText}>{text}</Text>}
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    btn: {
        backgroundColor: Colours.tertiary,
        color: Colours.white,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        textAlign: 'center',
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 15,
        color: Colours.white
    }
})
export default ButtonRegular