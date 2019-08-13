import React, { Component } from "react";
import {
  View
} from 'react-native';
import { Container, Content, List, ListItem, Text, Thumbnail, Body, Title } from 'native-base';
import teknik from "./../teknik3.json"

export default class SubPage1 extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.category,
  });
  _getCategories(){
    const teknikSub = teknik.techniques;
    const teknikSubArray = teknikSub.filter(asset => {
      return asset.category === this.props.navigation.state.params.category
    })
    return teknikSubArray
  //  return teknik.techniques[this.props.navigation.state.params.category]
  }
  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    return (
      <Container>
        <Content>
          <List dataArray={this._getCategories()}
            renderRow={(item) =>
              <ListItem onPress={() => navigate("SubPage2", { name: item.name, trans: item.trans, desc: item.desc, img1: item.img1, img2: item.img2, video: item.video, mistakes: item.mistakes})}>
              <Body>
                <Text>{item.name}</Text>
                <Text note>{item.trans}</Text>
              </Body>
              </ListItem>
            }>
          </List>
        </Content>
      </Container>

    );
  }
}
