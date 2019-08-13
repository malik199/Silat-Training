import React, { Component } from "react";
import { AppRegistry, View, StatusBar, StyleSheet, Image, Dimensions } from "react-native";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Thumbnail
} from "native-base";
import Expo from "expo";

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Pencak Silat Training',
  };
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }
  render() {
    const { navigate } = this.props.navigation;
      if (!this.state.isReady) {
        return (<Expo.AppLoading />)
      } else {
        return (
        <Container>
          <Content padder>
            <View style={styles.header}>
              <Image source={require('../img/app-image.png')} style={styles.imageStyle} />
            </View>
            <View style={styles.main}>
              <Button
                full
                rounded
                primary
                iconLeft
                style={{ marginTop: 10 }}
                onPress={() => navigate('Categories')}
              >
              {/*<Thumbnail square size={10}  source={require('../img/langkah.png')}  />*/}
                <Text>All Techniques</Text>
              </Button>
              <Button
                full
                rounded
                primary
                style={{ marginTop: 10 }}
                onPress={() => navigate('JawaraMuda')}
              >
                <Text>Jawara Muda Curriculum</Text>
              </Button>
              <Button
                full
                rounded
                primary
                style={{ marginTop: 10 }}
                onPress={() => navigate('SatriaMuda')}
              >
                <Text>Satria Muda Curriculum</Text>
              </Button>
              <Button
                full
                rounded
                primary
                style={{ marginTop: 10 }}
                onPress={() => navigate('VideoList')}
              >
                <Text>Jurus Tunggal Video</Text>
              </Button>
            </View>

          </Content>
          <View style={styles.footer}>
            <Image source={require('../img/USF.png')} style={styles.logo} />
            <Text style={styles.smalltext}>The USA Pencak Silat Federation (USF) is officially recognized by Persekutuan Pencak Silat Antarabangsa (Persilat), the international governing body of Pencak Silat. USF is a non-profit organization dedicated to the promotion and understanding of Pencak Silat.
            </Text>
            <Image source={require('../img/Persilat.png')} style={styles.logo} />
          </View>
        </Container>)
      }
  }
}
const styles = StyleSheet.create({
  content: {
    flex: 3,
    flexDirection: "column",
    justifyContent: 'space-between'
  },
  header: {
    flex: 1,
    flexDirection: "row",
    height: 200
  },
  main: {
    marginBottom:30,
    marginTop: 30
  },
  imageStyle: {
    height:200,
    marginBottom: 10,
    resizeMode: "contain",
    justifyContent: 'flex-end',
    flex: 1
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
    height: 80,
    backgroundColor: 'skyblue',
    padding: 10
  },
  logo: {
    height:60,
    width:60,
    resizeMode: "contain",
  },
  smalltext: {
    fontSize: 8,
    width: 200,
    height: 60,
  }
});
