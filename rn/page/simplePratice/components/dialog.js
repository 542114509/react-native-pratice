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
import { toggleDialog } from '../store/action'

const mapStateToProps = state => {
  return {
    ...state.app.dialogConf
  }
}

@connect(mapStateToProps)
export default class Dialog extends React.Component {
  constructor (props) {
    super(props)
  }

  handleChangeText = () => {
    this.props.dispatch(toggleDialog({ vis: false, text: '点击了' }))
  }

  componentDidMount () {

  }

  render() {
    const { text } = this.props
    return (
      <View style={styles.container}>
        <Text>{ text }</Text>
        <Button title="点我" onPress={this.handleChangeText}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    backgroundColor: '#ccc'
  }
});
