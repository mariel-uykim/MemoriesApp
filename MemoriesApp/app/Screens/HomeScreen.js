import { ScrollView, 
         Text, 
         StyleSheet, 
         View, 
         Image, 
         FlatList,
        TouchableOpacity } from 'react-native';
import { Colours } from '../constants/theme';
import AppLoading from 'expo-app-loading';
import { useState } from 'react';
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
import { imageData } from '../constants/images';
import ImageGrid from '../Components/ImageGrid';
import GridView from '../Components/GridView';
import LogoHeader from '../Components/LogoHeader';

const HomeScreen = () => {

  const navigation = useNavigation();

  const [photos, setPhotos] = useState(imageData)
  const [collections, setCollections] = useState(
    Object.values(photos.reduce((col, {collection, img}) => {
      col[collection] = {collection, img}
      return col
    }, {}))
  )

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
          <Text style={styles.username}>@Someone</Text>
        </View>
        <View style={styles.lineBreak}></View>
      </View>
      <View style={styles.collections}>
        <TouchableOpacity>
          <ClickableTitle text="Collections" />
        </TouchableOpacity>
        <FlatList
          style={styles.collectionView}
          data = {collections}
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
      <View style={styles.photos}>
        <ClickableTitle 
          text="All Photos" 
          onPress={()=>navigation.navigate("Gallery", { photos })}
        />
        <GridView data={photos}/>
      </View>
      <TouchableOpacity style={styles.addBtn} onPress={() => navigation.navigate("AddImage")}>
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
