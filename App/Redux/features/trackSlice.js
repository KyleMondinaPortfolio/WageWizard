import { createSlice } from '@reduxjs/toolkit'

export const trackSlice = createSlice({
  name: 'track',
  initialState: {
    isTracking: false
  },
  reducers: {
    startTracking: state => {
        state.isTracking = true
    },
    stopTracking: state => {
        state.isTracking = false
    }
  }

})



export const { startTracking, stopTracking} = trackSlice.actions
export const selectIsTracking = (state) => state.track.isTracking

export default trackSlice.reducer
