import React, { useState } from 'react'
import { View, FlatList, StyleSheet, TextInput } from 'react-native'
import useHeros from '../hooks/useHeros';
import Loading from '../components/Loading';
import HeroCard from '../components/HeroCard';
import Icon from 'react-native-vector-icons/Ionicons';
import useSearchHeros from '../hooks/useSearchHeros';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useFilterData from '../hooks/useFilterData';

const ListScreen = () => {
    const { isLoading } = useHeros();
    const [input, setInput] = useState<string>('');
    const { data: searchData } = useSearchHeros({ input: input, time: 500 });
    const {filteredData} = useFilterData();
    
    filteredData.forEach((item) => {
        item.biography.alignment
    })

    if (isLoading) {
        <Loading />
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.searchBar}>
                <Icon name='search' size={25} color="white" style={{ marginLeft: 15 }} />
                <TextInput
                    style={{ flexGrow: 1, paddingLeft: 20, color: 'white' }}
                    placeholder='Type your hero'
                    placeholderTextColor='white'
                    autoCompleteType='off'
                    value={input}
                    onChangeText={setInput}
                />
                {/* Filter buttom */}
                <TouchableOpacity activeOpacity={0.7} style={{ paddingHorizontal: 10 }} >
                    <Icon name="options-outline" size={25} color="white" />
                </TouchableOpacity>

                {/* Alphabetical filter buttom */}
                <TouchableOpacity activeOpacity={0.7} style={{ paddingHorizontal: 10 }} >
                    <Icon name="text-outline" size={25} color="white" />
                </TouchableOpacity>
            </View>
            <FlatList
                data={input !== '' ? searchData : filteredData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <HeroCard hero={item} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'black'
    }
})

export default ListScreen
