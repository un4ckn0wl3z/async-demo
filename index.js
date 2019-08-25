console.log('Before');
getUser(1, processUser);
console.log('After');

function processUser(user){
    console.log("username: " + user.username);
    getRepos(user.username, processRepos)
}

function processRepos(repos){
    console.log("repo: " + repos);
}

// Callback
// Promise
// Async/Await

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading user from database...');
        callback({ id: id, username: 'Anuwat' });
    }, 2000);
}

function getRepos(username, callback) {
    setTimeout(() => {
        console.log('Calling github..');
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);

}