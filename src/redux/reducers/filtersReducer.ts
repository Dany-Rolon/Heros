import { ActionTypes } from '../contants';

interface defaultStateInterface{
    alphabeticalFilter: string,
    alignmentFilter: string
}

const defaultState: defaultStateInterface = {
    alphabeticalFilter: 'a',
    alignmentFilter: 'good'
}

interface action {
    type: string,
    payload: any
}

export function filterReducer(
    state: defaultStateInterface = defaultState,
    {type, payload}: action
){
    switch (type) {
        case ActionTypes.SET_FILTER_BY_ALIGMENT:
            return {
                ...state,
                alignmentFilter: payload
            }

        case ActionTypes.SET_FILTER_BY_APHABET:
            return{
                ...state,
                alphabeticalFilter: payload
            }
        
        case ActionTypes.CLEAN_FILTERS:
            return{
                ...state,
                alphabeticalFilter:'a',
                alignmentFilter: 'Good'
            }
    
        default:
            return state
    }
}