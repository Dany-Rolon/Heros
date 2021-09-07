import React from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'

const Loading = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator 
                size={40}
                color='black'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default Loading
