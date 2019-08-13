import React, { Component } from "react";
import {
  View
} from 'react-native';
import { Container, Content, List, ListItem, Text, Thumbnail, Body, Title } from 'native-base';
import curriculum from "./../curriculum.json"

export default class s1_BeltLevels extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "BELT: "+navigation.state.params.level.replace("_S", " Stripe ").toUpperCase()
  });

  render() {
    const result = []
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    return (
      <Container>
        <Content>
          <List dataArray={curriculum.SatriaMuda[params.level]}
            renderRow={(item,i,b) =>
              <ListItem onPress={() => navigate("s2_BeltLevels", { item: item })}>
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
