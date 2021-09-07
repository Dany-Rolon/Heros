import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Hero } from '../interfaces/heroInterface'
import ProgressBar from 'react-native-progress/Bar';
import { colors } from '../theme/colors'
import useStats from '../hooks/useStats';

interface Props {
    hero: Hero
}

const HeroCard = ({ hero }: Props) => {
    const navigator = useNavigation() as any;
    const { getAverage } = useStats();

    return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => navigator.navigate('Details', { hero })}>
            <View style={styles.card}>
                <Image
                    source={{ uri: hero.images.sm }}
                    style={styles.image}
                />
                {/* Information */}
                <View style={styles.information}>
                    {/* Name and alignment */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.name}>{hero.name}</Text>
                        <Text style={{...styles.name, }}>{hero.biography.alignment}</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.info}>{hero.biography.publisher}</Text>
                    </View>

                    {/* Power */}
                    <View style={{ flexDirection: 'row', alignItems:'center' }}>
                        <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Power:</Text>
                        <View style={{ flexGrow: 1, marginLeft: 10 }}>
                            <ProgressBar progress={getAverage(hero.powerstats) / 100} width={null} />
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 7,
        marginHorizontal: 20,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 10,
    },
    information: {
        marginHorizontal: 10,
        flexGrow: 1
    },
    name: {
        fontSize: 17,
        fontWeight: '600',
    },
    info:{
        fontSize:13,
        fontWeight:'400'
    }
})


export default HeroCard
