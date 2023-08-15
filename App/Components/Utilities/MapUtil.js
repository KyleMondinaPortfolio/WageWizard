import { StyleSheet, Dimensions } from 'react-native'

export const default_latitude_delta = 0.000922
export const default_longitude_delta = 0.000421

export const locations = {
    santa_clara_university: {
        latitude: 38.3496,
        longitude: -121.9390,
        latitudeDelta: 0.000922,
        longitudeDelta: 0.000421
    }
}

export const default_map_style = StyleSheet.create({
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
})