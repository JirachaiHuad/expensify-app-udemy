// Store --- contains app states

import { createStore } from 'redux';


// Action generators --- func that return action objects.

// object destructuring in func argument
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy  // === incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ count }) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET'
});


// REDUCER
// 1. Reducers are pure functions.
// 2. Never change state or action. (e.g. return NEW state instead of MUTATE it)

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'RESET':
      return {
        count: 0
      };
    case 'SET':
      return {
        count: action.count
      }
    default:
      return state;
  }
};

// The function in createStore (a REDUCER) runs initially (when we call createStore to set up default state)
// and run every time the action gets dispatched (store.dispatch() gets called)

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// Actions -- an "object" that gets sent to the store. this "object" describes the TYPE of action we'd like to take.
// TYPE ===> walk, stop_walking, sit, work, stop_working, etc...
// example of action ---
// {
//   type: 'INCREMENT'
// }

// states in Store gets changed by DISPATCH Action to the Store. >>> which one (state) is specified by the TYPE of action!

// #######

// I'd like to increment the count and other things ... --- 

// [send a defined action to the Store by DISPATCH]
// >>> DISPATCH ACTIONS ! <<<

// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 1000 }));

// store.dispatch({
//   type: 'INCREMENT'
// });

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10000 }));

store.dispatch(setCount({ count: 99999 }));

