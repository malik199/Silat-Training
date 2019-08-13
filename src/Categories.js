import React, { Component } from "react";
import {
  AppRegistry,
  View
} from 'react-native';
import { Container, Content, List, ListItem, Text, Thumbnail, Body, Title } from 'native-base';

export default class Categories extends Component {
  static navigationOptions = {
    title: 'Categories',
  };
  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    const items = [
            { "name" : "Kuda-Kuda", "desc" : "Stances", "img" : require('../img/kuda_kuda.png')},
            { "name" : "Pukulan", "desc" : "Blocks/Parrys", "img" : require('../img/pukulan.png')},
            { "name" : "Tangkisan", "desc" : "Blocks/Parrys", "img" : require('../img/tangkisan.png')},
            { "name" : "Langkah", "desc" : "Footwork", "img" : require('../img/langkah.png')},
            { "name" : "Tendangan", "desc" : "Kicks", "img" : require('../img/tendangan.png')},
            { "name" : "Sikuan", "desc" : "Elbow Strike", "img" : require('../img/sikuan.png')},
            { "name" : "Sikap", "desc" : "Poses", "img" : require('../img/sikap.png')},
            { "name" : "Tangkapan", "desc" : "Catching", "img" : require('../img/tangkapan.png')},
            { "name" : "Jurus", "desc" : "Forms", "img" : require('../img/jurus.png')},
            { "name" : "Other", "desc" : "More Techniques", "img" : require('../img/other.png')}
          ]
    return (
      <Container>
        <Content>
          <List dataArray={items}
            renderRow={(item) =>
              <ListItem onPress={() => navigate("SubPage1", { category: item.name })}>
              <Thumbnail square size={80}  source={item.img}  />
              <Body>
                <Text>{item.name}</Text>
                <Text note>{item.desc}</Text>
              </Body>
              </ListItem>
            }>
          </List>
        </Content>
      </Container>
    );
  }
}
