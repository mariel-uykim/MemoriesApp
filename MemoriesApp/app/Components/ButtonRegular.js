import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import { Colours } from '../constants/theme'
import { Ionicons } from '@expo/vector-icons';

//ButtonRegular: A regular button that is smaller is used for smaller
//actions like the add collection button and upload image button in the 
//Upload Screen

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