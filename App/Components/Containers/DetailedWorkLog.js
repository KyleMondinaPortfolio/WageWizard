import * as React from 'react'
import { View, Text, FlatList, Pressable } from 'react-native'




const DetailedWorkLog = ({navigation,route})=>{
    const jobName = route.params.jobName
    const time = route.params.time
    const date = route.params.date
    return(
        <View>
            <Text>Job Name: {jobName}</Text>
            <Text>Time Spent in Seconds: {time}</Text>
            <Text>Date:{date} </Text>
            <Pressable
                onPress={()=>{navigation.navigate('WorkLogsList')}}
            >
                <Text>Parent</Text>
            </Pressable>
        </View>
    )
}

export default DetailedWorkLog