const app = "I don't do much.";

const token = 'YOUR_TOKEN_HERE' //Wouldn't putting my github token in here be a bad security idea?

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
