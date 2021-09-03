import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
    title: string,
    info: string | null | number,
    row?: boolean
}

const InfoDisplay = ({title, info='unknow', row=false}: Props) => {
    return (
        <View style={row ? {flexDirection:'row'} : null}>
            <Text style={{ ...styles.subtitle, fontWeight: 'bold' }}>{title}{row ? ': ' : null}</Text>
            <Text style={styles.subtitle}>{info}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    subtitle: {
        fontSize: 20,
        fontWeight: '400',
        color:'white'
    }
})

export default InfoDisplay
