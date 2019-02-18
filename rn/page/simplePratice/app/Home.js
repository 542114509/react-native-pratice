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
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import Cbanner from './banner'
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

  handleChangeText = (type, url) => {
    this.props.navigation.navigate(type, { url })
  }

  render() {
    return (
      <ScrollView>
        <Text style={styles.instructions}>我是主页</Text>
        <Cbanner onSkip={this.handleChangeText} />
      </ScrollView>
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
    marginBottom: 45,
    marginTop: 45,
  },
});
