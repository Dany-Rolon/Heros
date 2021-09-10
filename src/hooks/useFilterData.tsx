import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Hero } from '../interfaces/heroInterface';
import { useState, useEffect } from 'react';

export default function useFilterData(){
    const heros = useSelector((state: RootState) => state.heros.heros);
    const {alignmentFilter, alphabeticalFilter} = useSelector((state:RootState) => state.filter);
    const [filteredData, setFilteredData] = useState<Hero[]>(heros);

    useEffect(() => {
        setFilteredData(heros);
        filter();
    }, [])

    useEffect(() => {
        filter()
    },[alignmentFilter, alphabeticalFilter, heros])

    function filter(){
        const alignmentResult = heros.filter(item => item.biography.alignment.toString() === alignmentFilter)
        const alphabeticalResult = alignmentResult.filter(item => item.name.toLowerCase().startsWith(alphabeticalFilter))

        setFilteredData(alphabeticalResult)
    }

    return{
        filteredData
    }
}


