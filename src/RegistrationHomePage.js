import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { useNavigation } from '@react-navigation/native';

import BackGround from './Background';
import AppButton from './AppButton';
import AppText from './AppText';

const RegistrationHomePage = () => {
    const navigation = useNavigation();
    return (
        <BackGround>
            <View style={styles.headertext}>
                <AppText style={styles.title} >Register</AppText>
            </View>
            <View style={styles.container}>
                <AppButton 
                    onPress={() => navigation.navigate('TeacherRegistration')}
                    style={styles.button} 
                    textStyle={styles.txtButton} 
                    name={"Teacher"}/>
                <View style={styles.textview}>
                    <AppText style={styles.txt}>or</AppText>
                </View>
                <AppButton 
                    onPress={() => navigation.navigate('StudentRegistration')}
                    style={styles.button} 
                    textStyle={styles.txtButton} 
                    name={"Student"} />

            </View>
            
        </BackGround>
    )
}
const styles = StyleSheet.create({
    container:{
        
        width: wp('90%'),
        height: hp('45%'),
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        
        // backgroundColor: 'rgba(255,20,106,.8)',

    },
    title:{
        fontSize: 50,
        fontFamily: 'GillSansUltraBold',
    },
    textview:{
        // margin: 10,
    },
    headertext:{
     top: hp("-10%"),
    },
    txt:{
        color: "#fff",
        fontSize: 30,
        fontFamily: 'GillSansUltraBold'
    },
    button:{
        margin: hp("3%"),
        height: hp("7%"),
        borderColor: "#fff",
        borderWidth: 1,
        backgroundColor: 'rgba(255,20,106,.8)',
        

    },
    txtButton:{
        fontFamily: 'GillSansUltraBold',
        fontSize: 28,
    }
})

export default RegistrationHomePage;
