import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {LogsScreen, ResourcesScreen, TrackScreen, WageScreen } from '../Screens'
import Colors from '../Components/Styles/Colors';
import { scale } from 'react-native-size-matters';

const Tab = createBottomTabNavigator();

const MainNav = ()=>{
    return(
        <Tab.Navigator
            screenOptions={({route})=>({
                headerStyle:{
                    backgroundColor:Colors.primary,
                },
                headerTitleStyle:{
                    color:Colors.light,
                    fontSize:scale(15),
                },
                tabBarInactiveBackgroundColor:Colors.primary,
                tabBarActiveBackgroundColor:Colors.active,
                tabBarInactiveTintColor:Colors.light,
                tabBarActiveTintColor:Colors.dark
            })}
        >
            <Tab.Screen name="Track" component={TrackScreen} />
            <Tab.Screen name="Logs" component={LogsScreen} />
            <Tab.Screen name="Resources" component={ResourcesScreen} />
            <Tab.Screen name="Wage" component={WageScreen} />
        </Tab.Navigator>
    )
}

export default MainNav


