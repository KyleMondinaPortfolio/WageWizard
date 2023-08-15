import * as React from 'react'
import { View, Text } from 'react-native'

import Timer from '../Components/Containers/Timer'
import TimerControls from '../Components/Utilities/TestControls/TimerControls'
import SelectedJobControls from '../Components/Utilities/TestControls/SelectedJobControls'

import AddJob from '../Components/Utilities/RealmUtilities/AddJob'
import ClearJob from '../Components/Utilities/RealmUtilities/ClearJobs'
import JobSelectionMenu from '../Components/Containers/JobSelectionMenu'

import SelectedJobText from '../Components/Containers/SelectedJobText'
import Permission from '../Components/Containers/Permissions'
import Canvas from '../Components/Containers/Canvas'
const TrackScreen = () =>{
    return(
            <Permission/>
    )
}

export default TrackScreen