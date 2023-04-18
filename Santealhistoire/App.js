import { createStackNavigator } from '@react-navigation/stack';
import AddPlayersScreen from './screens/AddPlayersScreen';
import PlayScreen from './screens/PlayScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AddPlayers" component={AddPlayersScreen} />
        <Stack.Screen name="Play" component={PlayScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}