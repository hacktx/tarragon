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
export default class Slack extends Component<Props> {
	static navigationOptions = {
	    drawerLabel: 'Slack',
	    drawerIcon: ({ tintColor }) => (
	      <Image
	        source={require('./sidebar-icon.png')}
	        style={[styles.icon, {tintColor: tintColor}]}
	      />
	    ),
  };
	componentDidMount() {
		Linking.openURL(API.Slack, this._handleOpenURL);
		this.props.navigation.navigate('Home')
	}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Slack
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
