console.log('Before')
//const user = getUser(1)
// console.log(user)
getUser(1, (user) => {
  // console.log(user)
  getRepos(user.githubName, (repos) => {
    getCommits(repos[0], (commits) => {
      console.log('Commits', commits)
    })
  })
})

console.log('After')


function getUser(id, callback) {
  setTimeout(() => {
    console.log('Reading user data from database....')
    callback({
      id: 1,
      githubName: 'mayu'
    })
  }, 2000);
}

function getRepos(name, callback) {
  setTimeout(() => {
    console.log('Reading repos from github API...')
    callback(['repo1', 'repo2', 'repo3'])
  }, 2000);
}

function getCommits(repo, callback) {
  setTimeout(() => {
    console.log('Reading commits from github API...')
    callback(['commit1', 'commit2'])
  }, 2000);
}