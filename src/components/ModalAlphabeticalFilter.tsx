import React from 'react'
import { View, Text, Modal, FlatList, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { alphabet } from '../api/data/alphabet';
import { useDispatch } from 'react-redux';
import { setFilterByAlphabet } from '../redux/actions/filtersActions';

interface Props {
    isVisible: boolean,
    changeVisible: (value: boolean) => void
}

interface buttonProps {
    item: string
}

const ModalAlphabeticalFilter = ({ isVisible, changeVisible }: Props) => {
    const dispatch = useDispatch();
    function characterButton({ item }: buttonProps) {
        function onPressHandler() {
            dispatch(setFilterByAlphabet(item));
            changeVisible(false);
        }
        return (
            <View style={{marginVertical:20}}>
                <TouchableOpacity onPress={() => onPressHandler()}>
                    <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold', marginHorizontal: 20 }}>{item}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <Modal
            visible={isVisible}
            transparent
            animationType='fade'
        >
            <View style={styles.modalContainer}>
                <View style={styles.modal}>
                    <Text style={{textAlign:'center', fontSize:25}}>Alphabetical order</Text>
                    <Text style={{fontSize:20, textAlign:'center'}}>Select a character</Text>
                    <FlatList
                        data={alphabet}
                        keyExtractor={(item) => item}
                        renderItem={({ item }) => characterButton({ item })}
                        horizontal
                    />
                    <Button
                        title='Cerrar'
                        onPress={() => changeVisible(false)}
                    />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    modal: {
        margin: 50,
        padding: 20,
        borderRadius:10,
        backgroundColor: 'white'
    }
})

export default ModalAlphabeticalFilter
