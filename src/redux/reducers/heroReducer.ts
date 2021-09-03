import { Hero } from "../../interfaces/heroInterface";
import { ActionTypes } from "../contants";

interface defaultStateInterface {
    heros: Hero[],
    hero: Hero | {}
}

interface action {
    type: string,
    payload: any
}

const defaultState: defaultStateInterface = {
    heros: [],
    hero: {}
}

export function herosReducer(
    state:defaultStateInterface = defaultState, 
    {type, payload}: action
){
    switch (type) {
        case ActionTypes.SET_HEROS:
            return {
                ...state,
                heros: payload
            }
        case ActionTypes.SET_HERO_DETAILS_ID:
            return {
                ...state,
                hero: payload
            }
        default:
            return state
    }
}