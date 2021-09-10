import React, { useEffect } from 'react';
import { View, Text, StyleSheet, PixelRatio } from 'react-native';
import { useIsFocused } from '@react-navigation/native'
import useMyTeamStats from '../hooks/useMyTeamStats';
import HeroMemberView from '../components/HeroMemberView';
import ProgressBar from 'react-native-progress/Bar';

const MyTeam = () => {
    const isFocused = useIsFocused();
    const { hero1, hero2, hero3, villain1, villain2, villain3, getTeamAverage } = useMyTeamStats();

    useEffect(() => { }, [isFocused])

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={styles.title}>My team</Text>
            <View style={styles.container}>
                {/* Heros */}
                <View>
                    <Text style={styles.subtitle}>Heros</Text>
                    <HeroMemberView hero={hero1} teamMemberId={1} memberType='hero' />
                    <HeroMemberView hero={hero2} teamMemberId={2} memberType='hero' />
                    <HeroMemberView hero={hero3} teamMemberId={3} memberType='hero' />
                </View>

                {/* Villains */}
                <View>
                    <Text style={styles.subtitle}>Villains</Text>
                    <HeroMemberView hero={villain1} teamMemberId={1} memberType='villain' />
                    <HeroMemberView hero={villain2} teamMemberId={2} memberType='villain' />
                    <HeroMemberView hero={villain3} teamMemberId={3} memberType='villain' />
                </View>
            </View>
            <View style={{width:'80%'}}>
                <Text style={styles.subtitle}>Team Average</Text>
                <ProgressBar progress={Number(getTeamAverage())/100} width={null} color={'#A3E635'}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'#A3E635',
        marginTop:20
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 10,
        color:'#A3E635'
    },
    container: {
        width: '100%',
        paddingHorizontal: 30,
        marginTop: 20,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    heroContainer: {
        borderWidth: 2,
        borderRadius: 10,
        height: PixelRatio.getPixelSizeForLayoutSize(80),
        width: PixelRatio.getPixelSizeForLayoutSize(80),
        marginBottom: 20
    }
})

export default MyTeam
