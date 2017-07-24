import { StackNavigator } from 'react-navigation';
import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';

const ScreenContainer = StackNavigator({
    First: { screen: FirstScreen },
    Second: { screen: SecondScreen }
});

export default ScreenContainer;
