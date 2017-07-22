export default (state = { value: 0 }, action) => {
    switch (action.type) {
        case 'value_changed':
            return { ...state, value: action.payload + 1 };
        default:
            return state;
    }
};
