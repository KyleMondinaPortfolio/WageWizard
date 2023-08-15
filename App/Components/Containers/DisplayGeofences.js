import * as React from 'react'
import withGeofencesBySelectedID from '../Enhancers/withGeofencesBySelectedID.js.js'
import { useEffect } from 'react'
import { View } from 'react-native'

const _DisplayGeofences = (props) =>{
    const geofences = props.data
    useEffect(()=>{
        console.log("-----code called from Test.js line 9------")
        console.log(props.data)
    },[geofences])

    return(
        <View></View>
    )
}
const DisplayGeofences = withGeofencesBySelectedID(_DisplayGeofences)
export default DisplayGeofences 