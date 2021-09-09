import { ActionTypes } from '../contants';

interface defaultStateInterface{
    alphabeticalFilter: string,
    alignmentFilter: string
}

const defaultState: defaultStateInterface = {
    alphabeticalFilter: 'a',
    alignmentFilter: 'Good'
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
    
        default:
            return state
    }
}