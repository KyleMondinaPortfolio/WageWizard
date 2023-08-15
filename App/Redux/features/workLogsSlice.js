import { createSlice } from '@reduxjs/toolkit'

export const workLogsSlice = createSlice({
    name: 'workLogs',
    initialState:{
        workLogsUpdated:0
    },
    reducers:{
      updateWorkLogs:(state)=>{
        state.workLogsUpdated+=1
      }
    }
})

export const {updateWorkLogs} = workLogsSlice.actions
export const selectWorkLogsUpdated = (state) => state.workLogs.workLogsUpdated

export default workLogsSlice.reducer