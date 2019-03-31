import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//  #@#@#@#@#  ---  Actions generator  ---  #@#@#@#@#

// ADD_EXPENSE
const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {  // data to be used in reducer
    id: uuid(),
    description,
    note,
    amount,
    createAt
  }
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id  // data to be used in reducer
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

// SET_END_DATE
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});

//  #@#@#@#@#  ---  Expenses Reducer  ---  #@#@#@#@#

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
      // DO NOT use .push() cuz it CHANGES the original array!
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => action.id !== id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

//  #@#@#@#@#  ---  Filters Reducer  ---  #@#@#@#@#

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'Date'
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'Amount'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};


// #@#@#@#@#  ---  Get Visible Expanses  ---  #@#@#@#@#

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createAt < b.createAt ? 1 : -1; // most recent first
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;  // most expensive first
    }
  });
};



// #@#@#@#@#  ---  Store creation  ---  #@#@#@#@#

const store = createStore(
  combineReducers({
    // someValue: someReducer,
    expenses: expensesReducer,
    filters: filtersReducer
  })
);


// #@#@#@#@#  ---  DISPATCH  ---  #@#@#@#@#


store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});



const expenseOne = store.dispatch(
  addExpense({
    description: 'Rent',
    amount: 500,
    createAt: -33000
  })
);

const expenseTwo = store.dispatch(
  addExpense({
    description: 'Coffee',
    note: 'nice!',
    amount: 300,
    createAt: -1000
  })
);

// console.log('action that gets dispatched also with payload', expenseOne);
// console.log('action that gets dispatched also with payload', expenseTwo);

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 700 }));

// store.dispatch(setTextFilter('ff'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));




// ##_#_#_#_##_#_#_#_#_


const demoState = {
  expenses: [{
    id: 'asdfqwerty',
    description: 'October Rent',
    note: 'This was the final payment for that address.',
    amount: 49580,
    createAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount 
    startDate: undefined,
    endDate: undefined
  }
};

// const user = {name: 'Jen', age: 33};
// const user1 = {age: 44, ...user, location: 'London'};
// console.log(user1);

