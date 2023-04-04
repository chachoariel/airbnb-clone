import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from './scr/screens/home/HomeScreen'
import { ProfileScreen } from './scr/screens/profile/ProfileScreen'

const Tab = createBottomTabNavigator()

export default function App () {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='Home' component={HomeScreen} />
          <Tab.Screen name='Profile' component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style='auto' />
    </>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff'
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
