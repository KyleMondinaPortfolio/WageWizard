import * as React from 'react'
import Realm from 'realm'
import { useState, useEffect, useRef } from 'react'
import realmConfig from '../../Realm/realmConfig'
import { selectJobListUpdated } from '../../Redux/features/jobSlice'
import { selectWorkLogsUpdated } from '../../Redux/features/workLogsSlice'
import { useSelector } from 'react-redux'
import { View, Text, FlatList, Pressable } from 'react-native'
import Colors from '../Styles/Colors'

const Item = ({time, jobId, date, _id, jobName,navigation}) => (
    <Pressable 
        style = {{backgroundColor:Colors.secondary}}
        onPress = {()=>{
            navigation.navigate("DetailedWorkLog",{
                jobName:jobName,
                time:time,
                date:date
            })
        }}
    >
        <Text>{jobName}</Text>
        <Text>{JSON.stringify(date)}</Text>
        <Text>{time}</Text>
    </Pressable>
)

const WorkLogsList = ({navigation})=>{

    const [workLogs,updateWorkLogs] = useState([])
    const [jobList,updateJobList] = useState([])
    const [formattedWorkLogs,updateFormattedWorkLogs] = useState([])
    const realmRef = useRef(null)
    const jobListUpdated = useSelector(selectJobListUpdated)
    const workLogsUpdated = useSelector(selectWorkLogsUpdated)

    const renderItem = ({ item }) => (
        <Item time={item.time} jobId = {item.jobId} date = {item.date} _id = {item._id} jobName = {item.jobName} navigation={navigation}/>
    )

    useEffect(()=>{
        if(workLogs.length>0&&jobList.length>0){
            //need to include try catching behaviour
            updateFormattedWorkLogs(
                workLogs.map(obj=>{
                    return {
                        ...obj,
                        jobName: jobList.filter(obj2=>(obj2._id===obj.jobId))[0].employer
                    }
                })
            )
        }
    },[workLogs,jobList])

    useEffect(()=>{
        Realm.open(realmConfig).then((realmResult)=>{
            realmRef.current = realmResult
            const realmData = realmRef.current
            updateWorkLogs(realmData.objects("WorkLog").map(object=>JSON.parse(JSON.stringify(object))))
            updateJobList(realmData.objects("Job").map(object=>JSON.parse(JSON.stringify(object))))
        })

        return(()=>{
            const realmSession = realmRef.current
            if(realmSession){
                realmSession.close()
                realmRef.current = null
            }
        })

    },[jobListUpdated,workLogsUpdated])

    return(
        <View>
            <FlatList
                data={formattedWorkLogs}
                renderItem={renderItem}
                keyExtractor={item => item._id}
            />
        </View>
    )
}

export default WorkLogsList