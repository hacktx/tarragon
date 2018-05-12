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
  AsyncStorage
} from 'react-native';
import Modal from "react-native-modal";
import Spinner from 'react-native-loading-spinner-overlay';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class HomeScreen extends Component<Props> {
	static navigationOptions = {
	    drawerLabel: 'Home',
	    drawerIcon: ({ tintColor }) => (
	      <Image
	        source={require('./sidebar-icon.png')}
	        style={[styles.icon, {tintColor: tintColor}]}
	      />
	    ),
  };
  constructor(props){
      super(props)
      this.state = {
          visible: false,
          showModal: false,
      }
  }
  componentWillMount(){
      this.setState({visible: true})
      AsyncStorage.getItem('firsttime').then((value) =>
        {
            if(value === null || value === undefined){
                this.setState({showModal: true})
            }
            else{
                this.setState({showModal: false})
            }
            this.setState({visible: false})
        })
  }
  render() {
    return (
      <View style={styles.container}>
      <Spinner visible={this.state.visible} textContent={"Loading..."} textStyle={{color: '#FFF'}}/>
      <Modal isVisible={this.state.showModal}>
        <View style={{ flex: 1 }}>
          <Text>{this.state.modalContent}</Text>
        </View>
      </Modal>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
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
