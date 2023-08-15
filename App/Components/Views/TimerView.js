import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import EStyleSheet from "react-native-extended-stylesheet";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


const TimerView = ({seconds,minutes,hours})=>{
    return(
        <View style={TimerStyle.container}>
            <Text style={TimerStyle.text}>Timer:</Text>
            <Text style={TimerStyle.text}> {hours}: {minutes}: {seconds}</Text>
        </View>   
    )
}



const TimerStyle = StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:'2%',
        alignItems: 'center',
        backgroundColor:'#F2FFFC'
    },
    text:{
        fontSize: scale(30),
        fontWeight: '700',
        fontFamily: 'sans-serif',
        textAlign: 'center',
    }
})

export default TimerView
