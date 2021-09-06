import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import HeroCard from '../components/HeroCard';
import { RootState } from '../redux/store';
import useStats from '../hooks/useStats';
import { useIsFocused } from '@react-navigation/native'

const MyTeam = () => {
    const myTeam = useSelector((state: RootState) => state.heros.myTeam);
    const isFocused = useIsFocused();
    const {combat, durability, intelligence, power, speed, strength} = useStats();

    useEffect(() => {},[isFocused])

    return (
        <LinearGradient style={{flex:1}} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#21201d', '#533c36', '#dd3e11']}>
            <View style={{flex:1, alignItems:'center'}}>
                <FlatList
                    style={{ marginTop:20 }}
                    data={myTeam}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <HeroCard hero={item} />}
                    numColumns={2}
                />
            </View>
        </LinearGradient>
    )
}


export default MyTeam
