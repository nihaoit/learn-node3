/* const p1 = function () {
  return new Promise(resolve => {
    resolve(1)
  })
}

const p2 = function () {
  return new Promise(resolve => {
    resolve(2)
  })
}


const display = async function () {
  const arr1 = await Promise.all([p1, p2])
  console.log(arr1)
}

display() */

const p1 = new Promise(resolve => {
  resolve(1)
})

const p2 = new Promise((resolve, reject) => {
  // resolve(2)
  reject(new Error('p2 failed!'))
})

// all是Promise构造函数的一个静态方法
// 这个方法的返回值是一个数组，参数中的任何一个promise出现问题，就整个出现问题，正常的promise对象的值也无法返回！

Promise.all([p1, p2]).then(res => console.log(res))
  .catch(err => {
    console.log(err.message)
  })
// race是返回先正常返回那个，其余的就不需要返回了！
// Promise.race([p1, p2]).then(res => console.log(res))