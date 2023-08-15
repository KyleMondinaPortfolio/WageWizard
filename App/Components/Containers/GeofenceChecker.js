import * as React from 'react'
import { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { View, Text} from 'react-native'
import { selectGeofencesUpdated, selectIsInsideGeofence } from '../../Redux/features/geofenceSlice';
import { enterGeofence, exitGeofence } from '../../Redux/features/geofenceSlice';
import { selectLocation } from '../../Redux/features/locationSlice';
import withGeofencesBySelectedID from '../Enhancers/withGeofencesBySelectedID.js';
import * as distanceUtil from '../Utilities/distanceUtil'

const _GeofenceChecker = (props)=>{
    const geofences = props.data
    const geofencesUpdates = useSelector(selectGeofencesUpdated)
    const isInsideGeofence = useSelector(selectIsInsideGeofence)
    const currentLocation = useSelector(selectLocation)
    const dispatch = useDispatch()
    useEffect(()=>{

        console.log("-----code called from Geofence Checker line 20-----")
        console.log("geofences in this location" + JSON.stringify(geofences))
        console.log("current location is" + JSON.stringify(currentLocation))
        if (geofences&&(geofences.length>0)){
            let inside = false
            geofences.forEach((geofence)=>{
                if (distanceUtil.checkIfInsideGeofence({
                    latitude:geofence.latitude,
                    longitude:geofence.longitude,
                    radius:geofence.radius
                },currentLocation)){
                    inside = true
                }
            })
            if (inside){
                dispatch(enterGeofence())
            }else{
                //code to detect leaving a geofence
                if(isInsideGeofence){
                    //log a work log
                }
                dispatch(exitGeofence())
            }
        }
    },[currentLocation,geofencesUpdates])
    return(
        <View>
            <Text>{isInsideGeofence.toString()}</Text>
        </View>
    )
}

const GeofenceChecker = withGeofencesBySelectedID(_GeofenceChecker)

export default GeofenceChecker