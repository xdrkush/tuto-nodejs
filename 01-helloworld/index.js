// process is the processus run with node, we get the env, pid, stdin, stdout, ...
console.log('process', process.pid, process.env.USER)

// get variable in .env with module "dotenv"
// npm i dotent
// https://nodejs.dev/learn/how-to-read-environment-variables-from-nodejs
require('dotenv').config();
console.log('.env', process.env.NODE_HELLO)
