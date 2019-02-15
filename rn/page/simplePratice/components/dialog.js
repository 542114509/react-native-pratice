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
import { Platform, StyleSheet, Text, View, Button, Modal } from 'react-native';
import { toggleDialog } from '../store/action'

const mapStateToProps = state => {
  return {
    ...state.dialogConf
  }
}

@connect(mapStateToProps)
export default class Dialog extends React.Component {
  constructor (props) {
    super(props)
  }

  handleChangeText = () => {
    this.props.dispatch(toggleDialog({ vis: false, text: '关闭弹窗' }))
  }

  componentDidMount () {

  }

  render() {
    const { text, vis } = this.props
    return (
      <Modal
        style={styles.mask}
        animationType="fade"
        transparent={true}
        visible={vis}
        hardwareAccelerated={true}
        onRequestClose={this.handleChangeText}
      >
      <View style={styles.container}>
        <Text>{ text }</Text>
        <Button title="点我关闭" onPress={this.handleChangeText}></Button>
      </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  mask: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    // backgroundColor: 'gray'
  },
  container: {
    width: 200,
    height: 200,
    marginTop: 300,
    marginLeft: 'auto',
    marginRight: 'auto',
  }
});
