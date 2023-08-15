import * as React from 'react'
import BackgroundTimer from 'react-native-background-timer';

import { useSelector, useDispatch } from 'react-redux';
import {
  incrementTimer,
  restartTimer,
  unPauseTimer,
  selectIsPaused,
  selectTime,

} from '../../Redux/features/timerSlice.js';
import { 
  selectIsInsideGeofence
} from '../../Redux/features/geofenceSlice'
import {selectIsTracking} from '../../Redux/features/trackSlice'

import { useEffect } from 'react';
import TimerView from '../Views/TimerView'

const Timer = () =>{

    const isInsideGeofence = useSelector(selectIsInsideGeofence)
    const isPaused = useSelector(selectIsPaused)
    const isTracking = useSelector(selectIsTracking)

    const time = useSelector(selectTime)

    const dispatch = useDispatch()

    let seconds = ("0" + ((time / 1) % 60)).slice(-2)
    let minutes = ("0" + (Math.floor((time / 60)) % 60)).slice(-2)
    let hours = ("0" + (Math.floor((time / 3600)) % 24)).slice(-2)

    useEffect(() => {
        if (isTracking) {
          if(isInsideGeofence){
            if (!isPaused){
              BackgroundTimer.runBackgroundTimer(() => {
                dispatch(incrementTimer())
              }, 1000)
            }
            else{
              BackgroundTimer.stopBackgroundTimer();
            }
          }else{
            dispatch(restartTimer())
            BackgroundTimer.stopBackgroundTimer()
          }

        } else {
          dispatch(unPauseTimer())
          dispatch(restartTimer())
          BackgroundTimer.stopBackgroundTimer();
        }
    
    }, [isTracking,isInsideGeofence,isPaused]);

    return (
        <TimerView
            seconds = {seconds}
            minutes = {minutes}
            hours = {hours}
        />
    )
}


export default Timer
