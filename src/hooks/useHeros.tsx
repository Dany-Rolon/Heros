import { useEffect, useState } from "react";
import { Platform, ToastAndroid } from "react-native";
import { useDispatch } from 'react-redux';
import { heroApi } from '../api/heroApi';
import { Hero } from "../interfaces/heroInterface";
import { setHeros } from '../redux/actions/heroActions';

export default function useHeros() {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [data, setData] = useState<Hero[]>([]);

    function showToast(){
        if (Platform.OS === 'android') {
            ToastAndroid.show("Unable to obtain the list of heroes", ToastAndroid.CENTER);
        }
    };

    async function getHeros() {
        const {data, status} = await heroApi.get('');
        if(status === 200){
            setData(data);
            dispatch(setHeros(data));
        } else {
            showToast(); //TODO: Averiguar alternativa para IOS
        }
        setIsLoading(false)
    }

    useEffect(() => {
        getHeros();
    }, [])

    return {
        isLoading, data
    }
}