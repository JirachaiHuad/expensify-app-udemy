import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpense = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpense);
});

store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Gas bill', createAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 111000 }));

const jxs = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jxs, document.getElementById('app'));
