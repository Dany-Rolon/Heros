import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import HeroCard from '../components/HeroCard';
import { RootState } from '../redux/store';
import { useIsFocused } from '@react-navigation/native'

const MyTeam = () => {
    const myTeam = useSelector((state: RootState) => state.heros.myTeam);
    const isFocused = useIsFocused();

    useEffect(() => { }, [isFocused])

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text>
                Pantalla de mi equipo
            </Text>
            <FlatList
                style={{ marginTop: 20 }}
                data={myTeam}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <HeroCard hero={item} />}
            />
        </View>
    )
}


export default MyTeam
