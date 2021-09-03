import {createStore} from 'redux';
import { Hero } from '../interfaces/heroInterface';
import reducers from './reducers';

const store = createStore(
    reducers, {}
)

export default store

// export type RootState = ReturnType<typeof store.getState>

export interface RootState {
    heros:{
        heros: Hero[],
        hero: Hero
    }
}
