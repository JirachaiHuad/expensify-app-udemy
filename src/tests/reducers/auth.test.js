import authReducer from '../../reducers/auth'

test('Should set uid for login', () => {
  const action = {
    type: 'LOGIN',
    uid: 'acb1234'
  }

  const state = authReducer({}, action)

  expect(state.uid).toBe(action.uid)
})

test('Should clear uid for logout', () => {
  const action = {
    type: 'LOGOUT'
  }

  const state = authReducer({ uid: 'blahblahblah' }, action)

  expect(state).toEqual({})
})
