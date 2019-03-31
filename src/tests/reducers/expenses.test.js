import uuid from 'uuid'

import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('Should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' })

  expect(state).toEqual([])
})

test('Should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }

  const state = expensesReducer(expenses, action)

  expect(state).toEqual([expenses[0], expenses[2]])
})

test('Should NOT remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '99999'
  }

  const state = expensesReducer(expenses, action)

  expect(state).toEqual(expenses)
})

test('Should add expense', () => {
  const expense = {
    id: uuid(),
    description: 'new expense',
    note: 'nothing',
    amount: 55505,
    createAt: 1000
  }

  const action = {
    type: 'ADD_EXPENSE',
    expense
  }

  const state = expensesReducer(expenses, action)

  expect(state).toEqual([...expenses, expense])
})

test('Should edit expense', () => {
  const updates = {
    note: 'amount changed',
    amount: 12345
  }

  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates
  }

  const state = expensesReducer(expenses, action)

  expect(state[0]).toEqual({ ...expenses[0], ...updates })
})

test('Should NOT edit expense if expense not exist', () => {
  const updates = {
    note: 'amount changed',
    amount: 12345
  }

  const action = {
    type: 'EDIT_EXPENSE',
    id: '912391239923',
    updates
  }

  const state = expensesReducer(expenses, action)

  expect(state).toEqual(expenses)
})

