import React from 'react'
import { TextInput, StyleSheet, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Icon from 'react-native-vector-icons/Ionicons';

const AppTextInput = ({ icon, style, ...otherProps}) => {
    return (
        <View style={styles.conatiner}>
            {icon && <Icon name={icon} size={25} color={"#FFFFCA"} />}
        <TextInput
            style={[styles.inputtext,style]}
                placeholderTextColor="#C5C5C5"
            {...otherProps}
        />
        </View>
    )
}
const styles = StyleSheet.create({
    conatiner:{
        alignItems: 'center',
        flexDirection: 'row',
        width: wp('80%'),
        height: hp('5.5%'),
        margin: 10,
        paddingHorizontal: 10,
        borderBottomWidth: 2,
        borderRadius: 10,
        borderColor: '#fff',
        

        
    },
    inputtext:{
        width: wp('100%'),
        height: hp('5.5%'),
        paddingLeft: 10,
        
        fontSize: 20,
        fontFamily: 'Roboto-Light',
        
        color: '#fff'

    },
})

export default AppTextInput;
