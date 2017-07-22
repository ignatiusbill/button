export const valueChanged = (value) => {
    return {
        type: 'value_changed',
        payload: value
    };
};
