import { RECEIVE_ALL_POKEMON } from '../../actions/pokemon_actions';

export default (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_ALL_POKEMON: 
            const newState = Object.assign({}, state, action.pokemon);
            return newState;
        default: 
            return state;
    }
};