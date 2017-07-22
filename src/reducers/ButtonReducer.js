import data from './data.json';

const INITIAL_STATE = { value: data.value };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'value_changed':
            return { ...state, value: action.payload + 1 };
        default:
            return state;
    }
};
