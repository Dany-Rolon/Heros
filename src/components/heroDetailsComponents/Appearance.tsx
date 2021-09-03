import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Appearance as AppearanceInterface } from '../../interfaces/heroInterface'
import InfoDisplay from '../InfoDisplay'

interface Props {
    appearance: AppearanceInterface
}

export default function Appearance({ appearance }: Props) {
    return (
        <View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent:'space-between' }}>
                <InfoDisplay title='Race' info={appearance.race} />
                <InfoDisplay title='Gender' info={appearance.gender} />
                <InfoDisplay title='Hair color' info={appearance.hairColor} />
                <InfoDisplay title='Eye color' info={appearance.eyeColor} />
            </View>
        </View>
    )
}

