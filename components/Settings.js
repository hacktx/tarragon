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
        <Text style={styles.welcome}>
          Settings
        </Text>
		<Text>{"\n"}Change email:{"\n"}</Text>
		<TextInput
        style={{height: 40}}
        onChangeText={(email) => this.setState({email})}
        value={this.state.email}
      />
	  <Button
		  onPress={this.onSettingsSave}
		  title="Save Email"
		/>
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
