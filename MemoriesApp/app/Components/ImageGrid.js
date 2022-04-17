import React, { Component } from 'react';
import { View, Image, Dimensions, Modal, TouchableOpacity, Text } from 'react-native';
import { Colours } from '../constants/theme';
import ButtonRegular from './ButtonRegular';

//ImageGrid: The individual image in a grid. Called out by 
//the GridView component to display an image. When clicked
//it displays an image on full size.

class ImageGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }
  render() {
      const { collection, img } = this.props.photo
      const imgSize = Dimensions.get('window').width/3 - 7

    return (
        <View style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={() => this.setState({ clicked: true })}>
              <Image source={{ uri :img }} style={{width:imgSize, height: imgSize, margin: 2}}/>
            </TouchableOpacity>
            <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.clicked}
              onRequestClose={() => {
                this.setState({ clicked: false })
              }}
            >
              <View style={{
                width:Dimensions.get('window').width,
                height: Dimensions.get('window').height, 
                backgroundColor:'rgba(0, 0, 0, 0.7)'
              }}>
                <ButtonRegular 
                  icon="close"
                  iconSize={40}
                  onPress={()=>this.setState({ clicked: false })}  
                  style={{alignItems:'flex-end', padding: 12, backgroundColor: 'transparent'}}
                />
                <Image 
                  source={{ uri :img }} 
                  style={{ flex: 1, height: undefined, width: undefined }} 
                  resizeMode="contain"
                />
                <View style={{
                  flex: 0.3, 
                  width: '100%', 
                  position: 'absolute',
                  bottom: 1, 
                  backgroundColor: 'rgba(0,0,0,0.3)'
                  }}>
                  <Text style={{
                    color: Colours.white,
                    fontSize: 18,
                    paddingHorizontal: 15,
                    paddingVertical: 22
                    }}>Collection: 
                    <Text style={{fontWeight: 'bold'}}> {collection}</Text>
                  </Text>
                </View>
              </View >
            </Modal>
        </View>
    )
  }
}

export default ImageGrid