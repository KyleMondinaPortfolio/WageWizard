import { createSlice } from '@reduxjs/toolkit'

export const jobSlice = createSlice({
  name: 'job',
  initialState: {
    selectedJob: -1,
    jobListUpdated: 0
  },
  reducers: {
    changeSelectedJob: (state,action) => {
        state.selectedJob = action.payload
    },
    updateJobList:(state)=>{
        state.jobListUpdated+=1
    }


  }
})

export const { changeSelectedJob,updateJobList} = jobSlice.actions
export const selectSelectedJob = state => state.job.selectedJob
export const selectJobListUpdated = state => state.job.jobListUpdated

export default jobSlice.reducer