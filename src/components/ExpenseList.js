import React from 'react'
import { connect } from 'react-redux'

import ExpenseListItem from './ExpenseListItem'
import getVisibleExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'

export const ExpenseList = (props) => (
  <div>
    {
      props.expenses.length === 0 ? (
        <p>No expense.</p>
      ) : (
        props.expenses.map((expense) => {
          return <ExpenseListItem key={expense.id} {...expense}/>
        })
      )
      }
  </div>
)

const mapStateToProps = (state) => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters),
    expensesTotal: selectExpensesTotal(state.expenses)
  }
}

export default connect(mapStateToProps)(ExpenseList)
