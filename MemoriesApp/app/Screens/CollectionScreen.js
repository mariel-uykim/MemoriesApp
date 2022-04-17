import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import GridView from '../Components/GridView';
import { Colours } from '../constants/theme';
import BackButton from '../Components/BackButton';

//CollectionScreen: Displays the photos of a selected collection

const CollectionScreen = ({ route, navigation }) => {
    const { filteredImgs } = route.params
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <BackButton onPress={()=> navigation.goBack()} />
            </View>
            <View style={styles.titleWrap}>
                <Text style={styles.title}>{filteredImgs[0].collection}</Text>
                <Text style={styles.subHeading}>All Photos</Text>
            </View>
            <View styles={styles.imgView}>
                <GridView data={filteredImgs}/>
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
        flexDirection: 'row'
    },
    backBtn: {
        paddingHorizontal: 7,
        paddingVertical: 5
    },
    titleWrap: {
        paddingLeft: 10,
        marginBottom: 10
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
export default CollectionScreen;