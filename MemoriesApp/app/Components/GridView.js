import React from 'react'
import { View, FlatList } from 'react-native'
import ImageGrid from './ImageGrid'

//GridView: Displays the images in a grid view through
//a flatlist. It is used to display all photos, photos from
//a collection and the featured photos in the home page

function GridView({data}) {
  return (
    <View>
        <FlatList 
                  contentContainerStyle={{paddingBottom:100}}
                  numColumns={3}
                  data = {data}
                  keyExtractor={(i, idx) => idx.toString()}
                  renderItem = {({ item }) => (<ImageGrid photo = {item}/>)}/>
      </View>
  )
}

export default GridView