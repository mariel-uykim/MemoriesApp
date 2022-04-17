import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Colours } from '../constants/theme'
import Swipeable from 'react-native-gesture-handler/Swipeable'

//CollectionItem: An item in the collection list. Displays
//an image from the collection along with the name of the collection
//besides it. Can also swipe left to perform an action

const CollectionItem = ({img, title, onSwipe}) => {
    return (
        <Swipeable renderRightActions={onSwipe}>
            <View style={styles.container}>
                <Image source={{uri: img}} style={styles.img}/>
                <Text style={styles.name}>{title}</Text>
            </View>
        </Swipeable>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 15
    },
    img: {
        borderRadius: 30,
        borderColor: Colours.tertiary,
        borderWidth: 2,
        height: 55,
        width: 55,
        resizeMode: 'cover',
        marginRight: 20
    },
    name: {
        color: Colours.primary,
        fontSize: 30,
        fontFamily: 'Poppins_600SemiBold'
    }

})
export default CollectionItem