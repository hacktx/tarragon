import React, { Component } from 'react';
import { AppRegistry, Text, View, Image } from 'react-native';
import {
  StackNavigator,
  DrawerNavigator,
  DrawerItems
} from 'react-navigation';
import HomeScreen from './components/HomeScreen'
import Slack from './components/Slack'
import Settings from './components/Settings'
import Checkin from './components/Checkin'
import Map from './components/Maps'
import Twitter from './components/Twitter'


const DrawerContent = (props) => (
  <View>
    <View
      style={{
        height: 140,
        backgroundColor: '#203E5B',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Image source={require('./components/resized_header.png')} style={{resizeMode:'contain', width: 200, height:50}} />
    </View>
    <DrawerItems {...props} />
  </View>
)



const HomeScreenStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      initialRouteName: 'Schedule',
      headerMode: 'screen',
      headerTitle: 'Schedule',
      drawerLabel: 'Schedule',
    }),
  }
);

const CheckinStack = StackNavigator(
  {
    Checkin: {
      screen: Checkin,
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      initialRouteName: 'Checkin',
      headerMode: 'screen',
      headerTitle: 'Check In',
      drawerLabel: 'Check In',
    }),
  }
);


const SettingsStack = StackNavigator(
  {
    Settings: {
      screen: Settings,
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      initialRouteName: 'Settings',
      headerMode: 'screen',
      headerTitle: 'Settings',
      drawerLabel: 'Settings',
    }),
  }
);




const tarragon = DrawerNavigator({
  Schedule: { screen: HomeScreenStack },
  Slack: {screen: Slack},
  Twitter: {screen: Twitter},
  "Check in": {screen: CheckinStack},
  Venue: {screen: Map},
  Settings: {screen: SettingsStack}
}, {
  contentComponent: DrawerContent
});


AppRegistry.registerComponent('tarragon', () => tarragon);
