import React from 'react'
import { View, Text, ViewStyle, StyleSheet } from 'react-native'
import { Biography } from '../../interfaces/heroInterface';

interface Props {
    biography: Biography,
    style?: ViewStyle
}

const HeroInformation = ({ biography, style }: Props) => {

    const { fullName, placeOfBirth, firstAppearance, publisher } = biography;

    return (
        <View style={style}>
            <Text style={styles.text}>
                <Text style={{ fontWeight: 'bold' }}>Fullname: </Text>
                {fullName}
            </Text>

            <Text style={styles.text}>
                <Text style={{ fontWeight: 'bold' }}>Place of birth: </Text>
                {placeOfBirth}
            </Text>

            <Text style={styles.text}>
                <Text style={{ fontWeight: 'bold' }}>First appearance: </Text>
                {firstAppearance}
            </Text>

            <Text style={styles.text}>
                <Text style={{ fontWeight: 'bold' }}>Publisher: </Text>
                {publisher}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18
    }
})


export default HeroInformation
