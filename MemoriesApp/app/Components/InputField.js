import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Colours } from '../constants/theme';

const InputField = ({icon, ...otherProps}) => {
  return (
    <View style={styles.inputWrap}>
      {icon && <Ionicons style={styles.icon} name={icon} size={25}/>}
      <TextInput style={styles.input} {...otherProps}/>
    </View>
  )
}

const styles = StyleSheet.create({
    inputWrap: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    icon: {
        color: Colours.white,
        padding: 12
    },
    input: {
        flex: 1,
        borderBottomColor: Colours.grey,
        borderBottomWidth: 2,
        fontSize: 20,
        color: Colours.white
    }
})
export default InputField