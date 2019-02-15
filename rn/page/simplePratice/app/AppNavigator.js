import React from 'react'
import { createStackNavigator } from 'react-navigation'
import WebScreen from './WebScreen'
import Home from './Home'

export const AppNavigator = createStackNavigator(
  {
    home: {
      screen: ({ navigation }) => <Home navigation={navigation} />,
      navigationOptions: ({ navigation }) => ({
        header: null
      }),
    },
    web: {
      screen: ({ navigation }) => <WebScreen navigation={navigation} />,
      navigationOptions: ({ navigation }) => ({
        title: navigation.state.params ? navigation.state.params.title : '',
      }),
    }
  },
  {
    initialRouteName: 'home',
    navigationOptions: {
      gesturesEnabled: true,
      gestureResponseDistance: { horizontal: 25 }
    }
  }
)
