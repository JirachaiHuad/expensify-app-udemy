const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Huad',
      age: 28
    })

    // reject('something went wrong!')
  }, 3000)
})

console.log('=== before ===')

promise
  .then((data) => {
    console.log('1', data)

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('this is promise!')
      }, 5000)
    })
  })
  .then((res) => {
    console.log('2', res)
  })
  .catch((error) => {
    console.log('ERROR: ', error)
  })

// promise
//   .then((data) => {
//     console.log('2', data)
//   }, (error) => {
//     console.log('ERROR-2: ', error)
//   })


console.log('--- after ---')
