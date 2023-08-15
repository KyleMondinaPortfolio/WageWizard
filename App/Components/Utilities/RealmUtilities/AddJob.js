import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {
    updateJobList,
} from '../../../Redux/features/jobSlice'
  
import { useState, useEffect } from 'react';
import { addToRealm } from '../../../Realm/dbCRUD';

import { View, Button, TextInput } from 'react-native';
import formStyles from '../../Styles/formStyles';

const AddJob = ()=>{

    const dispatch = useDispatch()
    
    const [jobAdded,addJob] = useState(null)
    const [jobEmployer,setJobEmployer] = useState(' ')
    const [jobClient,setJobClient] = useState(' ')

    useEffect(()=>{
        if (jobAdded !== null){
            addToRealm("Job",jobAdded).then(()=>{
                dispatch(updateJobList())
            })
        }
    },[jobAdded])

    return(
        <View style = {formStyles.container}>
            <TextInput
                onChangeText={setJobEmployer}
                placeholder="Employer"
                value={jobEmployer}
                style={formStyles.textInput}
            />
            <TextInput
                onChangeText={setJobClient}
                placeholder="Client"
                value={jobClient}
                style={formStyles.textInput}
            />
            <Button 
                title="Add Job" 
                onPress = {()=>{
                    addJob({
                        employer:jobEmployer,
                        client:jobClient
                    })
                    setJobEmployer("")
                    setJobClient("")
                }}/>
        </View>
    )

}

export default AddJob



