import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Hero } from '../interfaces/heroInterface'
import { useDispatch } from 'react-redux';
import { setSelectingHero } from '../redux/actions/heroActions';
import { useNavigation, useIsFocused } from '@react-navigation/core';
import { setAlignmentFilter } from '../redux/actions/filtersActions';
import { useEffect } from 'react';

interface Props {
    hero: Hero | null,
    teamMemberId: number,
    memberType: string
}

const HeroMemberView = ({ hero, teamMemberId, memberType }: Props) => {
    const isFocus = useIsFocused();
    const dispatch = useDispatch();
    const navigator = useNavigation() as any;
    const firstName = hero?.name.split(' ');

    function onPressHandler(){
        dispatch(setSelectingHero(`${memberType}${teamMemberId}`));
        dispatch(setAlignmentFilter(memberType === 'hero' ? 'good' : 'bad'));
        navigator.navigate('Hero list');
    }

    function onLongPressHandler(){
        if(hero){
            navigator.navigate('Details', {hero})
        }
    }

    useEffect(() => {}, [isFocus]) // React navigator al parecer tiene problemas con re-renderear el componente cuando hay un cambio en el estado producido en otra screen, con esto fuerzo el re-render para que el cambio sea visible

    return (
        <TouchableOpacity 
            style={styles.memberContainer} 
            activeOpacity={0.7} 
            onPress={() => onPressHandler()}
            onLongPress={() => onLongPressHandler()}
        >
            <View style={styles.heroContainer}>
                {hero ? (<Image source={{ uri: hero.images.md }} style={styles.image} />) : null}
            </View>
            <Text style={styles.title}>{hero ? firstName![0] : 'Select a hero'}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    memberContainer:{
        justifyContent:'center',
        alignItems:'center'
    },
    heroContainer: {
        borderWidth: 4,
        borderRadius: 10,
        height: 80,
        width: 80,
    },
    image: {
        width: '100%',
        height: '100%',
        overflow:'hidden',
        borderRadius:5,
    },
    title:{
        textAlign:'center',
        marginBottom: 20
    }
})

export default HeroMemberView
