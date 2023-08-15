import * as React from 'react'
import { useDispatch } from 'react-redux';
import {
    changeSelectedJob,
  } from '../../Redux/features/jobSlice';
import { useState, useEffect } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { StyleSheet } from 'react-native';
import { Dimensions } from "react-native";


//enhancers
import { selectJobListUpdated } from '../../Redux/features/jobSlice';
import withRealmData from '../Enhancers/withRealmData';
import Colors from '../Styles/Colors';
import { scale } from 'react-native-size-matters';


const _JobDropDownPicker = (props)=>{
    const jobsFromRealm = props.data
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [pickerItems,setPickerItems] = useState([])
    const dispatch = useDispatch()

    useEffect(()=>{
        if (jobsFromRealm){
            console.log("-----code called from JobDropDownPicker line 18-----")
            console.log(jobsFromRealm)
            setPickerItems(jobsFromRealm.map((job)=>{
                return{
                    label:job.employer,
                    value:job._id
                }
            }))
        }
    },[jobsFromRealm])

    return(
        
        <DropDownPicker
            placeholder="Select a Job"
            itemSeparator={true}
            open={open}
            value={value}
            items={pickerItems}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setPickerItems}
            onSelectItem={(item) => {
                dispatch(changeSelectedJob(item.value))
            }}
            style = {pickerStyle.picker}
            containerStyle={pickerStyle.pickerContainer}
            placeholderStyle={pickerStyle.pickerLabel}
            dropDownContainerStyle={pickerStyle.pickerDropDownContainer}
            listItemLabelStyle={pickerStyle.pickerListItemLabel}
            labelStyle={pickerStyle.pickerLabel}
            />
        
    )
}

const pickerStyle = StyleSheet.create({
    picker:{
        margin:15,
        padding:10,
        backgroundColor:Colors.secondary,
        borderRadius:15,
        borderColor:Colors.primary,
        borderWidth:2,
        alignItems:'center',
        justifyContent:'center'

    },
    pickerContainer: {
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.07,
        margin: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: Colors.primary,
        zIndex: 2,
    },
    pickerLabel:{
        textAlign:'center',
        fontsize:scale(20),
        fontWeight:'bold',
        color: Colors.primary
    },
    pickerDropDownContainer: {
        backgroundColor: Colors.secondary,
        width: Dimensions.get('window').width * 0.9,
        borderWidth: 2,
        borderRadius: 15,
        borderColor: Colors.primary,
        padding: scale(5),
        zIndex: 1,
    },
    pickerListItemLabel: {
        fontSize: scale(8),
        color: Colors.dark,
        fontFamily: 'sans-serif',
        fontWeight: '600',
        textAlign: 'center',
        padding: '2%',
    },


})

const JobDropDownPicker = withRealmData(_JobDropDownPicker,"Job",[selectJobListUpdated])
export default JobDropDownPicker



