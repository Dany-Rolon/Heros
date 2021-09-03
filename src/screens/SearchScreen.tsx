import React, { useState } from 'react'
import { View, StyleSheet, TextInput, FlatList, ScrollView, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import useSearchHeros from '../hooks/useSearchHeros';
import HeroCard from '../components/HeroCard';

const SearchScreen = () => {

    const [input, setInput] = useState<string>('');
    const {data, founded} = useSearchHeros({ input: input, time: 750 });

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={{ flexGrow: 1, paddingLeft: 20 }}
                    placeholder='Type your hero'
                    autoCompleteType='off'
                    autoFocus={true}
                    value={input}
                    onChangeText={setInput}
                />
                <Icon name='search' size={20} color="black" style={{ marginRight: 15 }} />
            </View>

            {/* Results */}
            {
                founded ? (
                    <FlatList
                        style={{marginBottom:50}}
                        data={data}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => <HeroCard hero={item} />}
                        numColumns={2}
                    />
                ) : (
                    <Text style={{marginTop:10}}>Heros founded will show here</Text>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 20
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'grey',
        padding: 0,
        margin: 0,
        borderRadius: 20,
        width: '90%'
    },
    list: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})


export default SearchScreen
