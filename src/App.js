import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import SomeComponent from './components/SomeComponent';

class App extends Component {
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <SomeComponent />
            </Provider>
        );
    }
}

export default App;
