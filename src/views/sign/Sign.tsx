import React, { useState } from 'react';
import { ActivityIndicator, ImageBackground, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import WebView from 'react-native-webview';
import backGround from '../../assets/imgs/background2.jpg';
import SvgImageView from 'react-native-svg-img';


const ActivityIndicatorElement = () => {
  return (
    <View style={styles.activityIndicatorStyle}>
      <ActivityIndicator color="#009688" size="large" />
    </View>
  );
};

const Sign = () => {
  const { background, button, __text_button, text_dono, text_copy, container_tittle, _title_path_one, _title_path_two } = styles;
  const [showWebViewstate, setShowWebViewstate] = useState(false)
  const [visible, setVisible] = useState(false);

  const handleGotWebView = () => {
    setShowWebViewstate(true);
  }

  return (
    <>
      { showWebViewstate
        ?
        <>
          <WebView
            source={{ uri: 'https://www.donedealsports.com' }}
            onLoadStart={() => setVisible(true)}
            onLoad={() => setVisible(false)}
          />
          {visible ? <ActivityIndicatorElement /> : null}
        </>
        :
        <ImageBackground style={background} source={backGround}>
          <Text style={text_dono}>Donedeal sports</Text>

          <SvgImageView
            width={200}
            height={200}
            source={require('../../assets/imgs/logo.svg')}
          />
          <View style={container_tittle}>
            <Text style={_title_path_one}>DONEDEAL</Text>
            <Text style={_title_path_two}>SPORTS</Text>
          </View>

          <TouchableHighlight style={button} onPress={handleGotWebView} >
            <Text style={__text_button}>Ingresar</Text>
          </TouchableHighlight>

          <Text style={text_copy}>Copyright (c) 2020</Text>
        </ImageBackground>
      }
    </>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain'
  },
  text_dono: {
    color: '#fff',
    fontSize: 12,
    position: 'absolute',
    top: 80,
    right: -20,
    transform: [
      { rotate: '-90deg' },
    ],
  },
  container_tittle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  _title_path_one: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'normal',
  },
  _title_path_two: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10
  },
  button: {
    backgroundColor: '#00a69c',
    borderRadius: 30,
    alignItems: 'center',
    padding: 10,
    position: 'relative',
    top: 80,
    width: '50%',
  },
  __text_button: {
    color: '#fff'
  },
  text_copy: {
    color: '#fff',
    fontWeight: 'bold',
    position: 'absolute',
    right: 20,
    bottom: 16
  },
  activityIndicatorStyle: {
    flex: 1,
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
});

export default Sign;
