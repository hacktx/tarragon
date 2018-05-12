import { AppRegistry } from 'react-native';
import {
  StackNavigator,
  createDrawerNavigator
} from 'react-navigation';
import HomeScreen from './components/HomeScreen'
import Slack from './components/Slack'
import Checkin from './components/Checkin'



const tarragon = createDrawerNavigator({
  Home: { screen: HomeScreen },
  Slack: {screen: Slack},
  Checkin: {screen: Checkin}
});


AppRegistry.registerComponent('tarragon', () => tarragon);
