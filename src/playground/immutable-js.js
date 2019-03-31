var Immutable = require('immutable');
import React from 'react'
import ReactDOM from 'react-dom'
import { Map, List } from 'immutable'

const something = [
  {
   id: 1,
   name: 'John',
   city: {
     aaa: [
       111,
       222
     ],
     bbb: [
       333,
       444
     ]
   }
  },
  {
    id: 2,
    name: 'Will',
    city: {
      ccc: [
        555,
        666
      ],
      ddd: [
        777,
        888
      ]
    }
   }
]

const setOfData = Immutable.fromJS(something)

const data = setOfData.map((data) => {

  const city = data.get('city')
  
  console.log(city)
  
  return (
    city.map((v ,k) => {
      return <div> {v.get(0)} -> {v.get(1)} </div>
    })
  )
}).toList()

// console.log(data)


class Application extends React.Component {


  render () {
    return (
      <div>
        <div>{data}</div>
        <div>{}</div>
      </div>
    )
  }
}

ReactDOM.render(<Application />, document.getElementById('app'))























