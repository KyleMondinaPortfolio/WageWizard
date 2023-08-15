import * as React from 'react'
import { useSelector } from 'react-redux';
import { selectIsTracking } from '../../Redux/features/trackSlice';

import SelectedJobText from './SelectedJobText';
import JobDropDownPicker from './JobDropDownPicker';

const JobSelectionMenu = ()=>{
    const isTracking = useSelector(selectIsTracking)
    if(isTracking){
        return(
            <SelectedJobText/>
        )
    }
    return(
        <JobDropDownPicker/>
    )
}




export default JobSelectionMenu