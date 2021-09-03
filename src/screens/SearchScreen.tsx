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
        <LinearGradient style={{flex:1}} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#21201d', '#533c36', '#dd3e11']}>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={{ flexGrow: 1, paddingLeft: 20, color:'white' }}
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
                        <Text style={styles.fallback}>Heros founded will show here</Text>
                    )
                }
            </View>
        </LinearGradient>
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
        borderWidth: 2,
        borderColor: 'white',
        padding: 0,
        margin: 0,
        borderRadius: 20,
        width: '90%'
    },
    list: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    fallback: {
        marginTop: 50,
        fontSize:23,
        fontWeight:'600',
        color:'white',
    }
})


export default SearchScreen
