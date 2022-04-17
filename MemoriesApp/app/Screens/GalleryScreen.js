import React from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import GridView from '../Components/GridView';
import { Colours } from '../constants/theme';
import BackButton from '../Components/BackButton';

//GalleryScreen: Displays all photos

const GalleryScreen = ({ route, navigation }) => {
    const { photos } = route.params
    return (
        <View style={styles.container}>
            <BackButton onPress={()=> navigation.goBack()}/>
            <Text style={styles.title}>All Photos</Text>
            <View styles={styles.imgView}>
                <GridView data={photos}/>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        marginVertical: 35,
        marginHorizontal: 10,
        flex: 1
    },
    header: {
        flex: 0.5,
        flexDirection: 'row',
        margin: 10
    },
    backBtn: {
        paddingHorizontal: 7,
        paddingVertical: 5
    },
    titleWrap: {
        flex: 0.5
    },  
    title: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 40,
        color: Colours.primary
    },
    subHeading: {
        fontFamily: 'Poppins_300Light',
        color: Colours.grey
    },
    imgView: {
        flex: 1,
        padding: 10
    }
})
export default GalleryScreen;