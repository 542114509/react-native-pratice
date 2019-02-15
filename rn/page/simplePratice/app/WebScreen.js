/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { StyleSheet, WebView } from 'react-native';
import CWebview from '../components/Webview'
import { windowSize } from '../../../common/Util'

export default class WebScreen extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
    
    }
  }

  componentDidMount () {
    
  }

  handleChangeText = () => {
    
  }

  render() {
    const { webview, navigation } = this.props
    return <CWebview navigation={navigation} url={navigation.state.params.url}/>
  }
}
