import { ActionTypes } from '../contants';

interface defaultStateInterface {
    email: string | null;
    isLogin: boolean
}

interface action {
    type: string,
    payload: any
}

const defaultState: defaultStateInterface = {
    email: null,
    isLogin: false
}

export function userReducer(
    state: defaultStateInterface = defaultState,
    {type, payload}: action
){
    switch (type) {
        case ActionTypes.SET_USER:
            return {
                ...state,
                email: payload
            }
        case ActionTypes.SET_SELECTING_HERO:
            return{
                ...state,
                selecting: payload
            }
        case ActionTypes.SET_ISLOGIN:
            return {
                ...state,
                isLogin: payload
            }
        default:
            return state
    }
}