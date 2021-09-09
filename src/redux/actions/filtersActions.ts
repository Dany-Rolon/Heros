import { ActionTypes } from '../contants';

export function setAlignmentFilter(alignment: string){
    return {
        type: ActionTypes.SET_FILTER_BY_ALIGMENT,
        payload: alignment
    }
}