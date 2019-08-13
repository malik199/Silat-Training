import React, { Component } from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import teknik3 from "./../teknik3.json"

export default class s2_BeltLevels extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.item
  })
  constructor(props) {
    super(props);
    var defaultImage = require('../pics/404.png');
    this.imageNotFound()
  }

  imageNotFound(){
    var imageObj = this.props.navigation.state.params.item;
    if(silatimgs[imageObj]){
      defaultImage = silatimgs[imageObj].img
    } else {
      defaultImage = require('../pics/404.png')
    }
  }
  render() {
    const theitem = this.props.navigation.state.params.item
    const nodata = {
       "name": theitem,
       "trans":"No translation",
       "desc":"Sorry we don't have a description for this particular move."
    }
    var teknikSubArray = teknik3.techniques.filter(asset => {
      return asset.name === this.props.navigation.state.params.item
    })
    if(teknikSubArray.length === 0){
      teknikSubArray[0] = nodata
    }
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    return (
      <Container>
        <Content>
          <Card style={{flex: 1}}>
            <CardItem>
              <Left>
                <Body>
                  <Text style={styles.bigblue}>{ teknikSubArray[0].name }</Text>
                  <Text note>{ teknikSubArray[0].trans }</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body style={styles.container}>
                <Image source={defaultImage} style={styles.mainImage} />
                <Text>
                  { teknikSubArray[0].desc }
                </Text>
              </Body>
            </CardItem>
            <CardItem>
          {/*<Button
              iconLeft
              full
              rounded
              primary
              onPress={() => navigate('Categories')}
            ><Icon name='play' />
              <Text>Watch Video</Text>
            </Button>*/}
            </CardItem>
          </Card>
        </Content>
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: '#436384',
    fontWeight: 'bold',
    fontSize: 30,
  },
  mainImage: {
    height: Dimensions.get("window").width-38,
    width: Dimensions.get("window").width-38,
    flex: 1,
    resizeMode: "stretch",
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: "center"
  },
  container: {
    flex:1,
    flexDirection: "column",
    overflow: "hidden",
  }
});

const silatimgs = {
  "Harimau Mengintai" : {"videoUrl" : "yyyyyyyyyyyy", "img" : require('../pics/harimau_mengintai2.png')},
  "Harimau Mengintai2" : {"videoUrl" : "yyyyyyyyyyyy", "img" : require('../pics/harimau_mengintai.png')},
  "Tolakan Kuntul Melutut" : {"videoUrl" : "yyyyyyyyyyyy", "img" : require('../pics/tolakan_kuntul_melutut.png')},
  "Pukulan Kuntul Melutut" : {"videoUrl" : "yyyyyyyyyyyy", "img" : require('../pics/pukulan_kuntul_melutut.png')},
  "Sikap Kuntul Melutut" : {"videoUrl" : "yyyyyyyyyyyy", "img" : require('../pics/sikap_kuntul_melutut.png')},
  "Sikuan Atas" : {"videoUrl" : "yyyyyyyyyyyy", "img" : require('../pics/sikuan_atas.png')},
  "Dengkulan Depan" : {"videoUrl" : "yyyyyyyyyyyy", "img" : require('../pics/dengkulan_depan.png')},
  "Sapuan Tegak" : {"videoUrl" : "yyyyyyyyyyyy", "img" : require('../pics/sapuan_tegak.png')},
  "Tarikan Harimau" : {"videoUrl" : "yyyyyyyyyyyy", "img" : require('../pics/tarikan_harimau.png')},
  "Sikap Harimau" : {"videoUrl" : "yyyyyyyyyyyy", "img" : require('../pics/sikap_harimau.png')},
  "Tendangan Teratai" : {"videoUrl" : "yyyyyyyyyyyy", "img" : require('../pics/tendangan_teratai.png')},
  "Te Belakang" : {"videoUrl" : "yyyyyyyyyyyy", "img" : require('../pics/te_belakang.png')},
  "Empisan" : {"videoUrl" : "yyyyyyyyyyyy", "img" : require('../pics/empisan.png')},
  "Tabrakan" : {"videoUrl" : "yyyyyyyyyyyy", "img" : require('../pics/tabrakan.png')},
  "Tusukan" : {"videoUrl" : "yyyyyyyyyyyy", "img" : require('../pics/tusukan.png')},
  "Kilat Te" : {"videoUrl" : "yyyyyyyyyyyy", "img" : require('../pics/kilat_te.png')},
  "Sikap Minang" : {"videoUrl" : "yyyyyyyyyyyy", "img" : require('../pics/sikap_minang.png')},
  "Tebangan" : {"videoUrl" : "yyyyyyyyyyyy", "img" : require('../pics/tebangan.png')},
  "Tendangan Te" : {"videoUrl" : "yyyyyyyyyyyy", "img" : require('../pics/tendangan_te.png')},
  "Gejuk" : {"videoUrl" : "yyyyyyyyyyyy", "img" : require('../pics/gejuk.png')},
  "Langkah Angkat Samping" : {"videoUrl" : "yyyyyyyyyyyy", "img" : require('../pics/langkah_angkat_samping.png')},
  "Langkah Angkat Depan" : {"videoUrl" : "yyyyyyyyyyyy", "img" : require('../pics/langkah_angkat.png')},
  "Langkah Lompat Mundur" : {"videoUrl" : "yyyyyyyyyyyy", "img" : require('../pics/langkah_lompat_mundur.png')},
  "Langkah Lompat" : {"videoUrl" : "yyyyyyyyyyyy", "img" : require('../pics/langkah_lompat.png')},
  "Langkah Silang Belakang" : {"videoUrl" : "yyyyyyyyyyyy", "img" : require('../pics/langkah_silang_belakang.png')},
  "Langkah Silat Depan" : {"videoUrl" : "yyyyyyyyyyyy", "img" : require('../pics/langkah_silang_depan.png')},
  "Langkah Samping" : {"videoUrl" : "yyyyyyyyyyyy", "img" : require('../pics/langkah_samping.png')},
  "Langkah Serong" : {"videoUrl" : "yyyyyyyyyyyy", "img" : require('../pics/langkah_serong.png')},
  "Langkah Lutut" : {"videoUrl" : "yyyyyyyyyyyy", "img" : require('../pics/langkah_lutut.png')},
  "Tendangan Sabit" : {"videoUrl" : "yyyyyyyyyyyy", "img" : require('../pics/tendangan_sabit.png')},
  "Tendangan Depan" : {"videoUrl" : "yyyyyyyyyyyy", "img" : require('../pics/tendangan_depan.png')},
  "Sikuan Luar" : {"videoUrl" : "yyyyyyyyyyyy", "img" : require('../pics/sikuan-luar.png')},
  "Pukul Silang" : {"videoUrl" : "yyyyyyyyyyyy", "img" : require('../pics/pukul_silang.png')},
  "Pukulan Sangkol" : {"videoUrl" : "yyyyyyyyyyyy", "img" : require('../pics/pukulan_sangkol.png')},
  "Pukulan Kuntul" : {"videoUrl" : "yyyyyyyyyyyy", "img" : require('../pics/pukulan_kuntul.png')},
  "Cengkeraman Gorila" : {"videoUrl" : "yyyyyyyyyyyy", "img" : require('../pics/cengkeraman_gorila.png')},
  "Pukulan Melingkar" : {"videoUrl" : "yyyyyyyyyyyy", "img" : require('../pics/pukulan_melingkar.png')},
  "Pukulan Satria" : {"videoUrl" : "yyyyyyyyyyyy", "img" : require('../pics/pukul_satria.png')},
  "Sikap Satria" : {"videoUrl" : "yyyyyyyyyyyy", "img" : require('../pics/sikap_satria.png')},
  "Guntingan Bawa" : {"videoUrl" : "yyyyyyyyyyyy", "img" : require('../pics/guntingan_atas.png')},
  "Guntingan Atas" : {"videoUrl" : "yyyyyyyyyyyy", "img" : require('../pics/guntingan_bawa.png')},
  "Tangkisan Kedalam" : {"videoUrl" : "yyyyyyyyyyyy", "img" : require('../pics/tangkisan_kedalam.png')},
  "Tangkisan Atas" : {"videoUrl" : "yyyyyyyyyyyy", "img" : require('../pics/tangkisan_atas.png')},
  "Tangkisan Bawah" : {"videoUrl" : "yyyyyyyyyyyy", "img" : require('../pics/tangkisan_bawah.png')},
  "Tangkisan Dalam" : {"videoUrl" : "yyyyyyyyyyyy", "img" : require('../pics/tangkisan_dalam.png')},
  "Tangkisan Luar" : {"videoUrl" : "yyyyyyyyyyyy", "img" : require('../pics/tangkisan_luar.png')},
  "Kuda Samping" : {"videoUrl" : "yyyyyyyyyyyy", "img" : require('../pics/kuda_samping.png')},
  "Kuda Tengah" : {"videoUrl" : "yyyyyyyyyyyy", "img" : require('../pics/kuda_tengah.png')},
  "Kuda Depan" : {"videoUrl" : "yyyyyyyyyyyy", "img" : require('../pics/kuda_depan.png')}
};
