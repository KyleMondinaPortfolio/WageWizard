import * as React from 'react'
import { selectSelectedJob } from '../../../Redux/features/jobSlice'
import { useSelector } from 'react-redux'
import AddGeofence from './AddGeofence';
import ClearGeofences from './ClearGeofences';
import {View, Button, Text} from 'react-native';

const TestGeofences = ()=>{
    const selectedJob = useSelector(selectSelectedJob)
    if (selectedJob>0){
        return(
            <View>
                <AddGeofence/>
                <ClearGeofences/>
            </View>
        )
    }
    else{
        return(
            <Text>Select a Job First!</Text>
        )
    }
}

export default TestGeofences