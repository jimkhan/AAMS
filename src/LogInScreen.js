import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as yup from 'yup';

import BackGround from './Background';
import AppButton from './AppButton';
import AppTextInput from './AppTextInput'
import AppText from './AppText';

const validationSchema = yup.object().shape({
    email: yup.string().required().email().label("Email"),
    password: yup.string().required().label("Password"),
});

const LogInScreen = () => {
    const navigation = useNavigation();
    return (
        <BackGround>
            <Formik initialValues={{ email: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleSubmit, errors}) => (
                    <>
                        <AppText style={styles.heading}>WELCOME</AppText>
                        <AppTextInput
                            placeholder={"Email"} 
                            icon={"mail"}
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={handleChange("email")}
                            keyboardType={"email-address"}
                            textContentType={"emailAddress"}
                         />
                        { errors.email && <AppText style={styles.errorText} >{errors.email}</AppText>}
                        <AppTextInput 
                            placeholder={"Password"} 
                            icon={"ios-lock-closed"}
                            autoCapitalize="none"
                            autoCorrect= {false}
                            onChangeText={handleChange("password")}
                            secureTextEntry
                            textContentType={"password"}
                        />
                        { errors.password && <AppText style={styles.errorText} >{errors.password}</AppText>}
                        <AppButton style={styles.button} name={"Log in"} onPress={() => { handleSubmit, navigation.navigate('StudentHome')} } />
                        <AppText style={styles.bottomtext}>Not a member?
            {<TouchableOpacity style={styles.signupView} onPress={() => navigation.navigate('RegistrationHomePage')}><AppText style={styles.signup}>SignUp</AppText></TouchableOpacity>}here</AppText>


                    </>
                )}
            </Formik>


        </BackGround>
    )
}
const styles = StyleSheet.create({
    signupView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        marginTop: hp('8%'),
        marginBottom: hp('4%'),
    },
    bottomtext: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    errorText:{
        fontWeight: 'bold',
        color: '#F8D714',
        alignSelf: 'flex-start', 
        paddingLeft: wp("10%"),
    },
    text: {
        color: '#fff',
        fontSize: 40,
        alignSelf: 'center',
    },
    signup: {

        color: 'yellow',
        fontWeight: 'bold',
        fontSize: 20,
    },
    heading: {
        fontSize: 45,
        fontFamily: 'GillSansUltraBold',
        top: -40,

    },

})


export default LogInScreen;
