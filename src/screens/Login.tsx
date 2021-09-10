import React, { useState } from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import Loading from '../components/Loading'
import LoginForm from '../components/LoginForm'

const Login = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isRegistering, setIsRegistering] = useState<boolean>(true);

    return (
        <View style={{ flex: 1 }}>
            {
                isLoading ? (
                    <Loading />
                ) : (
                    <ImageBackground
                        source={require('../assets/img/fondoHeroApp.jpg')}
                        style={styles.image}
                    >
                        {/* Title */}
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>Hero App</Text>
                        </View>

                        {/* Form */}
                        <View style={styles.formContainer}>
                            <Text style={styles.subTitle}>{isRegistering ? 'Sign Up' : 'Sign In'}</Text>
                            <LoginForm register={isRegistering} isLoading={setIsLoading}/>

                            {/* Login or Register switch button */}
                            <TouchableOpacity activeOpacity={0.7} onPress={() => setIsRegistering(!isRegistering)}>
                                <Text style={{fontSize:15, color:'white', textAlign:'center'}}>
                                    {isRegistering ? 'Have an account? Sign in' : 'Dont have an account? Sign up'}
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </ImageBackground>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '15%'
    },
    title: {
        fontSize: 40,
        fontWeight: '700',
        color: 'black'
    },
    subTitle: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        color: '#A3E635'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    formContainer: {
        padding: 10,
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0.8)',
        marginHorizontal: '10%'
    }
})


export default Login
