import * as React from 'react'
import { useSelector } from 'react-redux'
import { selectJobListUpdated, selectSelectedJob } from '../../Redux/features/jobSlice'
import { selectGeofencesUpdated } from '../../Redux/features/geofenceSlice'
import withRealmData from './withRealmData'


const withGeofencesBySelectedID= (Component) => ({...props}) =>{

    const selectedJob = useSelector(selectSelectedJob)
    const EnhancedComponent = withRealmData(Component,"Geofence",[selectGeofencesUpdated,selectJobListUpdated],{filter:"jobId",filterValue:selectedJob})

    return(
        <EnhancedComponent/>
    )
}

export default withGeofencesBySelectedID



