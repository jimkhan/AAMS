import React from 'react'
import { StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as yup from 'yup';

import BackGround from './Background';
import AppButton from './AppButton';
import AppTextInput from './AppTextInput'
import AppText from './AppText';

const validationSchema = yup.object().shape({
    name: yup.string().required().label("Name"),
    email: yup.string().required().email().label("Email"),
    mobileNumber: yup.string().required().min(11).label("Mobile number"),
    depertment: yup.string().required().label("Depertment"),
    password: yup.string().required().min(6).label("Password"),
    confirmPassword: yup.string().required().label("Confirm Password")
        .test("Password-match", "Password not matches", function (value) {
            return this.parent.password === value;
        }),
});

const LogInScreen = () => {
    const navigation = useNavigation();
    return (
        <BackGround>

            <Formik initialValues={{
                name: '',
                email: '',
                mobileNumber: '',
                depertment: '',
                password: '',
                confirmPassword: '',

            }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleSubmit, errors }) => (
                    <>
                        <AppText style={styles.heading}>Teacher</AppText>
                        <AppText style={[styles.heading, styles.heading2]}>Resistration</AppText>
                        <AppTextInput
                            placeholder={"Full Name"}
                            icon={"person-sharp"}
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={handleChange("name")}
                            keyboardType={"email-address"}
                            textContentType={"emailAddress"}
                        />
                        {errors.name && <AppText style={styles.errorText} >{errors.name}</AppText>}
                        <AppTextInput
                            placeholder={"Email"}
                            icon={"mail"}
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={handleChange("email")}
                            keyboardType={"email-address"}
                            textContentType={"emailAddress"}
                        />
                        {errors.email && <AppText style={styles.errorText} >{errors.email}</AppText>}
                        <AppTextInput
                            placeholder={"Mobile Number"}
                            icon={"md-call"}
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={handleChange("mobileNumber")}
                            keyboardType={"phone-pad"}
                            textContentType={"emailAddress"}
                        />
                        {errors.mobileNumber && <AppText style={styles.errorText} >{errors.mobileNumber}</AppText>}
                        <AppTextInput
                            placeholder={"Depertment"}
                            icon={"md-bookmarks"}
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={handleChange("depertment")}
                            keyboardType={"email-address"}
                            textContentType={"emailAddress"}
                        />
                        {errors.depertment && <AppText style={styles.errorText} >{errors.depertment}</AppText>}

                        <AppTextInput
                            placeholder={"Password"}
                            icon={"ios-lock-closed"}
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={handleChange("password")}
                            // keyboardType={"email-address"}
                            secureTextEntry
                            textContentType={"password"}
                        />
                        {errors.password && <AppText style={styles.errorText} >{errors.password}</AppText>}
                        <AppTextInput
                            placeholder={"Confirm Password"}
                            icon={"ios-lock-closed"}
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={handleChange("confirmPassword")}
                            // keyboardType={"email-address"}
                            secureTextEntry
                            textContentType={"password"}
                        />
                        {errors.confirmPassword && <AppText style={styles.errorText} >{errors.confirmPassword}</AppText>}
                        <AppButton
                            style={styles.button}
                            name={"Sign Up"}
                            onPress={handleSubmit}
                        />

                    </>
                )}
            </Formik>

            {/* <AppText style={styles.heading}>Teacher</AppText>
            <AppText style={[styles.heading, styles.heading2]}>Resistration</AppText>
            <AppTextInput placeholder={"Full Name"} icon={"person-sharp"} />
            <AppTextInput placeholder={"Email"} icon={"mail"} />
            <AppTextInput placeholder={"Depertment"} icon={"md-bookmarks"} />
            <AppTextInput placeholder={"Mobile Number"} icon={"md-call"} />
            <AppTextInput placeholder={"Password"} icon={"ios-lock-closed"} />
            <AppTextInput placeholder={"Confirm Password"} icon={"ios-lock-closed"} />
            <AppButton style={styles.button} name={"Sign Up"} /> */}


        </BackGround>
    )
}
const styles = StyleSheet.create({

    button: {
        marginTop: hp("5%"),

    },
    errorText: {
        fontWeight: '300',
        color: '#F8D714',
        alignSelf: 'flex-start',
        paddingLeft: wp("10%"),
    },
    heading: {
        top: hp("-3%"),
        fontSize: 45,
        fontFamily: 'GillSansUltraBold',
    },
    heading2: {
        fontSize: 30,
    },

})


export default LogInScreen;
