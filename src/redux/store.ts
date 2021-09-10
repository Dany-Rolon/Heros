import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { Hero } from '../interfaces/heroInterface';
import reducers from './reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
export interface RootState {
    heros: {
        heros: Hero[],
        hero1: Hero | null,
        hero2: Hero | null,
        hero3: Hero | null,
        villain1: Hero | null,
        villain2: Hero | null,
        villain3: Hero | null,
        selecting: string,
    }
    user: {
        email: string,
        isLogin: boolean
    },
    filter: {
        alphabeticalFilter: string,
        alignmentFilter: string
    }
}

const persistConfig = {
    key: 'heroApp',
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export {
    store, persistor
}
