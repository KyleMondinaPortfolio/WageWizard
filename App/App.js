import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './Redux/store'

import MainNav from './Navigation/MainNav'

const Stack = createNativeStackNavigator();

const App = ()=>{
  return(
    <Provider store = {store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MainNav" component={MainNav} options={{headerShown:false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}



export default App;
