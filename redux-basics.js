const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter+1
            }
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter-1
            }
        case 'ADD_COUNTER':
            return {
                ...state,
                counter: state.counter + action.value
            }
    
        default:
            return state;
    }
}

const store = createStore(rootReducer);

//Subscribing sothat fxn executed each time whenever state got updated
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
})

console.log(store.getState());
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
store.dispatch({type: 'DECREMENT'});
store.dispatch({type: 'DECREMENT'});
store.dispatch({type: 'DECREMENT'});
store.dispatch({type: 'DECREMENT'});
store.dispatch({type: 'DECREMENT'});
