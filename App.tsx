import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { SearchScreen } from './src/screens/SearchScreen'
import { ResultsScreen } from './src/screens/ResultsScreen'
import { RootStackParamList } from './src/types/Navigation'

const Stack = createStackNavigator<RootStackParamList>()

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Search">
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Results" component={ResultsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default App