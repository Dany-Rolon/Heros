import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { heroApi } from '../api/heroApi';
import { Hero } from "../interfaces/heroInterface";
import { setHeros } from '../redux/actions/heroActions';

export default function useHeros() {
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [data, setData] = useState<Hero[]>([]);

    async function getHeros() {
        const {data, status} = await heroApi.get('');
        setData(data);
        dispatch(setHeros(data));
        setIsLoading(false)
    }

    useEffect(() => {
        getHeros();
    }, [])

    return {
        isLoading, data
    }
}