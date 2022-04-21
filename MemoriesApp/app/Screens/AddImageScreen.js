import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Alert, Button, Platform, Image, Dimensions } from 'react-native'
import InputField from '../Components/InputField'
import { Ionicons } from '@expo/vector-icons';
import { Colours } from '../constants/theme';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import ActionButton from '../Components/ActionButton';
import ButtonRegular from '../Components/ButtonRegular';

//AddImageScreen: A screen that allows users to create a new collection
//and upload a photo from their devices into the application

const AddImage = ({ route, navigation }) => {
    const { photos, user_id } = route.params
    const [addCollection, setAddCollection] = useState(false)
    const [newCollection, setNewCollection] = useState('')
    const [selectedCollection, setSelectedCollection] = useState("Select...");
    const [images, setImages] = useState(photos)
    const [collections, setCollections] = useState(
        [...new Set(images.map(item=>item.collection)), '+ New collection']
    )
    const [image, setImage] = useState(null)
    
    //Adds new collection to existing collection array
    const addToCollection = (event) => {
        if(newCollection.length > 0){
            setCollections(collections.filter(c => c != '+ New collection'))
            setCollections(collections => [...collections, newCollection, '+ New collection'])
            setSelectedCollection(newCollection)
        }
    }

    //Asks for permission to access device files
    useEffect(async () => {
        if(Platform.OS != "web") {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
            if(status !== 'granted') {
                Alert.alert('permission denied')
            }
        }
    },[])
    
    //Allows users to select an image from their device
    const selectImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            })

            if (!result.cancelled) {
            setImage(result.uri);
            }

     }

     //checks if all required details are filled and sends data
     //back to home page
    const uploadImage = () => {
        if(selectedCollection != '+ New collection' &&
           image != null) {
            let newPhoto = {
                img: image,
                collection: selectedCollection,
                user_id: user_id
            }
            
            navigation.navigate({
                name: 'Home',
                params: {'img' : newPhoto},
                merge: true,
            })
        }
        else {
            Alert.alert('Invalid Upload', 'Please fill all required information')
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backBtn} onPress={()=> navigation.goBack()}>
                <Ionicons size={30} name="arrow-back" color={Colours.primary}/>
            </TouchableOpacity>
            <View style={styles.titleWrap}>
                <Text style={styles.title}>Add New Photo</Text>
            </View>
            <View styles={styles.collectionWrap}>
                <Text>Select Collection</Text>
                <Picker
                    selectedValue={selectedCollection}
                    style={styles.collectionPicker}
                    onValueChange={(val, idx) => {
                        (val == '+ New collection') ? setAddCollection(true):setAddCollection(false)
                        setSelectedCollection(val)
                    }}
                >
                    {collections.map((c, key) => {
                        if(c!=undefined) return <Picker.Item label={c} value={c} key={key} style={styles.pickerItem}/>
                    })}
                </Picker>
                {addCollection && <View style={styles.addCollection}>
                    <InputField 
                        icon="ios-pencil" 
                        placeholder="New Collection Name"
                        style= {{color: Colours.black}}
                        onChangeText={(c) => setNewCollection(c)}/>
                    <ButtonRegular icon="add" onPress={()=>addToCollection()} style={{width: 35, height: 35, borderRadius: 20}}/>
                </View>}
                <View style={styles.imgUpload}>
                    {(image) ? <Image source={{ uri: image }} style={styles.chosenImg} /> :
                                <View style={styles.emptyBox}>
                                    <Ionicons name="image" size={40} color={Colours.white}/>
                                </View>
                    }
                    <ButtonRegular text="Upload Image" onPress={selectImage} style={{padding: 10}}/>
                </View>
                <View style={styles.uploadBtn}>
                    <ActionButton text="Upload" onPress={uploadImage}/>
                </View>
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 35,
        marginHorizontal: 10,
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    },
    titleWrap: {
        flex: 0.5
    },
    title: {
        flex: 0.5,
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 30,
        color: Colours.primary,
        marginVertical: 10
    },
    collectionWrap: {
        flex: 0.5
    },
    addCollection: {
        flexDirection: 'row',
        width: '90%',
        marginHorizontal: 10,
        alignItems: 'center'
    },
    collectionPicker : {
        width: 250,
        height: 60
    },
    pickerItem: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 20
    },
    chosenImg: {
        height: 250,
        width: Dimensions.get('window').width - 20
    },
    emptyBox: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 80
    },
    imgUpload: {
        backgroundColor: Colours.grey,
        marginVertical: 20
    },
    uploadBtn: {
        marginHorizontal: 10,
        marginTop: 50
    }
})
export default AddImage