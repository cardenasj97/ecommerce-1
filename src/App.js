import React from 'react';
import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import cartReducer from './reducers/cartReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(cartReducer, composeWithDevTools());

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
