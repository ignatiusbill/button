import { StackNavigator } from 'react-navigation';
import { FirstScreen, SecondScreen } from './components/screens';

const App = StackNavigator({
    First: { screen: FirstScreen },
    Second: { screen: SecondScreen }
});

export default App;
