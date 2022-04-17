import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Colours } from '../constants/theme'

//BackButton: A button component that displays as the back arrow

class BackButton extends Component {
  render() {
    return (
        <TouchableOpacity style={styles.backBtn} onPress={this.props.onPress}>
            <Ionicons size={40} name="arrow-back" color={Colours.primary}/>
        </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({
    backBtn: {
        paddingHorizontal: 7,
        paddingVertical: 5
    }
})
export default BackButton