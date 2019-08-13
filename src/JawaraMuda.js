import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, TouchableHighlight } from 'react-native';
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
import Belt from "./Belt.js"

export default class JawaraMuda extends Component {
render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
       <Header><Text style={styles.topText}>Jawara Muda Curriculum</Text>
       </Header>
        <Content padder>
          <Belt color="white" navigate={ this.props.navigation } level="white"/>
          <Belt color="white" stripe1 navigate={ this.props.navigation } level="white_S1"/>
          <Belt color="white" stripe1 stripe2 navigate={ this.props.navigation } level="white_S2"/>
          <Belt color="yellow" navigate={ this.props.navigation } level="yellow"/>
          <Belt color="yellow" stripe1 navigate={ this.props.navigation } level="yellow_S1"/>
          <Belt color="yellow" stripe1 stripe2 navigate={ this.props.navigation } level="yellow_S2"/>
          <Belt color="green" navigate={ this.props.navigation } level="green"/>
          <Belt color="green" stripe1 navigate={ this.props.navigation } level="green_S1"/>
          <Belt color="green" stripe1 stripe2 navigate={ this.props.navigation } level="green_S2"/>
          <Belt color="blue" navigate={ this.props.navigation } level="blue"/>
          <Belt color="blue" stripe1 navigate={ this.props.navigation } level="blue_S1"/>
          <Belt color="blue" stripe1 stripe2 navigate={ this.props.navigation } level="blue_S2"/>
          <Belt color="purple" navigate={ this.props.navigation } level="purple"/>
          <Belt color="purple" stripe1 navigate={ this.props.navigation } level="purple_S1"/>
          <Belt color="purple" stripe1 stripe2 navigate={ this.props.navigation } level="purple_S2"/>
          <Belt color="brown" navigate={ this.props.navigation } level="brown"/>
          <Belt color="brown" stripe1 navigate={ this.props.navigation } level="brown_S1"/>
          <Belt color="brown" stripe1 stripe2 navigate={ this.props.navigation } level="brown_S2"/>
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
  }
});
