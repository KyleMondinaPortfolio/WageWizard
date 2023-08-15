import { createSlice } from '@reduxjs/toolkit'

export const geofenceSlice = createSlice({
  name: 'geofence',
  initialState: {
    isInsideGeofence: false,
    geofencesUpdated: 0

  },
  reducers: {
    enterGeofence: state => {
        state.isInsideGeofence = true
    },
    exitGeofence: state => {
        state.isInsideGeofence = false
    },
    updateGeofences: state =>{
        state.geofencesUpdated+=1
    }
  }
})

export const { enterGeofence, exitGeofence, updateGeofences} = geofenceSlice.actions
export const selectIsInsideGeofence = (state) => state.geofence.isInsideGeofence
export const selectGeofencesUpdated = (state) => state.geofence.geofencesUpdated

export default geofenceSlice.reducer