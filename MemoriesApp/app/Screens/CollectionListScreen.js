import React, { useState } from 'react'
import { View, FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { Colours } from '../constants/theme'
import BackButton from '../Components/BackButton'
import CollectionItem from '../Components/CollectionItem'
import { Ionicons } from '@expo/vector-icons'

//CollectionListScreen: Displays a list of all the collections
//and allows for them to be deleted by swiping left and clicking
//on the trash icon

const CollectionListScreen = ({ route, navigation }) => {
  const [collection, setCollection] = useState(route.params.collections)
  const [deleted, setDeleted] = useState([])

  //a line that separates the items on the list
  const Divider = () => {
      return(
        <View style={{
            borderBottomColor: Colours.grey,
            borderBottomWidth: 1
        }}/>
      )
  }
  
  //updates the deleted list with collections deleted
  const handleDelete = (item) => {
    setDeleted(deleted => [...deleted, item.collection])
    const newList = collection.filter(col => col.collection !== item.collection)
    setCollection(newList)
  }

  return (
    <View style={styles.container}>
        <BackButton onPress={()=> (
            navigation.navigate({
                name: 'Home',
                params: {'collection' : deleted},
                merge: true,
            })
        )}/>
        <Text style={styles.heading}>Edit Collections</Text>
        <View style={styles.list}>
            <FlatList
                data={collection}
                renderItem = {({ item }) => (
                    <CollectionItem
                        img={item.img} 
                        title={item.collection}
                        onSwipe={() => (
                            <View style={styles.delete}>
                                <TouchableOpacity onPress={() => handleDelete(item)}>
                                    <Ionicons name="trash-bin" size={20} color={Colours.white}/>
                                </TouchableOpacity>    
                            </View>
                        )}
                    />         
                )}
                keyExtractor={(i, idx) => idx.toString()}
                ItemSeparatorComponent={Divider}
            />
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 35,
        padding: 5
    },
    heading: {
        padding: 15,
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 30,
        color: Colours.primary
    }, 
    list: {
        padding: 20
    },
    delete: {
        backgroundColor: Colours.warning, 
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default CollectionListScreen