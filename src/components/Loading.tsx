import React from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'
import { colors } from '../theme/colors';

const Loading = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator 
                size={40}
                color={colors.ligth}
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
