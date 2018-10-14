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
      title: 'Check In'
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
            size={200}
          />
      }
    return (
      <View style={styles.container}>
      <Spinner visible={this.state.visible} textContent={"Loading..."} textStyle={{color: '#FFF'}}/>
        <Text style={styles.welcome}>
          Show this QR code to get checked into HackTX. It relies on the email you signed up to HackTX with. This email can be changed at any time in the Settings panel.
        </Text>
        {qrCode}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
    color:'#203E5B',
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
