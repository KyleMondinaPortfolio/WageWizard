import { createSlice } from '@reduxjs/toolkit'

export const timerSlice = createSlice({
  name: 'timer',
  initialState: {
    time: 0,
    isPaused: false
  },
  reducers: {
    incrementTimer: state => {
      state.time += 1
    },
    restartTimer: state => {
      state.time = 0
    },
    pauseTimer: state => {
      state.isPaused = true
    },
    unPauseTimer: state => {
      state.isPaused = false
    }
  }
})

export const { incrementTimer, restartTimer, pauseTimer, unPauseTimer} = timerSlice.actions
export const selectTime = (state) => state.timer.time
export const selectIsPaused = (state) => state.timer.isPaused

export default timerSlice.reducer
