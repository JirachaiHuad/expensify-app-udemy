const selectExpensesTotal = (expenses) => {
  return expenses
    .reduce((totalAmount, expense) => totalAmount + expense.amount, 0)
}

export default selectExpensesTotal
