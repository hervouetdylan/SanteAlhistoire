import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddPlayerScreen from '../screens/AddPlayersScreen';
import PlayScreen from '../screens/PlayScreen';
import gameRules from '../screens/gameRules';

const Stack = createNativeStackNavigator();

export default function stack() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Home'
          component={AddPlayerScreen}
          options={{title: 'Ajouts de joueurs'}}
        />
        <Stack.Screen
          name="Rule"
          component={gameRules}
          options={{title: 'Règles du jeus'}}
        />
        <Stack.Screen
          name='Play'
          component={PlayScreen}
          options={{title: 'Jouer'}}
        />
          
      </Stack.Navigator>
    </NavigationContainer>
  );
}