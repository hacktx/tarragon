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
import QRCode from 'react-native-qrcode-svg';
import Spinner from 'react-native-loading-spinner-overlay';



type Props = {};
export default class Checkin extends Component<Props> {
	static navigationOptions = {
	    drawerLabel: 'Check In',
	    drawerIcon: ({ tintColor }) => (
	      <Image
	        source={require('./sidebar-icon.png')}
	        style={[styles.icon, {tintColor: tintColor}]}
	      />
	  )
  };
  constructor(props){
      super(props)
      this.state = {
          email: "",
          visible: true
      }
  }
  componentWillMount(){
      this.setState({visible: true})
      AsyncStorage.getItem('email').then((value) =>
        {
            console.log(value)
            if(value === null || value === undefined){
                this.setState({email: "invalid_email"})
            }
            else{
                this.setState({email: value})
            }
            this.setState({visible: false})
        })
  }
  render() {
      let qrCode = null
      if(!this.state.visible){
          qrCode = <QRCode
            value={this.state.email}
          />
      }
    return (
      <View style={styles.container}>
      <Spinner visible={this.state.visible} textContent={"Loading..."} textStyle={{color: '#FFF'}}/>
        <Text style={styles.welcome}>
          Checkin
        </Text>
        {qrCode}
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
