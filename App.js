import { Themes } from "./assets/Themes";
import {MainScreen, PreviewScreen, DetailScreen} from './components';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Preview" component={PreviewScreen} options={{headerStyle: {backgroundColor: Themes.colors.background,},
        headerTintColor: 'white'}}/>
        <Stack.Screen name="Detail" component={DetailScreen} options={{headerStyle: {backgroundColor: Themes.colors.background,},
        headerTintColor: 'white'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
