import React from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'

const Loading = () => {
    console.log('Is loading');
    return (
        <View style={styles.container}>
            <ActivityIndicator 
                size={40}
                color='#A3E635'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#171717'
    }
})


export default Loading
