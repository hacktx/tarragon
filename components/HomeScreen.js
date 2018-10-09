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
  TouchableOpacity,
  TextInput,
  Linking
} from 'react-native';
import Modal from "react-native-modal";
import Spinner from 'react-native-loading-spinner-overlay';
import Toast from 'react-native-simple-toast';
import API from '../config/config.json'



export default class HomeScreen extends Component{
	static navigationOptions = {
	    drawerLabel: 'Schedule',
      title: 'Schedule',
  };
  constructor(props){
      super(props)
      this.state = {
          visible: false,
          showModal: false,
          modalState: true,
          input_email: "",
          modalReady: false,
          time: "asdjsad"
      }
      this._goNext = this._goNext.bind(this);
  }
  componentWillMount(){
      this.setState({visible: true, modalReady: false, modalState: true}, () =>{
        AsyncStorage.getItem('firsttime').then((value) =>
          {
              console.log(value)
              if(value === null || value === undefined){
                  this.setState({showModal: true})
              }
              else{
                  this.setState({showModal: false})
              }
              this.setState({visible: false, modalReady: true})
              AsyncStorage.setItem('firsttime', 'plssave')
          })
      })
  }
  _goNext(){
    if(this.state.input_email == undefined || this.state.input_email.includes("@") == false){
      Toast.show('Invalid email.');
    }
    else{
      this.setState({modalState: false, visible: true}, ()=>{
        console.log(this.state.input_email)
        AsyncStorage.setItem('email', this.state.input_email, ()=>{
    		  Toast.show('Email successfully saved.');
          console.log(this.state.input_email)
          this.setState({visible: false})
    	  })
      })
    }


  }

  render() {
    let modal = null
    if (this.state.showModal === true && this.state.modalReady === true){
      //Modal state = true indicates screen 1
      if (this.state.modalState === true){
        modal = <Modal isVisible={this.state.showModal}>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
          <View style={{padding:70, backgroundColor: 'white'}}>
            <Text style={{textAlign: "center", fontSize: 20}}>Welcome to HackTX</Text>
            <Text style={{fontSize: 30}}>{"\n"}</Text>
            <Text style={{textAlign: "center"}}>Let&#39;s get started.</Text>
            <Text style={{textAlign: "center"}}>What&#39;s your email (Please use the email you signed up for HackTX with)?</Text>
            <TextInput
              style={{height: 40}}
              onChangeText={(input_email) => this.setState({input_email})}
              value={this.state.input_email}
            />
            <Button
            onPress={this._goNext}
            title="Next"
          />
          <Text style={{fontSize: 15}}>{"\n"}</Text>
          <Text style={{textAlign: "center"}} onPress={() => this.setState({modalState: false})}>Skip</Text>
          </View>
          </View>
        </Modal>
      }
      else{
        modal = modal = <Modal isVisible={this.state.showModal}>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
          <View style={{padding:70, backgroundColor: 'white'}}>
            <Text style={{textAlign: "center", fontSize: 20}}>Join the HackTX 2018 Attendees Slack Channel</Text>
            <Text style={{textAlign: "center"}}>{"\n"}Join the channel for important updates!</Text>
            <Text style={{fontSize: 10}}>{"\n"}</Text>
            <Button
            onPress={()=> {Linking.openURL(API.Slack); this.setState({showModal: false})}}
            title="Join Slack"
          />
          <Text style={{fontSize: 10}}>{"\n"}</Text>
          <Text style={{textAlign: "center"}} onPress={()=> this.setState({showModal: false})}>Not right now</Text>
          </View>
          </View>
        </Modal>
      }
    }

    let schedule = null;


    return (
      <View style={styles.container}>
      {modal}
      {schedule}
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
