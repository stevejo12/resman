import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './routes/home/Home';
import UserProfile from './routes/userProfile/UserProfile';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
      >
        <Stack.Screen name='UserProfile' component={UserProfile} />
        <Stack.Screen 
          name='Home' 
          component={Home}
          options={{title: 'Welcome to Resman'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
