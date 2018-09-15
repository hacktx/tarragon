import { AppRegistry } from 'react-native';
import {
  StackNavigator,
  createDrawerNavigator
} from 'react-navigation';
import HomeScreen from './components/HomeScreen'
import Slack from './components/Slack'
import Settings from './components/Settings'
import Checkin from './components/Checkin'
import Map from './components/Maps'
import Twitter from './components/Twitter'


const tarragon = createDrawerNavigator({
  Home: { screen: HomeScreen },
  Slack: {screen: Slack},
  Twitter: {screen: Twitter},
  Checkin: {screen: Checkin},
  Venue: {screen: Map},
  Settings: {screen: Settings}
});


AppRegistry.registerComponent('tarragon', () => tarragon);
