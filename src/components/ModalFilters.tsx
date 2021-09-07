import React from 'react'
import { View, Text, Modal, StyleSheet, Button } from 'react-native'

/*
    TODO: Crear el modal como corresponde jaja
*/

interface Props {
    isVisible: boolean,
    onClose: () => void
}

const ModalFilters = ({ isVisible, onClose }: Props) => {
    return (
        <Modal
            hardwareAccelerated={true}
            animationType="fade"
            transparent={true}
            visible={isVisible}
            onRequestClose={() => {
                onClose();
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text>Este es el modal wachin</Text>
                    <Button
                        title="Cerrar"
                        onPress={onClose}
                    />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor:'rgba(255,255,255, 0.8)'
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
})


export default ModalFilters
