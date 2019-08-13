import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';
import {
  Body,
  Container,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Thumbnail
} from "native-base";
import { Video } from 'expo';

export default class VideoList extends Component {
render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    const { width, height } = Dimensions.get('window');
    return (
      <Container>
       <Header><Text style={styles.topText}>{params.jurusItem}</Text></Header>
        <Content>
        <Text style={styles.lowerText}>{params.desc}</Text>
          <Video
            source={{ uri: params.url }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            shouldPlay
            useNativeControls
            resizeMode="contain"
            style={{ width, height: 400 }}
          />
        </Content>
    </Container>
    );
  }
}
const styles = StyleSheet.create({
  topText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
  },
  lowerText: {
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center'
  }
});
