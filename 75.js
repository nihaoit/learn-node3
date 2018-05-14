const p = new Promise((resolve, reject) => {
  // resolve(1)
  reject(new Error('error!'))
})

p.then(res => console.log(res))
  .catch(err => {
    console.log('Error', err.message)
  })