import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { updateGeofences } from '../../../Redux/features/geofenceSlice';
import { addToRealm } from '../../../Realm/dbCRUD';
import { useState, useEffect } from 'react';
import { selectSelectedJob } from '../../../Redux/features/jobSlice';
import { View, Button, TextInput } from 'react-native';
import formStyles from '../../Styles/formStyles';

const AddGeofence = ()=>{
    const dispatch = useDispatch()
    const selectedJob = useSelector(selectSelectedJob)
    const [geofenceAdded,addGeofence] = useState(null)
    const [lat, setLat] = useState(' ')
    const [long, setLong] = useState(' ')
    const [radius, setRadius] = useState(' ')

    useEffect(()=>{
        if(geofenceAdded !== null){
            addToRealm("Geofence",geofenceAdded).then(()=>{
                dispatch(updateGeofences())
            })
        }
    },[geofenceAdded])

    return(
        <View style = {formStyles.container}>
            <TextInput
                onChangeText={setLat}
                placeholder="Latitude"
                value={lat}
                style = {formStyles.textInput}
            />
            <TextInput
                onChangeText={setLong}
                placeholder="Longitude"
                value={long}
                style = {formStyles.textInput}

            />
            <TextInput
                onChangeText={setRadius}
                placeholder="Radius"
                value={radius}
                style = {formStyles.textInput}

            />
            <Button 
                title="Add Geofence" 
                onPress = {()=>{
                    addGeofence({
                        jobId: selectedJob,
                        latitude: parseFloat(lat),
                        longitude: parseFloat(long),
                        radius: parseFloat(radius)
                    })
                    setLat("")
                    setLong("")
                    setRadius("")
                }}/>
        </View>
    )

}



export default AddGeofence