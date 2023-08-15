import * as React from 'react'
import Realm from 'realm'
import realmConfig from '../../Realm/realmConfig';
import { useState, useEffect } from 'react';
import { useSelector} from 'react-redux';
import { selectSelectedJob } from '../../Redux/features/jobSlice';
import { Text } from 'react-native'


const SelectedJobText = ()=>{
    const nullError = " BUT NO JOB SELECTED, LOGIC ERROR!"
    const selectedJobID = useSelector(selectSelectedJob)
    const [selectedJob, setSelectedJob] = useState(nullError)

    useEffect(()=>{
        if (selectedJobID>0){
            Realm.open(realmConfig).then((realmResult)=>{
                setSelectedJob(realmResult.objects("Job").filtered(`_id==${selectedJobID}`)[0].employer.toString())
                realmResult.close()
            })
        }
    },[selectedJobID])

    return(
        <Text>Tracking: {selectedJob}</Text>
    )


}

export default SelectedJobText