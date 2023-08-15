import * as React from 'react'
import * as Location from 'expo-location'
import * as TaskManager from 'expo-task-manager'
import { View, Button, Text } from 'react-native';
import * as MapUtil from '../Utilities/MapUtil'
import store from '../../Redux/store';
import { startTracking, stopTracking } from '../../Redux/features/trackSlice';
import { updateLocation } from '../../Redux/features/locationSlice';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const BACKGROUND_LOCATION_TRACKING = "BACKGROUND_LOCATION_TRACKING"

TaskManager.defineTask(BACKGROUND_LOCATION_TRACKING, async({data,error})=>{
    if (error){
        console.error(error)
        return
    }
    if (data){
        const { locations } = data
        const location = locations[0]
        if (location){
            console.log("Location Updated:" + JSON.stringify(location.coords))
            store.dispatch(updateLocation({
                latitude:location.coords.latitude,
                longitude:location.coords.longitude,
                latitudeDelta:MapUtil.default_latitude_delta,
                longitudeDelta:MapUtil.default_longitude_delta
            }))
        }
        else{
            console.log("-----code called from Tracker line 55-----")
            console.log("error in extracting location from background")
        }
    }
})

const startBackgroundUpdate = async () => {
    
    await Location.startLocationUpdatesAsync(BACKGROUND_LOCATION_TRACKING,{
        accuracy: Location.Accuracy.BestForNavigation,
        showsBackgroundLocationIndicator: true,
        foregroundService: {
            notificationTitle: "Location",
            notificationBody: "Location tracking in background",
            notificationColor: "#fff",
        }
    })
}

const stopBackgroundUpdate = async () => {
    
    await Location.stopLocationUpdatesAsync(BACKGROUND_LOCATION_TRACKING)
    console.log("-----code called from Tracker line 55-----")
    console.log("Location Tracking Stopped")
}

const Tracker = ()=>{
    const [isTracking,setIsTracking] = useState(false)
    const dispatch = useDispatch()
    useEffect(()=>{
        if(isTracking){
            dispatch(startTracking())
            startBackgroundUpdate()
        }else{
            //check if inside a geofence, if it is, log one
            dispatch(stopTracking())
            stopBackgroundUpdate()
        }
    },[isTracking])

    return(
        <View>
                <Text>{isTracking.toString()}</Text>
                <Button title="Start Background Update" onPress = {()=>{
                    setIsTracking(true)
                    
                }}/>
                <Button title="Stop Background Update" onPress = {()=>{
                    setIsTracking(false)
                }}/>
        </View>
    )
}

export default Tracker