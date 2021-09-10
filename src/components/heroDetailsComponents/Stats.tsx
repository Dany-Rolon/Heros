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

            <Text style={{...styles.subTitle, color:'#DC2626'}}>Combat</Text>
            <ProgressBar progress={heroStats.combat / 100} width={null} color='#DC2626'/>

            <Text style={{...styles.subTitle, color:'#64748B'}}>Durability</Text>
            <ProgressBar progress={heroStats.durability / 100} width={null} color='#64748B'/>

            <Text style={{...styles.subTitle, color:'#FBBF24'}}>Intelligence</Text>
            <ProgressBar progress={heroStats.intelligence / 100} width={null} color='#FBBF24'/>

            <Text style={{...styles.subTitle, color:'#C026D3'}}>Power</Text>
            <ProgressBar progress={heroStats.power / 100} width={null} color='#C026D3'/>

            <Text style={{...styles.subTitle, color:'#0EA5E9'}}>Speed</Text>
            <ProgressBar progress={heroStats.speed / 100} width={null} color='#0EA5E9'/>

            <Text style={{...styles.subTitle, color:'#F43F5E'}}>Strength</Text>
            <ProgressBar progress={heroStats.strength / 100} width={null} color='#F43F5E'/>

            <Text style={styles.subTitle}>Average</Text>
            <ProgressBar progress={calculateAverage() / 100} width={null} color={'#A3E635'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'600',
        textAlign:'center',
        color:'white'
    },
    subTitle: {
        fontSize: 14,
        fontWeight:'400',
        color:'#A3E635'
    }
})


export default Stats
