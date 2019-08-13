import React, { Component } from "react";
import {
  AppRegistry,
  View
} from 'react-native';
import { Container, Content, List, ListItem, Text, Thumbnail, Body, Title } from 'native-base';

export default class VideoList extends Component {
  static navigationOptions = {
    title: 'Jurus Tunggal Videos',
  };
  constructor(props) {
    super(props);
  }
  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    const items = [
            { "name" : "Jurus 1 (satu)", "desc": "Tangan Kosong (Empty Hand)", "url" : "https://s3.amazonaws.com/silatusa/Jurus1.mp4" },
            { "name" : "Jurus 2 (dua)", "desc": "Tangan Kosong (Empty Hand)", "url" : "https://s3.amazonaws.com/silatusa/Jurus2.mp4" },
            { "name" : "Jurus 3 (tiga)", "desc": "Tangan Kosong (Empty Hand)", "url" : "https://s3.amazonaws.com/silatusa/Jurus3.mp4" },
            { "name" : "Jurus 4 (empat)", "desc": "Tangan Kosong (Empty Hand)", "url" : "https://s3.amazonaws.com/silatusa/Jurus4.mp4" },
            { "name" : "Jurus 5 (lima)", "desc": "Tangan Kosong (Empty Hand)", "url" : "https://s3.amazonaws.com/silatusa/Jurus5.mp4" },
            { "name" : "Jurus 6 (enam)", "desc": "Tangan Kosong (Empty Hand)", "url" : "https://s3.amazonaws.com/silatusa/Jurus6.mp4" },
            { "name" : "Jurus 7 (tujuh) ", "desc": "Tangan Kosong (Empty Hand)", "url" : "https://s3.amazonaws.com/silatusa/Jurus7.mp4" },
            { "name" : "Jurus 8 (delapan)", "desc": "Golok", "url" : "https://s3.amazonaws.com/silatusa/Jurus8.mp4" },
            { "name" : "Jurus 9 (sembilan)", "desc": "Golok", "url" : "https://s3.amazonaws.com/silatusa/Jurus9.mp4" },
            { "name" : "Jurus 10 (sepuluh)", "desc": "Golok", "url" : "https://s3.amazonaws.com/silatusa/Jurus10.mp4" },
            { "name" : "Jurus 11 (sebelas)", "desc": "Toya", "url" : "https://s3.amazonaws.com/silatusa/Jurus11.mp4" },
            { "name" : "Jurus 12 (dua belas)", "desc": "Toya", "url" : "https://s3.amazonaws.com/silatusa/Jurus12.mp4" },
            { "name" : "Jurus 13 (tiga belas)", "desc": "Toya", "url" : "https://s3.amazonaws.com/silatusa/Jurus13.mp4" },
            { "name" : "Jurus 14 (empat belas)", "desc": "Toya", "url" : "https://s3.amazonaws.com/silatusa/Jurus14.mp4" },
          ]
    return (
      <Container>
        <Content>
          <List dataArray={items}
            renderRow={(item) =>
              <ListItem onPress={() => navigate("VideoPlayer", { jurusItem: item.name, desc: item.desc, url: item.url })}>
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
