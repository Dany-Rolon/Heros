import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from '../redux/store';
import { Hero } from '../interfaces/heroInterface';

interface Props {
    input: string,
    time: number
}

export default function useSearchHeros({input, time}: Props){
    const heros = useSelector((state: RootState) => state.heros.heros);

    const [data, setData] = useState<Hero[]>([]);
    const [founded, setFounded] = useState<boolean>(false)

    function getSearchingHeros(){
        const result = heros.filter((hero) => hero.name.toLowerCase().includes(input.toLowerCase()));
        setData(result);
    }   

    useEffect(() => {
        const timeout = setTimeout(() => {
            if(input !== ''){
                getSearchingHeros();
                setFounded(true);
            }  else {
                setFounded(false);
                setData([]);
            }
        }, time);

        return () => {
            clearTimeout(timeout);
        }
    }, [input])
    
    return {data, founded}
    
}