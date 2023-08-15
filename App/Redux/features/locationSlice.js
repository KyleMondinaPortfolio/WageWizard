import { createSlice } from '@reduxjs/toolkit'
import * as MapUtil from '../../Components/Utilities/MapUtil'

export const locationSlice = createSlice({
    name: 'location',
    initialState:{
        location: MapUtil.locations.santa_clara_university
    },
    reducers:{
        updateLocation: (state,action)=>{
            state.location={
                latitude:action.payload.latitude,
                longitude:action.payload.longitude,
                latitudeDelta:MapUtil.default_latitude_delta,
                longitudeDelta:MapUtil.default_longitude_delta
            }
        }
    }
})

export const { updateLocation } = locationSlice.actions
export const selectLocation = (state) => state.location.location

export default locationSlice.reducer