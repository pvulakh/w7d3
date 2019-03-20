import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import configureStore from './store/store';
import selectAllPokemon from './reducers/selectors'

document.addEventListener("DOMContentLoaded", () => {
    const rootEl = document.getElementById('root');
    const store = configureStore();

    //TESTING
    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.receiveAllPokemon = receiveAllPokemon;
    window.requestAllPokemon = requestAllPokemon;
    window.selectAllPokemon = selectAllPokemon;
    //TESTING

    ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});