//  #@#@#@#@#  ---  Expenses Reducer  ---  #@#@#@#@#

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ]
      // DO NOT use .push() cuz it CHANGES the original array!
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => action.id !== id)
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense
        }
      })
    case 'SET_EXPENSES':
      return action.expenses
    default:
      return state
  }
}

export default expensesReducer
