import React, { Component } from 'react';
import { View, Image, Text, Dimensions } from 'react-native';

class ImageGrid extends Component {
  render() {
      const { collection, img } = this.props.photo
      const imgSize = Dimensions.get('window').width/3 - 7

    return (
        <View style={{alignItems: 'center'}}>
            <Image source={img} style={{width:imgSize, height: imgSize, margin: 2}}/>
        </View>
    )
  }
}

export default ImageGrid