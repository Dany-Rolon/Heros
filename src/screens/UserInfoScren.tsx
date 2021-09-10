import React from 'react'
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import Icon from 'react-native-vector-icons/Ionicons';
import { setIsLogin, setUser } from '../redux/actions/userActions';
import { cleanTeam } from '../redux/actions/heroActions';

const UserInfoScren = () => {
    const dispatch = useDispatch();
    const userEmail = useSelector((state: RootState) => state.user.email)

    function logOut(){
        dispatch(cleanTeam());
        dispatch(setUser(null));
        dispatch(setIsLogin(false));
    }

    function showAlert(){
        Alert.alert(
            "Log out",
            "Are you sure you want to log out?",
            [
                {
                    text:'Cancel',
                    style:'cancel'
                },
                {text:'Yes', onPress:() => logOut()}
            ],
            {cancelable:true}
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.title}>My profile</Text>
            <View style={styles.infoContainer}>
                <View>
                    <Text style={styles.subtitle}>Email:</Text>
                    <Text>{userEmail}</Text>
                </View>
                <TouchableOpacity activeOpacity={0.5} onPress={() => showAlert()}> 
                    <Icon
                        name="log-out-outline"
                        size={30}
                        color='black'
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: '600'
    },
    subtitle: {
        fontSize: 20
    },
    infoContainer: {
        margin: 10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
})


export default UserInfoScren
