import {useSelector} from 'react-redux';
import { Hero } from '../interfaces/heroInterface';
import { RootState } from '../redux/store';

const useAmIinTheTeam = () => {
    const herosFromState = useSelector((state: RootState) => state.heros);
    const {hero1, hero2, hero3, villain1, villain2, villain3} = herosFromState;
    const arrayMyTeam = [ hero1, hero2, hero3, villain1, villain2, villain3 ];

    function amIinTheTeam(hero: Hero): boolean{
        return arrayMyTeam.includes(hero);
    }

    return{
        amIinTheTeam
    }
}

export default useAmIinTheTeam
