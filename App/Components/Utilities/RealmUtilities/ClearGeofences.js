import * as React from 'react'
import { useDispatch } from 'react-redux';
import { updateGeofences } from '../../../Redux/features/geofenceSlice';
import { useState, useEffect } from 'react';
import { clearFromRealm } from '../../../Realm/dbCRUD';

import {Button } from 'react-native';

const ClearGeofences = ()=>{
    const dispatch = useDispatch()
    const [geofencesCleared,clearGeofences] = useState(0)

    useEffect(()=>{
        if(geofencesCleared>0){
            clearFromRealm("Geofence").then(()=>{
                dispatch(updateGeofences())
            })
        }

    },[geofencesCleared])

    return(
        <Button title="clear all geofences" onPress = {()=>{clearGeofences(geofencesCleared+1)}}></Button>
    )
}

export default ClearGeofences