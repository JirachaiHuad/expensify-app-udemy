import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('Should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 1020300,
    createAt: 1000,
    note: 'This is rent'
  }
  const action = addExpense(expenseData)

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
})

test('Should setup add expense action object with default values', () => {
  const action = addExpense()

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createAt: 0
    }
  })
})

test('Should setup edit expense action object', () => {
  const action = editExpense(99, { note: 'New note value!' })

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 99,
    updates: { note: 'New note value!' }
  })
})

test('Should setup remove expense action object', () => {
  const action = removeExpense({ id: '1234asd' })

  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '1234asd'
  })
})