import React from 'react'
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Appearance as AppearanceInterface } from '../../interfaces/heroInterface'
import InfoDisplay from '../InfoDisplay'

interface Props {
    appearance: AppearanceInterface,
    style?: ViewStyle
}

export default function Appearance({ appearance, style }: Props) {
    return (
        <View style={style}>
            <View>
                <InfoDisplay row title='Race' info={appearance.race} />
                <InfoDisplay row title='Gender' info={appearance.gender} />
            </View>

            <View>
                <InfoDisplay row title='Hair color' info={appearance.hairColor} />
                <InfoDisplay row title='Eye color' info={appearance.eyeColor} />
            </View>
        </View>
    )
}

