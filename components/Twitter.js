/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Linking
} from 'react-native';
import API from '../config/config.json'


type Props = {};
export default class Twitter extends Component<Props> {
	static navigationOptions = {
	    drawerLabel: 'Twitter',
      title: 'Twitter'
  };
	componentDidMount() {
    var url = "https://twitter.com/" + API.Twitter
    Linking.openURL(url)
    this.props.navigation.navigate('Schedule')
	}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Twitter
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  icon: {
    width: 24,
    height: 24,
  }
});
