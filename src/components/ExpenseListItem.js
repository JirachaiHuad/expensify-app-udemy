import React from 'react'
import { Link } from 'react-router-dom'

export const ExpenseListItem = ({ dispatch, id, description, amount, createAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>{amount} - {createAt}</p>

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
