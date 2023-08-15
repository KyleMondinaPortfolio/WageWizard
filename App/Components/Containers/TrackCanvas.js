import React from "react";
import { View, StyleSheet } from "react-native";


import Timer from "./Timer";
import TimerControls from "../Utilities/TestControls/TimerControls";
import SelectedJobControls from "../Utilities/TestControls/SelectedJobControls";
import AddJob from "../Utilities/RealmUtilities/AddJob";
import ClearJob from "../Utilities/RealmUtilities/ClearJobs";
import JobSelectionMenu from "./JobSelectionMenu";
import SelectedJobText from "./SelectedJobText";
import AddGeofence from "../Utilities/RealmUtilities/AddGeofence";
import ClearGeofences from "../Utilities/RealmUtilities/ClearGeofences";
import TestGeofences from "../Utilities/RealmUtilities/TestGeofences";
import MapView from "react-native-maps";
import Map from "./Map";
import Tracker from "./Tracker";
import ChangeLocation from "../Utilities/RealmUtilities/ChangeLocation";
import GeofenceChecker from "./GeofenceChecker";
import TestNewRealmData from "./TestNewRealmData";

import Colors from "../Styles/Colors";

const TrackCanvas = ()=>{
    return(
        <View style = {trackCanvasStyle.container}>
            <View style = {trackCanvasStyle.timer}>
                <Timer/>
            </View>
            <View style = {trackCanvasStyle.jobSelectionMenu}>
                <JobSelectionMenu/>
            </View>
            <View style={trackCanvasStyle.map}>
                <Map/>
            </View>
        </View>
    )
}

const trackCanvasStyle = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: Colors.secondary,
        flexDirection: "column",
    },
    timer:{
        flex:3,
        //backgroundColor:'purple',
        justifyContent:'center',
        padding:2
    },
    jobSelectionMenu:{
        flex:2,
        justifyContent:'center',
        //backgroundColor:'green',
        padding:7,
        zIndex: 2,
    },
    map:{
        flex:10,
        //backgroundColor:'pink',
        padding:5
    }
})

export default TrackCanvas


