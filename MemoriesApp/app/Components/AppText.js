import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const AppText = () => {
  return (
    <TouchableOpacity>
        <Text style={styles.text}>Hello</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  text: {
    fontSize: 50
  }
})
export default AppText