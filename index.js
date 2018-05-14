import { AppRegistry } from 'react-native';
import {
  StackNavigator,
  createDrawerNavigator
} from 'react-navigation';
import HomeScreen from './components/HomeScreen'
import Slack from './components/Slack'
import Settings from './components/Settings'
import Checkin from './components/Checkin'
import './ReactotronConfig'



const tarragon = createDrawerNavigator({
  Home: { screen: HomeScreen },
  Slack: {screen: Slack},
  Checkin: {screen: Checkin},
  Settings: {screen: Settings}
});


AppRegistry.registerComponent('tarragon', () => tarragon);
