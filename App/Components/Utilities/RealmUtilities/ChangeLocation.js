import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateLocation } from '../../../Redux/features/locationSlice'
import { selectLocation } from '../../../Redux/features/locationSlice'
import { useState } from 'react'
import { View, Button, Text, TextInput } from 'react-native'

const ChangeLocation = ()=>{

    const location = useSelector(selectLocation)
    const dispatch = useDispatch()
    //const [locationUpdated,updateLocation] = useState(null)
    const [locationLatitude, setLocationLatitude] = useState(' ')
    const [locationLongitude, setLocationLongitude] = useState(' ')

    return(
        <View>
            <Text>{JSON.stringify(location)}</Text>
            <TextInput
                onChangeText={setLocationLatitude}
                placeholder="latitude"
                defaultValue="latitude"
                value={locationLatitude}
            />
            <TextInput
                onChangeText={setLocationLongitude}
                placeholder="longitude"
                defaultValue="longitude"
                value={locationLongitude}
            />
            <Button 
                title="Update Location" 
                onPress = {()=>{
                    dispatch(updateLocation({
                        latitude:parseFloat(locationLatitude),
                        longitude:parseFloat(locationLongitude)
                    }))
                    setLocationLatitude("")
                    setLocationLongitude("")
            }}/>
        </View>
    )

}

export default ChangeLocation