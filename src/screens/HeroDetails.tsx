import React from 'react';
import { View, Text, Image, StyleSheet, ToastAndroid, TouchableOpacity, ScrollView, Dimensions, Platform } from 'react-native';
import { useDispatch } from 'react-redux';
import Appearance from '../components/heroDetailsComponents/Appearance';
import Stats from '../components/heroDetailsComponents/Stats';
import { addTeamMember, deleteTeamMember } from '../redux/actions/heroActions';
import { Hero } from '../interfaces/heroInterface';
import HeroInformation from '../components/heroDetailsComponents/HeroInformation';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, } from '@react-navigation/core';
import useAmIinTheTeam from '../hooks/useAmIinTheTeam';

interface RootParams {
    hero: Hero
}

const deviceWidth = Dimensions.get('window').width;
const deviceHeigth = Dimensions.get('window').height;

const HeroDetails = ({ route }) => {
    const navigator = useNavigation() as any;
    const dispatch = useDispatch();
    const { hero }: RootParams = route.params;
    const { amIinTheTeam } = useAmIinTheTeam();

    function showToast(message: string) {
        if (Platform.OS === 'android') {
            ToastAndroid.show(message, ToastAndroid.SHORT);
        }
    };

    function addHeroToTeam() {
        dispatch(addTeamMember(hero));
        showToast('Hero added!');
        navigator.navigate('My Team');
    }

    function deleteHeroFromTeam() {
        dispatch(deleteTeamMember(hero));
        showToast('Hero deleted');
        navigator.navigate('My Team');
    }

    return (
        <View style={{ flex: 1, backgroundColor:'#171717' }}>
            <ScrollView>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 10 }}>
                    {/* Back button  and Hero's name */}
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigator.goBack()}>
                            <Icon name="arrow-back" size={35} color='#A3E635' style={{ marginHorizontal: 10, marginTop: 5 }} />
                        </TouchableOpacity>
                        <Text style={styles.title}>{hero.name}</Text>
                    </View>
                    {/* add to team button */}
                    <TouchableOpacity style={styles.addHeroButton} activeOpacity={0.7} onPress={amIinTheTeam(hero) ? deleteHeroFromTeam : addHeroToTeam}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                            {
                                amIinTheTeam(hero) ? (
                                    <Icon name="trash-outline" size={28} color='#171717' />
                                ) : (
                                    <Icon name="add" size={28} color='#171717' />
                                )
                            }
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.cardContainer}>
                    <Image
                        source={{ uri: hero.images.sm }}
                        style={styles.image}
                    />
                    <Stats heroStats={hero.powerstats} style={styles.stats} />
                </View>

                <HeroInformation biography={hero.biography} style={styles.heroInformation} />

                <Appearance appearance={hero.appearance} style={styles.appearance} />

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: deviceWidth * 0.40,
        height: deviceHeigth * 0.30,
        borderRadius: 20
    },
    title: {
        fontSize: 35,
        fontWeight: '700',
        marginLeft: 10,
        color:'#A3E635'
    },
    heroInformation: {
        marginHorizontal: 10,
        marginVertical: 5,
        justifyContent: 'space-evenly'
    },
    stats: {
        flexGrow: 1,
        marginHorizontal: 10,
    },
    appearance: {
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    addHeroButton: {
        borderRadius: 10,
        backgroundColor: '#A3E635',
        marginRight: 5
    }
})


export default HeroDetails
