# tuto-nodejs
Les bases de Node JS (in progress)

# Pré-requis
  - NodeJS > v14

# Install
  - Official Website: https://nodejs.org/en/download/
  - Official Github: https://github.com/nodesource/distributions/blob/master/README.md

```
# Using Ubuntu, Linux Mint, ...
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
```

check your install:
```
node -v
npm -v
```

# Create
```
mkdir myProject
cd myProject
npm init
# -y for accept auto init (npm init -y)
```

create "index.js" and paste this code
```
console.log('Welcome to node js !')
```

# Run
```
node index.js
# or "nodemon index.js"
```

# Utils
Install nodemon for autorefresh during the developpement (is active, always you save your code in VSC with ctrl + s)

```
sudo npm i -g nodemon
```

Install nvm on ubuntu (linux mint, ...), is really utils for switch version of node
  - Official Github: https://github.com/nvm-sh/nvm

with curl:
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```
or with wget:
```
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

# tip
you can add a command or script in your package.json

```
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "reinstall": "nvm i 14.18.2 && npm i && npm run dev",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

and for run the scripts
```
npm start
```
start is only script for run no needed "run"
for other command we needed "run"
```
npm run dev
```
