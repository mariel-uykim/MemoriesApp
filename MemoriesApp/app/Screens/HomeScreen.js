import { ScrollView, 
         Text, 
         StyleSheet, 
         View, 
         TouchableHighlight, 
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

const HomeScreen = () => {

  const nav = useNavigation();
  const [photos, setPhotos] = useState(imageData)
  
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
          <View style={styles.logo}>
            <Image style={styles.logoImg} source={require('../assets/images/logo-purple.png')}/>
            <Text style={styles.logoText}>MemoryLane</Text>
          </View>
          <TouchableHighlight style={styles.exitBtn} onPress={() => nav.navigate("Welcome")}>
            <Ionicons style="exit" name="log-out" size={30} color={Colours.primary}/>
          </TouchableHighlight>
        </View>
        <View style={styles.greetings}>
          <Text style={styles.welcome}>Welcome, </Text>
          <Text style={styles.username}>@Someone</Text>
        </View>
        <View style={styles.lineBreak}></View>
      </View>
      <View style={styles.collections}>
        <TouchableHighlight>
          <ClickableTitle text="Collections" />
        </TouchableHighlight>
        <ScrollView horizontal={true} style={styles.collectionView}>
          <CollectionButton img={require('../assets/images/sample2.jpg')} title="fun"/>
          <CollectionButton img={require('../assets/images/sample3.jpg')} title="love"/>
          <CollectionButton img={require('../assets/images/sample1.jpg')} title="europe"/>
          <CollectionButton img={require('../assets/images/sample8.jpg')} title="skii"/>
          <CollectionButton img={require('../assets/images/sample6.jpg')} title="night"/>
        </ScrollView>
      </View>
      <View style={styles.photos}>
        <ClickableTitle text="All Photos" />
        <FlatList 
                  numColumns={3}
                  data = {photos}
                  keyExtractor={(i, idx) => idx.toString()}
                  renderItem = {({ item }) => (<ImageGrid photo = {item}/>)}/>
      </View>
      <TouchableOpacity style={styles.addBtn}>
        <Ionicons name="add" size={70} color={Colours.white} style="addIcon"/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
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
  collections: {
    flex: 1
  },
  photos: {
    flex: 1.7,
    padding:10
  },
  collectionView: {
    paddingHorizontal: 10
  },
  logoText: {
    fontSize: 30,
    fontFamily: 'Poppins_700Bold',
    color: Colours.primary
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
    top: -20
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
