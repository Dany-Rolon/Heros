import { ActionTypes } from "../contants";
import { Hero } from '../../interfaces/heroInterface';

export function setHeros(heros: Hero[]){
    return {
        type: ActionTypes.SET_HEROS,
        payload: heros
    }
}

export function setHeroDetailsId(hero: Hero){
    return {
        type: ActionTypes.SET_HERO_DETAILS_ID,
        payload: hero
    }
}