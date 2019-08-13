import React, { Component } from "react";
import {
  View
} from 'react-native';
import { Container, Content, List, ListItem, Text, Thumbnail, Body, Title } from 'native-base';
import curriculum from "./../curriculum.json"

export default class j1_BeltLevels extends Component {
  /*static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.category,
  });*/

  render() {
    const result = []
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    return (
      <Container>
        <Content>
          <List dataArray={curriculum.JawaraMuda[params.level]}
            renderRow={(item,i,b) =>
              <ListItem onPress={() => navigate("j2_BeltLevels", { item: item })}>
              <Body>
                <Text>{item}</Text>
              </Body>
              </ListItem>
            }>
          </List>
        </Content>
      </Container>

    );
  }
}
