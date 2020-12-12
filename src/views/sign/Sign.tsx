import React, { useState } from 'react';
import { ActivityIndicator, Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import WebView from 'react-native-webview';

const ActivityIndicatorElement = () => {
  return (
    <View style={styles.activityIndicatorStyle}>
      <ActivityIndicator color="#009688" size="large" />
    </View>
  );
};

const Sign = () => {
  const { background, button, __text_button, text_dono, text_copy } = styles;
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
          <SafeAreaView style={{ flex: 0, backgroundColor: '#111111' }} />
          <SafeAreaView style={{ flex: 1, backgroundColor: '#f4f4f4' }}>
            <WebView
              source={{ uri: 'https://www.donedealsports.com' }}
              onLoadStart={() => setVisible(true)}
              onLoad={() => setVisible(false)}
            />
            {visible ? <ActivityIndicatorElement /> : null}
          </SafeAreaView>
        </>
        :
        <ImageBackground style={background} source={require('../../assets/imgs/background2.jpg')}>
          <Text style={text_dono}>Donedeal sports</Text>
          <Image width={200}
            height={200}
            source={require('../../assets/imgs/logo.png')} />
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
