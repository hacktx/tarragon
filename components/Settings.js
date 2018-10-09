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
  AsyncStorage,
  TextInput
} from 'react-native';
import Toast from 'react-native-simple-toast';
import Spinner from 'react-native-loading-spinner-overlay';

type Props = {};
export default class Settings extends Component<Props> {
	static navigationOptions = {
	    drawerLabel: 'Settings',
      title: 'Settings'
  };
  constructor(props){
	  super(props)
	  this.state = {
		  email: "",
		  visible: true
	  }
	  this.onSettingsSave = this.onSettingsSave.bind(this)
  }
  componentWillMount(){
	  this.setState({visible: true})
    AsyncStorage.getItem('email').then((value) =>
      {
          console.log(value)
          if(value === null || value === undefined){
              this.setState({email: ""})
          }
          else{
              this.setState({email: value})
          }
          this.setState({visible: false})
      })
  }
  onSettingsSave(){
	  this.setState({visible: true})
	  AsyncStorage.setItem('email', this.state.email, ()=>{
		  Toast.show('Email successfully saved.');
		  this.setState({visible: false})
	  })
  }

  render() {
    return (
      <View style={styles.container}>
	  <Spinner visible={this.state.visible} textContent={"Loading..."} textStyle={{color: '#FFF'}}/>
		<Text style={styles.changeText}>{"\n"}Change email:{"\n"}</Text>
    <Text style={styles.infoText}>This email will be used to generate the QR code for check in. This information is only stored on your device.</Text>
		<TextInput
        style={{height: 40}}
        onChangeText={(email) => this.setState({email})}
        value={this.state.email}
      />
	  <Button
    color='#7BA9F9'
		  onPress={this.onSettingsSave}
		  title="Save Email"
		/>
    <View style={styles.container2}>
    <Text style={styles.licenses}>About</Text>
    <Text style={styles.infoText}>Tarragon v1.0.0</Text>


    </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  container2: {
    marginTop: 30,
    alignItems: 'center',
    backgroundColor: 'white',
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
  },
  changeText: {
    fontSize: 18,
    color: 'black',
    marginBottom: 10
  },
  infoText: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    color: '#FF4115',
    textAlign: 'center'
  },
  licenses: {
    fontSize: 18,
    marginTop: 30,
    marginBottom: 20,
    color: 'black',
    textAlign: 'center'
  }
});
