import React from "react";
import { View } from "react-native";
import { Text } from "react-native";

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
import ShowWorkLogs from "./ShowWorkLogs";
const Canvas = ()=>{
    return(
        <View>
            <ShowWorkLogs/>
        </View>
    )
}

export default Canvas






