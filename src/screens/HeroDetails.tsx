import React from 'react';
import { View, Text, Image, StyleSheet, ToastAndroid, TouchableOpacity, ScrollView, Dimensions, Platform } from 'react-native';
import { useDispatch } from 'react-redux';
import Appearance from '../components/heroDetailsComponents/Appearance';
import Stats from '../components/heroDetailsComponents/Stats';
import { addTeamMember } from '../redux/actions/heroActions';
import { Hero } from '../interfaces/heroInterface';
import HeroInformation from '../components/heroDetailsComponents/HeroInformation';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';

interface RootParams {
    hero: Hero
}

const deviceWidth = Dimensions.get('window').width;
const deviceHeigth = Dimensions.get('window').height;

const HeroDetails = ({ route }) => {
    const navigator = useNavigation();
    const dispatch = useDispatch();
    const { hero }: RootParams = route.params;

    function showToast(){
        if (Platform.OS === 'android') {
            ToastAndroid.show("Hero Added!", ToastAndroid.SHORT);
        }
    };

    function addHeroToTeam(){
        dispatch(addTeamMember(hero));
        showToast();
        navigator.goBack();
    }

    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical:10 }}>
                    <TouchableOpacity onPress={() => navigator.goBack()}>
                        <Icon name="arrow-back" size={35} color='black' style={{ marginHorizontal: 10, marginTop: 5 }} />
                    </TouchableOpacity>
                    <Text style={styles.title}>{hero.name}</Text>
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
            <TouchableOpacity style={styles.addHeroButton} activeOpacity={0.7} onPress={addHeroToTeam}>
                <View style={{ flexDirection: 'row', alignItems:'center', padding: 10 }}>
                    <Icon name="add" size={30} color='white' />
                    <Text style={{fontSize:20, color:'white'}}>Add to team</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: deviceWidth * 0.40,
        height: deviceHeigth * 0.30,
        borderRadius: 20
    },
    title: {
        fontSize: 35,
        fontWeight: '700',
        marginLeft: 10
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
        backgroundColor: 'black',
        position: 'absolute',
        bottom: 20,
        right: 20
    }
})


export default HeroDetails
