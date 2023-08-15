import * as React from 'react'
import { useState, useEffect } from 'react';
import { selectJobListUpdated, selectSelectedJob } from '../../Redux/features/jobSlice'
import { selectGeofencesUpdated } from '../../Redux/features/geofenceSlice'


//enhancers
import withRealmData from '../Enhancers/withRealmData';


const _TestNewRealmData = (props)=>{
    const data = props.data
    useEffect(()=>{
        console.log("00000000000000000000")
        console.log(JSON.stringify(data))
        console.log("00000000000000000000")
    },[data])

}

const TestNewRealmData = withRealmData(_TestNewRealmData,"Geofence",[selectJobListUpdated,selectGeofencesUpdated],{filter:'jobId',filterValue:2})

export default TestNewRealmData


