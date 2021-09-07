import React, { useState } from 'react'
import { View, StyleSheet, TextInput, FlatList, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import useSearchHeros from '../hooks/useSearchHeros';
import HeroCard from '../components/HeroCard';
import LinearGradient from 'react-native-linear-gradient';

const SearchScreen = () => {

    const [input, setInput] = useState<string>('');
    const { data, founded } = useSearchHeros({ input: input, time: 750 });

    return (

        <View>
            <View>
                <TextInput
                    style={{ flexGrow: 1, paddingLeft: 20, color: 'white' }}
                    placeholder='Type your hero'
                    placeholderTextColor='white'
                    autoCompleteType='off'
                    autoFocus={true}
                    value={input}
                    onChangeText={setInput}
                />
                <Icon name='search' size={20} color="white" style={{ marginRight: 15 }} />
            </View>

            {/* Results */}
            {
                founded ? (
                    <FlatList
                        style={{ marginBottom: 50 }}
                        data={data}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => <HeroCard hero={item} />}
                        numColumns={2}
                    />
                ) : (
                    <Text>Heros will show here</Text>
                )
            }
        </View>
    )
}

export default SearchScreen
