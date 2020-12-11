
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import Sign from './src/views/sign/Sign';

const App = () => {

  useEffect(() => {
    SplashScreen.hide()
  }, []);


  return (
    <Sign/>
  );
};

export default App;
