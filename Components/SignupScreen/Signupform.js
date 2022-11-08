import { View, Text, TextInput, Button, StyleSheet, Pressable } from 'react-native'
import React, {useState} from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'

const SignupForm = () => {
    const SignupFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        username: Yup.string().email().required('A username is required'),
        password: Yup.string().required()
        .min(6,'Your password has to have at least 6 characters'),
    })
    return (
        <View style={styles.wrapper}>
            <Formik
            initialValues={{email:'', username:'', password:''}}
            onSubmit={values =>{
                    console.log(values)
            }}
            validationSchema={SignupFormSchema}
            validateOnMount={true}
            >
                {({handleChange, handleBlur, handleSubmit, values, isValid}) => (
            <>
            <View style={[styles.inputField,
            {borderColor: values.email.length < 1 || validator.validate(values.email) ? '#ccc' : 'red'},
            
            ]}>
                <TextInput
                    placeholderTextColor='#444'
                    placeholder='Phone number, Username or Email'
                    autoCapitalize='none'
                    keyboardType='email-address'
                    textContentType='emailAddress'
                    onChangeText={handleChange('email')}
                    onblur={handleBlur('email')}
                    value={values.email}
                    autoFocus={true} />
            </View>
            <View
            style ={[
                styles.inputField,
                {
                    borderColor:
                    1 > values.username.length || values.username.length >= 6
                    ? '#ccc' : 'red',
                }
            ]}
            ></View>
            <View 
            style={[
                styles.inputField,
                {
                    borderColor:
                    1 > values.password.length || values.password.length >= 6
                    ? '#ccc': 'red',
                },
            ]}
            >
                <TextInput
                    placeholderTextColor='#444'
                    placeholder='Password'
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                    textContentType='password'
                    onChangeText={handleChange('email')}
                    onblur={handleBlur('email')}
                    value={values.email}
                />
            </View>
            <View style={{ alignItems: 'flex-end', marginBottom: 30 }}>
                <Text style={{ color: '#7743DB' }}>Forgot Password?</Text>
            </View>
            <Pressable titlesize= {20} 
            style={styles.button }
            onPress={handleSubmit}
            disabled={!isValid}
            >
                <Text style={styles.buttonText}>Sign up</Text>
                </Pressable>

            <View style={styles.signupContainer}>
                <Text>Already have an account? </Text>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Text style = {{color:'#7743DB'}}>Log in</Text>
                </TouchableOpacity>
            </View>
            </>
            )}
            </Formik>
        </View>

    )
}
const styles = StyleSheet.create({
    wrapper: {
        marginTop: 80,
    },
    inputField: {
        borderRadius: 4,
        padding: 12,
        backgroundColor: '#FAFAFA',
        marginBottom: 10,
        borderWidth: 1,

    },

    button:{
        backgroundColor:"#7743DB",
        alignItems:'center',
        justifyContent: 'center',
        minHeight:42,
        borderRadius:4,
    },

    buttonText: isValid => ({
        backgroundColor: isValid ? '#6C4AB6' : '#8D9EFF',
        fontWeight:'500',
        color:'#fff',
        fontSize:16,
    }),

    signupContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'centesr',
        marginTop:30,
    },

})

export default SignupForm
