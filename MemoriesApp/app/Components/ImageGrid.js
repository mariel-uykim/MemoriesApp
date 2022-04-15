import React, { Component } from 'react';
import { View, Image, Dimensions, Modal, TouchableOpacity } from 'react-native';
import ButtonRegular from './ButtonRegular';

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
              <Image source={img} style={{width:imgSize, height: imgSize, margin: 2}}/>
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
                  source={img} 
                  style={{ flex: 1, height: undefined, width: undefined }} 
                  resizeMode="contain"
                />
              </View >
            </Modal>
        </View>
    )
  }
}

export default ImageGrid