import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import Appearance from '../components/heroDetailsComponents/Appearance';
import Stats from '../components/heroDetailsComponents/Stats';
import InfoDisplay from '../components/InfoDisplay';
import { RootState } from '../redux/store';

const windowHeigth = Dimensions.get('window').height;

const HeroDetails = () => {
    const hero = useSelector((state: RootState) => state.heros.hero);

    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'rgba(64, 64, 52, 1)' }}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: hero.images.lg }}
                    style={styles.image}
                    resizeMode='stretch'
                />
            </View>
            
            {/* Hero name */}
            <Text style={styles.title}>{hero.name}</Text>
            
            <View style={{ marginHorizontal: 10 }}>
                {/* Appearance */}
                <View style={{ marginVertical: 5 }}>
                    <Appearance appearance={hero.appearance} />
                </View>

                {/* Occupation */}
                <View style={{ marginVertical: 5 }}>
                    <InfoDisplay title='Occupation' info={hero.work.occupation} />
                </View>

                {/* Stats */}
                <View style={{ marginVertical: 5 }}>
                    <Stats heroStats={hero.powerstats} />
                </View>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: windowHeigth * 0.45
    },
    image: {
        width: '100%',
        height: '100%'
    },
    infoContainer: {
        paddingHorizontal: 15,
    },
    title: {
        fontSize: 40,
        fontWeight: '600',
        textAlign: 'center',
        backgroundColor: 'white', 
        color: 'rgba(64, 64, 52, 1)', 
        borderBottomRightRadius:20, 
        borderBottomLeftRadius:20
    },
    subtitle: {
        fontSize: 25,
        fontWeight: '400'
    }
})


export default HeroDetails
