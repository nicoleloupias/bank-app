import React from 'react';
import './styles/index.scss';
import { Provider } from 'react-redux';
import { AppRouter } from './router/AppRouter';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
