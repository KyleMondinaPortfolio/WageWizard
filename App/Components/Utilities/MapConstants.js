import { StyleSheet } from 'react-native'
import { Dimensions } from "react-native";

const DEFAULT_LATITUDE_DELTA = 0.000922;
const DEFAULT_LONGITUDE_DELTA = 0.000421;

const SANTA_CLARA_UNIVERSITY = {
    latitude: 38.3496,
    longitude: -121.9390,
    latitudeDelta: DEFAULT_LATITUDE_DELTA,
    longitudeDelta: DEFAULT_LONGITUDE_DELTA
}

const DEFAULT_MAP_STYLE = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.35,
        borderRadius: 15,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        overflow: 'hidden',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
});

const MAP_CONSTANTS = {
    santa_clara_university : SANTA_CLARA_UNIVERSITY,
    default_map_style: 
        StyleSheet.create({
            container: {
                width: Dimensions.get('window').width * 0.9,
                height: Dimensions.get('window').height * 0.35,
                borderRadius: 15,
                borderWidth: 2,
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                overflow: 'hidden',
            },
            map: {
            ...StyleSheet.absoluteFillObject,
            },
        }),
    default_latitude: SANTA_CLARA_UNIVERSITY.latitude,
    default_longitude: SANTA_CLARA_UNIVERSITY.longitude,
    default_latitude_delta: DEFAULT_LATITUDE_DELTA,
    default_longitude_delta: DEFAULT_LONGITUDE_DELTA
}

export default MAP_CONSTANTS
