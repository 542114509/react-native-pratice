/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import CDialog from '../components/Dialog'
import CHeader from '../components/Header'
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
    super(props)
  }

  componentDidMount () {

  }

  handleChangeText = () => {
    this.props.dispatch(toggleDialog({ vis: true, text: '关闭弹窗' }))
  }

  render() {
    return (
      <View style={styles.container}>
        <CHeader />
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js1</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button title="点我弹窗" onPress={this.handleChangeText}></Button>
        <CDialog />
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
