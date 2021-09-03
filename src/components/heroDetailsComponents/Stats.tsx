import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Powerstats } from '../../interfaces/heroInterface'
import InfoDisplay from '../InfoDisplay'

interface Props {
    heroStats: Powerstats
}

const Stats = ({ heroStats }: Props) => {

    function calculateAverage(): string {
        const total = heroStats.combat + heroStats.durability + heroStats.intelligence + heroStats.power + heroStats.speed + heroStats.strength;
        const average = total / 6;
        return average.toFixed();
    }

    return (
        <View style={{ alignItems: 'center', justifyContent: 'space-between', marginTop:20 }}>
            {/* Stast */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
                <View>
                    <InfoDisplay title='Combat' info={heroStats.combat} row />
                    <InfoDisplay title='Durability' info={heroStats.durability} row />
                    <InfoDisplay title='Intelligence' info={heroStats.intelligence} row />
                </View>
                <View>
                    <InfoDisplay title='Power' info={heroStats.power} row />
                    <InfoDisplay title='Speed' info={heroStats.speed} row />
                    <InfoDisplay title='Strength' info={heroStats.strength} row />
                </View>
            </View>

            {/* Average */}
            <View style={styles.averageContainer}>
                <InfoDisplay title='Average' info={calculateAverage()} row />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    averageContainer: {
        marginTop: 25,
        padding: 8,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'white'
    }
})


export default Stats
