import * as React from 'react'
import {View,Button,Text} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsPaused,    
  pauseTimer,
  unPauseTimer
} from '../../../Redux/features/timerSlice'
import { 
    enterGeofence, 
    exitGeofence,
    selectIsInsideGeofence
} from '../../../Redux/features/geofenceSlice'
import {
    selectIsTracking,
    startTracking,
    stopTracking
} from '../../../Redux/features/trackSlice'

/* Note:
   This component controlls the timer by updating the inside geofence,
   component could potentially interfere with the logic of the app 
   when the component responsible for updating the inside geofence status 
   sends conflicting data
*/

const TimerControls = () =>{

    const isTracking = useSelector(selectIsTracking)
    const dispatch = useDispatch()
    const isInsideGeofence = useSelector(selectIsInsideGeofence)
    const isPaused = useSelector(selectIsPaused)



    return(
        <View>
            <Text>Is Tracking: {isTracking.toString()}</Text>
            {
                isTracking
                ?<View>
                    <Button title = "Stop Tracking" onPress = {()=>{dispatch(stopTracking())}}></Button>
                    <Text>Is Inside Geofence: {isInsideGeofence.toString()}</Text>
                    {
                        isInsideGeofence
                        ?<View>
                            <Button title = "Exit Geofence" onPress = {()=>{dispatch(exitGeofence())}}></Button>
                        </View>
                        :<View>
                            <Button title = "Enter Geofence" onPress = {()=>{dispatch(enterGeofence())}}></Button>
                        </View>
                    }
                </View>
                :<View>
                    <Button title = "Start Tracking" onPress = {()=>{dispatch(startTracking())}}></Button>
                </View>
            }
            <Text>Is Paused: {isPaused.toString()}</Text>
            {
            isPaused
                ?<View>
                    <Button title = "Unpause Timer" onPress = {()=>{dispatch(unPauseTimer())}}></Button>
                </View>
                :<View>
                    <Button title = "Pause Timer" onPress = {()=>{dispatch(pauseTimer())}}></Button>
                </View>
            }
        </View>

    )
}


export default TimerControls 