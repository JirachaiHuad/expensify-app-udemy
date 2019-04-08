import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

export const ExpenseListItem = ({ dispatch, id, description, amount, createAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>

    <p>
      {numeral(amount / 100).format('$0,0.00')}
      -
      {moment(createAt).format('MMMM Do, YYYY')}
    </p>

    {/* <button
      onClick={() => {
        dispatch(removeExpense({ id }))
      }}
    >
      Remove
    </button> */}

  </div>
)

export default ExpenseListItem
