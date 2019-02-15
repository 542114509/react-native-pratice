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
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { windowSize } from '../../../common/Util'

@connect()
export default class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
     
    }
  }

  componentDidMount () {

  }

  handleChangeText = () => {
    this.props.navigation.navigate('web')
  }

  render() {
    console.log(this.props)
    return (
      <View>
        <Text>我是主页</Text>
        <Button title="点我切换到webview" onPress={this.handleChangeText}></Button>
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
