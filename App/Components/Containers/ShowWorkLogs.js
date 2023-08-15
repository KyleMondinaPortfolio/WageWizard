import * as React from 'react'
import { useEffect,useState } from 'react'
import withRealmData from '../Enhancers/withRealmData'
import { Button, View, Text} from 'react-native'
import { selectWorkLogsUpdated } from '../../Redux/features/workLogsSlice'

const _ShowWorkLogs = (props)=>{
    const data = props.data
    const [buttonPressed, pressButton] = useState(0)

    useEffect(()=>{
        console.log(data)
    },[buttonPressed])

    return (
        <View>
            <Button
                onPress={()=>{pressButton(buttonPressed+1)}}
                title="Show WorkLogs"
            >
                
            </Button>
        </View>
    )
}

const ShowWorkLogs = withRealmData(_ShowWorkLogs,"WorkLog",[selectWorkLogsUpdated])
export default ShowWorkLogs