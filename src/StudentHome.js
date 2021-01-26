import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

import BackGround from './Background';
import AppButton from './AppButton';
import AppText from './AppText';

const StudentHome = () => {
    return (
        <BackGround source={require('./img/back.png')}>
            <TouchableOpacity style={styles.roundButton}>
                <Icon name={"scan-outline"} size={wp("30%")} color={"#000035"}  />
                <AppText style={styles.text}>Scan</AppText>
            </TouchableOpacity>
            
        </BackGround>
    )
}
const styles = StyleSheet.create({
    roundButton:{
        paddingLeft: wp('2%'),
        justifyContent: 'center',
        alignItems: 'center',
        width: wp("40%"),
        height: wp("40%"),
        borderColor: '#A6A9B7',
        borderWidth: 5,
        borderRadius: hp("12%"),
        backgroundColor: 'rgba(255,20,106,.81)',

    },
    text:{
        position: 'absolute',
        fontFamily: 'GillSansUltraBold',
        fontSize: 28,
    }
})

export default StudentHome;
