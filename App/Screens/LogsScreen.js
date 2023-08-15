import * as React from 'react'
import { View, Text, Button, SafeAreaView } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import WorkLogsList from '../Components/Containers/WorkLogsList'
import DetailedWorkLog from '../Components/Containers/DetailedWorkLog'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const Parent = ({navigation}) => {
    return(
        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', backgroundColor:'red' }}>
            <Text>Cookeis</Text>
            <Button
                title ="Go Back to Child"
                onPress={() => navigation.navigate('Child')}
            />
        </View>
    )
}

const Child = () => {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Child Component</Text>
        </View>
    )
}


const LogsScreen = () =>{
    return(
            <SafeAreaView style = {{flex:1}}> 
                <Stack.Navigator 
                    initialRouteName='Parent'
                    screenOptions={{headerShown:false}}
                >
                    <Stack.Screen name = 'WorkLogsList' component = {WorkLogsList} />
                    <Stack.Screen name = 'DetailedWorkLog' component = {DetailedWorkLog} />
                </Stack.Navigator>
            </SafeAreaView>
    )
}

export default LogsScreen