import React from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import GridView from '../Components/GridView';
import { Colours } from '../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import LogoHeader from '../Components/LogoHeader';

const GalleryScreen = ({ route, navigation }) => {
    const { photos } = route.params
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backBtn} onPress={()=> navigation.goBack()}>
                    <Ionicons size={30} name="arrow-back" color={Colours.primary}/>
                </TouchableOpacity>
                <LogoHeader/>
            </View>
            <View style={styles.titleWrap}>
                <Text style={styles.title}>All Photos</Text>
            </View>
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
        flex: 1,
    },
    header: {
        flex: 0.2,
        flexDirection: 'row'
    },
    backBtn: {
        paddingHorizontal: 7,
        paddingVertical: 5
    },
    titleWrap: {
        flex: 0.3
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
        flex: 1.5,
        padding: 10,
        backgroundColor: 'green'
    }
})
export default GalleryScreen;