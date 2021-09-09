import { ActionTypes } from '../contants';

export function setUser(user: string){
    return {
        type: ActionTypes.SET_USER,
        payload: user
    }
}

export function setIsLogin(isLogin: boolean){
    return {
        type: ActionTypes.SET_ISLOGIN,
        payload: isLogin
    }
}