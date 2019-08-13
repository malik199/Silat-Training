import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Card, CardItem } from "native-base";
import { StackNavigator } from 'react-navigation';
import HomeScreen from "./src/HomeScreen.js";
import Categories from "./src/Categories.js";
import SubPage1 from "./src/SubPage1.js";
import SubPage2 from "./src/SubPage2.js";
import Belt from "./src/Belt.js";
import VideoList from "./src/VideoList.js";
import VideoPlayer from "./src/VideoPlayer.js";

import SatriaMuda from "./src/SatriaMuda.js";
import s1_BeltLevels from "./src/s1_BeltLevels.js";
import s2_BeltLevels from "./src/s2_BeltLevels.js";
import JawaraMuda from "./src/JawaraMuda.js";
import j1_BeltLevels from "./src/j1_BeltLevels.js";
import j2_BeltLevels from "./src/j2_BeltLevels.js";

const MyScreen = StackNavigator({
  Home: { screen: HomeScreen },
  Categories: { screen: Categories },
  SubPage1: { screen: SubPage1 },
  SubPage2: { screen: SubPage2 },
  SatriaMuda: { screen: SatriaMuda },
  s1_BeltLevels: { screen: s1_BeltLevels },
  s2_BeltLevels: { screen: s2_BeltLevels },
  JawaraMuda: { screen: JawaraMuda },
  j1_BeltLevels: { screen: j1_BeltLevels },
  j2_BeltLevels: { screen: j2_BeltLevels },
  Belt: {screen: Belt},
  VideoList: {screen: VideoList},
  VideoPlayer: {screen: VideoPlayer}
},{
  cardStyle: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  }
});

export default MyScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
