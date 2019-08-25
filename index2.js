console.log('Before');
// getUser(1, (user) => {
//   getRepositories(user.gitHubUsername, (repos) => {
//     getCommits(repos[0], (commits) => {
//       console.log(commits);
//     })
//   })
// });

// const p = getUser(1);
// p.then( (user) => {
//   console.log(user.gitHubUsername);
//   getRepositories(user.gitHubUsername)
//   .then( (repo) => {
//     console.log(repo);
//     getCommits(repo)
//     .then((commit) => {
//       console.log(commit);
//     })
//   })
// } );

// async and await

async function displayCommit(){
  try {
    const user =  await getUser(1);
    const repos = await getRepositories(user.gitHubUsername);
    const commit = await getCommits(repos[0]);
    console.log(commit);
  } catch (error) {
    console.log(error);
  }
}
displayCommit();



console.log('After');

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Reading a user from a database...');
      resolve({ id: id, gitHubUsername: 'mosh' });
    }, 2000);
  });

}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calling GitHub API...');
      resolve(['repo1', 'repo2', 'repo3']);
    }, 2000);
  });
  

}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calling GitHub API...');
      resolve(['commit']);
    }, 2000);
  });

}