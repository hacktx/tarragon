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
import { showLocation } from 'react-native-map-link'


type Props = {};
export default class Map extends Component<Props> {
	static navigationOptions = {
	    drawerLabel: 'Venue',
      title: 'Venue'
  };
	componentDidMount() {
    var url = "http://maps.google.com/maps?z=32&q=loc:" + API.Maps.Latitude + "," + API.Maps.Longitude
    Linking.openURL(url)
    this.props.navigation.navigate('Schedule')
	}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Maps
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
