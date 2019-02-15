/**
 * @author songjf
 * @time 2019 02 15
 * @name demo文件用于copy
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

@connect()
export default class App extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {

  }

  render() {
    return (
      <View>123</View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {

  },
});
