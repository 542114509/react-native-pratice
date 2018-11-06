import React, { Component } from 'react'
import {
	View,
	Text,
  Image,
  StyleSheet,
  ScrollView
} from 'react-native'
export default class Child extends Component {
	constructor(props) {
		super(props)
		this.state = {
			flag: false
    }
	}

	render() {
    const { name } = this.props
    return <View style={styles.child}>
      <ScrollView style={{ height: 200 }}>
        <Text style={{ height: 1000 }}>hello world {name}</Text>
      </ScrollView>
    </View>
  }
}

const styles = StyleSheet.create({
  child: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
