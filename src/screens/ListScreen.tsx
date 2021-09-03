import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { styles } from '../theme/globalStyles';
import useHeros from '../hooks/useHeros';
import Loading from '../components/Loading';
import HeroCard from '../components/HeroCard';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const ListScreen = () => {

    const { isLoading } = useHeros();
    const data = useSelector((state: RootState) => state.heros.heros);

    if(isLoading){
        <Loading />
    }

    return (
        <View style={{...styles.container, ...stylesList.list}}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <HeroCard hero={item}/>}
                numColumns={2}
            />
        </View>
    )
}

const stylesList = StyleSheet.create({
    list:{
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default ListScreen
