import React from 'react'
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Powerstats } from '../../interfaces/heroInterface'
import ProgressBar from 'react-native-progress/Bar';
interface Props {
    heroStats: Powerstats,
    style: ViewStyle
}

const Stats = ({ heroStats, style }: Props) => {

    function calculateAverage(): number {
        const total = heroStats.combat + heroStats.durability + heroStats.intelligence + heroStats.power + heroStats.speed + heroStats.strength;
        const average = total / 6;
        return average;
    }

    return (
        <View style={style}>
            <Text style={styles.title}>Stats</Text>

            <Text style={styles.subTitle}>Combat</Text>
            <ProgressBar progress={heroStats.combat / 100} width={null} />

            <Text style={styles.subTitle}>Durability</Text>
            <ProgressBar progress={heroStats.durability / 100} width={null} />

            <Text style={styles.subTitle}>Intelligence</Text>
            <ProgressBar progress={heroStats.intelligence / 100} width={null} />

            <Text style={styles.subTitle}>Power</Text>
            <ProgressBar progress={heroStats.power / 100} width={null} />

            <Text style={styles.subTitle}>Speed</Text>
            <ProgressBar progress={heroStats.speed / 100} width={null} />

            <Text style={styles.subTitle}>Strength</Text>
            <ProgressBar progress={heroStats.strength / 100} width={null} />

            <Text style={styles.subTitle}>Average</Text>
            <ProgressBar progress={calculateAverage() / 100} width={null} />
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'600',
        textAlign:'center'
    },
    subTitle: {
        fontSize: 14,
        fontWeight:'400'
    }
})


export default Stats
