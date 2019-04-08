import React from 'react'
import { shallow } from 'enzyme'

import { ExpensesSummary } from '../../components/ExpensesSummary'

test('Should correctly render ExpensesSummary with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />)

  expect(wrapper).toMatchSnapshot()
})

test('Should correctly render ExpensesSummary with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={34} expensesTotal={5627822335} />)

  expect(wrapper).toMatchSnapshot()
})