/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import Store from './src/store/Store';
import Routes from './src/routes/Routes';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={Store}>
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </SafeAreaView>
      </Provider>
    );
  }
}

export default App;
