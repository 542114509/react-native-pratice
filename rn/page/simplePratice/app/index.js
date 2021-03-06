/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Platform, StyleSheet, Text, View, Button, WebView } from 'react-native';
import CDialog from '../components/Dialog'
import CHeader from '../components/Header'
import CWebview from '../components/Webview'
import { AppNavigator } from './AppNavigator'
import { toggleDialog } from '../store/action'
import { windowSize } from '../../../common/Util'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
@connect()
export default class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      webViewOpenStatus: false
    }
  }

  componentDidMount () {

  }

  handleChangeText = () => {

  }

  render() {
    return (
      <View style={styles.container}>
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: windowSize.height,
    width: windowSize.width,
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
