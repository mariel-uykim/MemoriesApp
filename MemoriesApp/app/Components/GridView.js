import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import ImageGrid from './ImageGrid'
function GridView({data}) {
  return (
    <View>
        <FlatList 
                  numColumns={3}
                  data = {data}
                  keyExtractor={(i, idx) => idx.toString()}
                  renderItem = {({ item }) => (<ImageGrid photo = {item}/>)}/>
      </View>
  )
}

export default GridView