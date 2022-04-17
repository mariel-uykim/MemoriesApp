import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Colours } from '../constants/theme'

//LogoHeader: The logo besides the app name that is 
//meant to be displayed on the header

const LogoHeader = () => {
  return (
    <View style={styles.logo}>
        <Image style={styles.logoImg} source={require('../assets/images/logo-purple.png')}/>
        <Text style={styles.logoText}>MemoryLane</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  logo: {
    flex: 1,
    flex: 1,
    flexDirection: 'row'
  },
  logoImg: {
    width: 30,
    height: 30,
    marginVertical: 8,
    marginHorizontal: 10
  },
  logoText: {
    fontSize: 30,
    fontFamily: 'Poppins_700Bold',
    color: Colours.primary
  }
})
export default LogoHeader