import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Dimensions } from 'react-native';
import { Colours } from '../constants/theme';

//ActionButton: A button component that's bigger and is used for larger
//actions like uploading photos or registering

const ActionButton = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.actionBtn}>
        <Text style={styles.actionBtnText}>{text}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    actionBtn: {
        backgroundColor: Colours.secondary,
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 40
    },
    actionBtnText: {
        color: Colours.white,
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'Poppins_600SemiBold',
    }
  })

  export default ActionButton;