import { Text, 
         StyleSheet, 
         View, 
         FlatList,
        TouchableOpacity } from 'react-native';
import { Colours } from '../constants/theme';
import AppLoading from 'expo-app-loading';
import { useState, useEffect } from 'react';
import { 
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic
  } from '@expo-google-fonts/poppins'
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import ClickableTitle from '../Components/ClickableTitle';
import CollectionButton from '../Components/CollectionButton';
import { useNavigation } from "@react-navigation/native";
import GridView from '../Components/GridView';
import LogoHeader from '../Components/LogoHeader';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ route }) => {
  const [loadedImg, setLoadedImg] = useState(false)
  const { user } = route.params
  const imgData = require('../constants/photos.json')
  const [photos, setPhotos] = useState(imgData)
  const [lastSixPhotos, setLastSixPhotos] = useState(photos)

  const navigation = useNavigation()

  //stores images to the AsyncStorage with the key of 'photos'
  const storeData = async (data) => {
    try {
      const imgs = JSON.stringify(data)
      await AsyncStorage.setItem('photos', imgs)

    } 
    catch (e) {
      console.log(e)
    }
  }

  //Checks if images have been loaded. Uses AsyncStorage to retrieve
  //data and updates the last six photos. This loads once when the home
  //screen is newly loaded
  if(!loadedImg) {
    storeData(imgData)

    AsyncStorage.getItem('photos').then(
      (val) => { setPhotos(JSON.parse(val)) }
    )
    setLastSixPhotos(photos.slice(-6))

    setLoadedImg(true)
  }

  //sets the list of collections by checking the unique collection
  //names among the photos
  const [collections, setCollections] = useState(
    photos.filter((img, i) => photos.findIndex((p) => img.collection === p.collection) === i)
  )
  
  //when data from AddImageScreen is sent back it adds photos into array of
  //photos, updates the latest photos, and updates the list of collection if 
  //there is a new collection
  useEffect(() => {
    if (route.params?.img) {
      setPhotos(photos => [...photos, route.params.img])
      setLastSixPhotos(photos.slice(-6))

      let curr = route.params.img.collection

      if(!collections.some((c) => c.collection==curr)) {
        setCollections(collections => [...collections, route.params.img])
      }
    }
  }, [route.params?.img]);

  //When CollectionListScreen sends back data on deleted screens,
  //it deletes the collection and the associated images along with it
  useEffect(() => {
    if (route.params?.collection) {
      const deletedList = route.params.collection
      setPhotos(photos.filter(col => !deletedList.includes(col.collection)))
      setCollections(collections.filter(col => !deletedList.includes(col.collection)))
    }
  }, [route.params?.collection])

  
  //loads the fonts that will be used
  let [load] = useFonts({
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic
  })

  //does not proceed if the fonts have not 
  //been loaded, instead shows a loading screen
  //until it has been loaded
  if(!load) {
      return <AppLoading/>
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.topBar}>
          <LogoHeader/>
          <TouchableOpacity style={styles.exitBtn} onPress={() => navigation.navigate("Welcome")}>
            <Ionicons style="exit" name="log-out" size={30} color={Colours.primary}/>
          </TouchableOpacity>
        </View>
        <View style={styles.greetings}>
          <Text style={styles.welcome}>Welcome, </Text>
          {user && <Text style={styles.username}> { user.username } </Text>}
        </View>
        <View style={styles.lineBreak}></View>
      </View>
      <View style={styles.collections}>
        <TouchableOpacity>
          <ClickableTitle 
            text="Collections" 
            onPress={()=>navigation.navigate("CollectionList", { collections })}
          />
        </TouchableOpacity>
        <FlatList
          style={ styles.collectionView }
          data = { collections }
          keyExtractor={(i, idx) => idx.toString()}
          horizontal={true}
          renderItem = {({ item }) => (
            <CollectionButton 
              img={item.img} 
              title={item.collection} 
              onPress={() => {
                const filteredImgs = photos.filter((i) => {
                  return i.collection == item.collection
                })
                navigation.navigate("Collection", { filteredImgs })
              }}/>
          )}
        />
      </View>
      <View style={ styles.photos }>
        <ClickableTitle 
          text="All Photos" 
          onPress={()=>navigation.navigate("Gallery", { photos })}
        />
        <GridView data={lastSixPhotos}/>
      </View>
      <TouchableOpacity style={styles.addBtn} onPress={() => navigation.navigate("AddImage", { photos })}>
        <Ionicons name="add" size={70} color={Colours.white} style="addIcon"/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35
  },
  header: {
    flex: 1
  },
  topBar: {
    flex: 1,
    flexDirection: 'row'
  },
  lineBreak:{
    borderBottomColor: Colours.grey,
    borderBottomWidth: 1,
    width: '95%',
    flex: 1,
    alignSelf: 'center'
  },
  collections: {
    flex: 1
  },
  photos: {
    flex: 1.7,
    padding:10
  },
  collectionView: {
    marginRight: 10
  },
  exitBtn: {
    paddingVertical: 8,
    paddingHorizontal: 12

  },
  greetings: {
    flex: 1,
    padding: 10,
    marginTop: 20
  },
  welcome: {
    fontSize: 25,
    fontFamily: 'Poppins_400Regular',
  },
  username: {
    fontSize: 45,
    fontFamily: 'Poppins_700Bold',
    color: Colours.primary,
    top: -15
  },
  addBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 15,
    right: 15,
    backgroundColor: Colours.primary,
    borderRadius: 80,
    width: 80,
    height: 80
  },

})

export default HomeScreen
