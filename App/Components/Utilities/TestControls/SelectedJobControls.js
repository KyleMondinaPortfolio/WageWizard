import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {
    changeSelectedJob,
    updateJobList,
    selectSelectedJob,
    selectJobListUpdated
  } from '../../../Redux/features/jobSlice'

import { Text, View, Button } from 'react-native';

const SelectedJobControls = ()=>{

    const jobSelected = useSelector(selectSelectedJob)
    const jobListUpdated = useSelector(selectJobListUpdated)
    const dispatch = useDispatch()

    return(
        <View>
            <Text>{jobSelected}</Text>
            <Text>{jobListUpdated}</Text>
            <Button title = "Change Job Selected" onPress = {()=>{dispatch(changeSelectedJob(jobSelected+1))}}></Button>
            <Button title = "Update Job List" onPress = {()=>{dispatch(updateJobList())}}></Button>
        </View>

    )
}

export default SelectedJobControls 