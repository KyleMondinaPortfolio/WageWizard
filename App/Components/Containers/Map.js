import * as React from 'react'
import { View, Text } from 'react-native'
import MapView, {PROVIDER_GOOGLE, Marker, Circle} from 'react-native-maps'
import * as MapUtil from '../Utilities/MapUtil'
import { useEffect, useState } from 'react'
import withGeofencesBySelectedID from '../Enhancers/withGeofencesBySelectedID.js'
import { selectLocation } from '../../Redux/features/locationSlice'
import { useSelector } from 'react-redux'

const _Map = (props) => {

    const geofences = props.data
    const currentLocation = useSelector(selectLocation)
    const [location,setLocation] = useState(MapUtil.locations.santa_clara_university)
    useEffect(()=>{
        (async()=>{
            setLocation({
                latitude:currentLocation.latitude,
                longitude:currentLocation.longitude,
                latitudeDelta:currentLocation.latitudeDelta,
                longitudeDelta:currentLocation.longitudeDelta
            })
        })()
    },[currentLocation])

    return(
        <View style = {MapUtil.default_map_style.container}>
                <MapView 
                    provider={PROVIDER_GOOGLE}
                    style={MapUtil.default_map_style.map}
                    region={location}
                >
                    {
                        ((geofences&&(geofences.length>0)))
                            ? geofences.map((geofence)=>{
                                return(<Circle
                                    key={geofence._id}
                                    center={{
                                        latitude:geofence.latitude,
                                        longitude:geofence.longitude,
                                    }}
                                    radius={geofence.radius}
                                    fillColor={'rgba(245, 40, 145, 0.35)'}
                                />)
                            })
                            : <></>
                    }
                </MapView>
        </View>
    )
}

const Map = withGeofencesBySelectedID(_Map)
export default Map