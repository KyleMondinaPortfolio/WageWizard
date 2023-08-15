import * as React from 'react'
import { View, Text } from 'react-native'
import ShowWorkLogs from '../Components/Containers/ShowWorkLogs'
import Canvas from '../Components/Containers/Canvas'

const ResourcesScreen = () =>{
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Resources Screen</Text>
            <Canvas/>
        </View>
    )
}

export default ResourcesScreen