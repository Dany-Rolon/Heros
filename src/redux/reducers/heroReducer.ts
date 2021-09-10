import { Hero } from "../../interfaces/heroInterface";
import { ActionTypes } from "../contants";

interface defaultStateInterface {
    heros: Hero[],
    hero1: Hero | null,
    hero2: Hero | null,
    hero3: Hero | null,
    villain1: Hero | null,
    villain2: Hero | null,
    villain3: Hero | null,
    selecting: string
}

interface action {
    type: string,
    payload: any
}

const defaultState: defaultStateInterface = {
    heros: [],
    hero1: null,
    hero2: null,
    hero3: null,
    villain1: null,
    villain2: null,
    villain3: null,
    selecting: 'hero1'
}

export function herosReducer(
    state: defaultStateInterface = defaultState,
    { type, payload }: action
) {
    switch (type) {
        case ActionTypes.SET_HEROS:
            return {
                ...state,
                heros: payload
            }
        case ActionTypes.ADD_TEAM_MEMBER:
            return {
                ...state,
                [state.selecting]: payload 
            }
        case ActionTypes.SET_SELECTING_HERO:
            return {
                ...state,
                selecting: payload
            }
        case ActionTypes.DELETE_TEAM_MEMBER:
            return {
                ...state,
                [memberSpace(state, payload)]: null
            }
        case ActionTypes.CLEAN_TEAM:
            return {
                ...state,
                hero1: null, hero2: null, hero3: null,
                villain1: null, villain2: null, villain3: null, selecting:'hero1'
            }
        default:
            return state
    }
}

function memberSpace(state: defaultStateInterface, hero: Hero): string{
    let memberSpace: string;
    state.hero1 === hero ? memberSpace = 'hero1' : null; 
    state.hero2 === hero ? memberSpace = 'hero2' : null; 
    state.hero3 === hero ? memberSpace = 'hero3' : null; 
    state.villain1 === hero ? memberSpace = 'villain1' : null; 
    state.villain2 === hero ? memberSpace = 'villain2' : null; 
    state.villain3 === hero ? memberSpace = 'villain3' : null;
    return memberSpace!; 
}