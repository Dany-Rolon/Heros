import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import { singUpValidationSchema } from '../forms/singUpValidationSchema'
import { Formik, Field } from 'formik'
import CustomInput from './CustomInput'
import { useDispatch } from 'react-redux';
import { setIsLogin, setUser } from '../redux/actions/userActions';

interface Props {
    register?: boolean,
    isLoading: (state: boolean) => void
}

const LoginForm = ({ register, isLoading }: Props) => {

    const dispatch = useDispatch();

    function onSubmitHandler(values: any) {
        isLoading(true);
        setTimeout(() => {
            if (values.email === 'dany@mail.com' && values.password === '123456aB@') {
                dispatch(setIsLogin(true));
                dispatch(setUser(values.email));
                isLoading(false);
            } else {
                isLoading(false)
                ToastAndroid.show('Wrong credentials', ToastAndroid.TOP);
            }
        }, 2000)
    }

    return (
        <View style={{ padding: 20 }}>
            <Formik
                validationSchema={singUpValidationSchema}
                initialValues={{
                    email: '',
                    password: '',
                    confirmPassword: ''
                }}
                onSubmit={values => onSubmitHandler(values)}>
                {({ handleSubmit, isValid, values, dirty }) => (
                    <>
                        <Field
                            component={CustomInput}
                            name="email"
                            placeholder='email@mail.com'
                            keyboardType="email-address"
                        />
                        <Field
                            component={CustomInput}
                            name="password"
                            placeholder='Password'
                            secureTextEntry
                        />
                        {
                            register ? (
                                <Field
                                    component={CustomInput}
                                    name="confirmPassword"
                                    placeholder='Confirm password'
                                    secureTextEntry
                                />
                            ) : null
                        }
                        {/* Submit buttom */}
                        <TouchableOpacity
                            style={[
                                (dirty && isValid) ? styles.button : styles.invalidButton,
                            ]}
                            activeOpacity={0.7}
                            onPress={handleSubmit}
                            disabled={!isValid || values.email === ''}
                        >
                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>
                    </>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white',
        marginTop: 10
    },
    buttonText: {
        fontWeight: '600',
        fontSize: 16,
        color: 'white',
    },
    input: {
        flexGrow: 1,
        backgroundColor: 'rgba(255,255,255,0.6)',
        borderRadius: 5
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',
        borderRadius: 10,
        paddingVertical: 10,
        marginTop: 20
    },
    invalidButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: 10,
        paddingVertical: 10,
        marginTop: 20
    }
})

export default LoginForm
