import { AppRegistry } from 'react-native';
import {
  StackNavigator,
  createDrawerNavigator
} from 'react-navigation';
import HomeScreen from './components/HomeScreen'
import Slack from './components/Slack'



const tarragon = createDrawerNavigator({
  Home: { screen: HomeScreen },
  Slack: {screen: Slack}
});


AppRegistry.registerComponent('tarragon', () => tarragon);
