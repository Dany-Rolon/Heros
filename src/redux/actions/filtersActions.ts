import { ActionTypes } from '../contants';

export function setAlignmentFilter(alignment: string){
    return {
        type: ActionTypes.SET_FILTER_BY_ALIGMENT,
        payload: alignment
    }
}

export function setFilterByAlphabet(character: string){
    return {
        type: ActionTypes.SET_FILTER_BY_APHABET,
        payload: character
    }
}

export function cleanFilters(){
    return{
        type:ActionTypes.CLEAN_FILTERS,
    }
}