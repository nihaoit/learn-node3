console.log('Before')


// 特别注意：then是Promise对象的一个方法，这个方法的参数是一个函数，这个函数的返回值就是then方法的返回值
// 这个函数里面的resolve的参数，会被返回到下一个then中
// 由于getRepos函数的返回值还是一个Promise对象，所以可以采用链式的写法
getUser(1)
  .then(user => getRepos(user.githubName))
  .then(repos => getCommits(repos[0]))
  .then(commits => console.log(commits))
  .catch(err => {
    console.log('Error', err.message)
  })

console.log('After')


function getUser(id) {
  // 在这里面做点异步的工作
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Reading user data from database....')
      resolve({
        id: 1,
        githubName: 'mayu'
      })
    }, 2000);
  })

}

function getRepos(name) {
  // 在这里面做点异步的工作
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Reading repos from github API...')
      // resolve(['repo1', 'repo2', 'repo3'])
      reject(new Error('fetch repos failed!'))
    }, 2000);
  })
}

// 返回一个Promise对象
function getCommits(repo) {
  // 在这里面做点异步的工作
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Reading commits from github API...')
      resolve(['commit1', 'commit2'])
    }, 2000);
  })
}