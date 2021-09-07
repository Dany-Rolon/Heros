import { Hero } from "../../interfaces/heroInterface";
import { ActionTypes } from "../contants";

interface defaultStateInterface {
    heros: Hero[],
    myTeam: Hero[]
}

interface action {
    type: string,
    payload: any
}

const defaultState: defaultStateInterface = {
    heros: [],
    myTeam: []
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
        case ActionTypes.ADD_TEAM_MEMBER:
            let newArray = state.myTeam
            newArray.push(payload);
            return{
                ...state,
                myTeam: newArray
            }
        default:
            return state
    }
}