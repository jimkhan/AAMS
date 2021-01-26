import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Icon from 'react-native-vector-icons/Ionicons';

const Button = ({ name, style, textStyle, onPress, icon, size, color }) => {
    return (
        <TouchableOpacity style={[styles.button,style]} onPress={onPress}>
            <Text style={[styles.buttontxt, textStyle]}>{name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        width: wp('80%'),
        height: hp('6%'),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,20,106,.8)',
        borderRadius: 30,
        margin: hp("5%"),
        


    },
    buttontxt:{
        color: "#fff",
        fontSize: 25,
        
    }
})
export default Button;
