import React from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { Colours } from '../constants/theme';

const CollectionButton = ({img, title, onPress}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
        <ImageBackground 
            style={styles.img} 
            source={img}
            imageStyle={{borderRadius:20}}
        >
            <View style={styles.overlay}/>
            <View style={styles.titleWrap}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </ImageBackground>
        </TouchableOpacity>
    </View>
  ) 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 120,
        width: 130,
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginHorizontal: 5
    },
    img: {
        width: 130,
        height: 100
    },
    overlay: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: 'rgba(120, 79, 255, 0.6)',
        borderRadius: 20
    },
    titleWrap: {
        flex: 1,
        padding: 10,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 20,
        color: Colours.white,
        textAlign: 'center'
    }
})
export default CollectionButton