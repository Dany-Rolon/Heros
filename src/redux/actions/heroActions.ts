import { ActionTypes } from "../contants";
import { Hero } from '../../interfaces/heroInterface';

export function setHeros(heros: Hero[]) {
    return {
        type: ActionTypes.SET_HEROS,
        payload: heros
    }
}

export function addTeamMember(hero: Hero) {
    return {
        type: ActionTypes.ADD_TEAM_MEMBER,
        payload: hero
    }
}

export function setSelectingHero(payload: string){
    console.log(`Cambiando el estado de selecting a: ${payload}`)
    return{
        type:ActionTypes.SET_SELECTING_HERO,
        payload
    }
}