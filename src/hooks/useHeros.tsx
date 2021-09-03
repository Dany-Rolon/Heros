import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { heroApi } from '../api/heroApi';
import { setHeros } from '../redux/actions/heroActions';

export default function useHeros() {

    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState<boolean>(true);

    async function getHeros() {
        const { data } = await heroApi.get('');
        dispatch(setHeros(data));
        setIsLoading(false)
    }

    useEffect(() => {
        getHeros();
    }, [])

    return {
        isLoading
    }
}