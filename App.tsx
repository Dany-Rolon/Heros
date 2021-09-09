import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider, useSelector } from 'react-redux';
import { store, persistor, RootState } from './src/redux/store';
import MainNavigator from './src/navigator/MainNavigator';
import { PersistGate } from 'redux-persist/integration/react';
import Loading from './src/components/Loading';
import Login from './src/screens/Login';

const App = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
       <Path/>
      </PersistGate>
    </Provider>
  )

  function Path(){
    const isLogin = useSelector((state: RootState) => state.user.isLogin);
    return(
        isLogin ?
          (
            <NavigationContainer>
              <MainNavigator/>
            </NavigationContainer>
          )
          :
          (
            <Login/>
          )
    )
  }
}

export default App
