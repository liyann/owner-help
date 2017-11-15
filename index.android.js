import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet } from 'react-native';
import RootTabs from './RootTabs'
class JustifyContentBasics extends Component {
  render() {
    return (
      <RootTabs />
    )
  }

};

const style = StyleSheet.create({
  size: {
    width: 50,
    height: 50,
  },
  box1: {
    backgroundColor: 'powderblue'
  },
  box2: {
    backgroundColor: 'skyblue'
  },
  box3: {
    backgroundColor: 'steelblue'
  }
})
AppRegistry.registerComponent('AwesomeProject', () => JustifyContentBasics);