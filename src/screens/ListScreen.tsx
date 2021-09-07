import React, { useEffect, useState } from 'react'
import { View, FlatList, StyleSheet, TextInput } from 'react-native'
import useHeros from '../hooks/useHeros';
import Loading from '../components/Loading';
import HeroCard from '../components/HeroCard';
import Icon from 'react-native-vector-icons/Ionicons';
import useSearchHeros from '../hooks/useSearchHeros';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ModalFilters from '../components/ModalFilters';

const ListScreen = () => {
    const { data, isLoading } = useHeros();
    const [input, setInput] = useState<string>('');
    const { data: searchData } = useSearchHeros({ input: input, time: 500 });
    const [isFiltersVisible, setIsFiltersVisible] = useState<boolean>(false);
    const [isFiltersAlphabeticalVisible, setIsFiltersAlphabeticalVisible] = useState<boolean>(false)

    if (isLoading) {
        <Loading />
    }

    function onFilterClose(){
        setIsFiltersVisible(false);
    }

    function onFilterAlphabeticalClose(){
        setIsFiltersAlphabeticalVisible(false);
    }

    return (
        <View style={{ flex: 1 }}>
            <ModalFilters isVisible={isFiltersVisible} onClose={onFilterClose} />
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
                <TouchableOpacity activeOpacity={0.7} style={{ paddingHorizontal: 10 }} onPress={() => setIsFiltersVisible(true)}>
                    <Icon name="options-outline" size={25} color="white" />
                </TouchableOpacity>

                {/* Alphabetical filter buttom */}
                <TouchableOpacity activeOpacity={0.7} style={{ paddingHorizontal: 10 }} onPress={() => setIsFiltersAlphabeticalVisible(true)}>
                    <Icon name="text-outline" size={25} color="white" />
                </TouchableOpacity>
            </View>
            <FlatList
                data={input !== '' ? searchData : data}
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
