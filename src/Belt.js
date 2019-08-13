import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';
import { Button } from 'native-base';

export default class Belt extends Component {
  render() {
    if(this.props.satriamuda){
      return (
        <Button full transparent onPress={() => this.props.navigate.navigate("s1_BeltLevels", { level: this.props.level }) }>
        <View style={styles.outerBelt}>
            <Text style={[styles.innerBelt, styles[this.props.color]]}></Text>
            <Text style={(this.props.stripe1) ? styles["stripe1"] : '' }></Text>
            <Text style={(this.props.stripe2) ? styles["stripe2"] : '' }></Text>
        </View>
        </Button>
      );
    }else{
      return (
        <Button full transparent onPress={() => this.props.navigate.navigate("j1_BeltLevels", { level: this.props.level }) }>
        <View style={[styles.outerBelt, styles[this.props.color]]}>
            <Text style={(this.props.stripe1) ? styles["stripe1"] : '' }></Text>
            <Text style={(this.props.stripe2) ? styles["stripe2"] : '' }></Text>
        </View>
        </Button>
      );
    }
  }
}

const styles = StyleSheet.create({
  outerBelt: {
    borderWidth: 1,
    borderColor: 'black',
    flex: 1,
    flexDirection: 'row',
    height: 30,
    marginBottom:10,
    backgroundColor: 'white',
    shadowOpacity:.2,
    shadowOffset: {width:2,height:2}
  },
  innerBelt: {
    height: 10,
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
    flexDirection: 'row',
    position: 'relative'
  },
  stripe1: {
    backgroundColor: "black",
    width: 10,
    height: 28,
    position: 'absolute',
    right:10,
    top:0,
  },
  stripe2: {
    backgroundColor: "black",
    width: 10,
    height: 28,
    position: 'absolute',
    right:25,
    top:0,
  },
  white: {
    backgroundColor: 'white'
  },
  yellow: {
    backgroundColor: '#d8b202'
  },
  green: {
    backgroundColor: 'green'
  },
  blue: {
    backgroundColor: '#0259a8'
  },
  purple: {
    backgroundColor: 'purple'
  },
  brown: {
    backgroundColor: '#602f21'
  },
});
