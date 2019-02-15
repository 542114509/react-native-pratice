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
import CWebview from '../components/Webview'
import { toggleDialog } from '../store/action'
import { windowSize } from '../../../common/Util'

const mapStateToProps = state => {
  return {
    ...state.webview
  }
}

@connect(mapStateToProps)
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
    return <CWebview navigation={navigation} url={webview.url}/>
  }
}

const styles = StyleSheet.create({
  
});
