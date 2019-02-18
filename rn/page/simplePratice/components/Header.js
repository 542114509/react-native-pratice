/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { StyleSheet, Platform, Text, View, StatusBar } from 'react-native';
import { windowSize } from '../../../common/Util'

export default class Header extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    console.log(Platform)
  }

  render() {
    return <StatusBar
      style={styles.header}
      hidden={false}
      animated={true}
    ></StatusBar>
  }
}

const styles = StyleSheet.create({
  header: {
    width: windowSize.width,
    height: 160,
    // backgroundColor: '#bbb'
  }
});
