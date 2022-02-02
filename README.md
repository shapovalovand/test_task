## Description

Tasks: write logic
* registration
* authorization
* if the user has lost the password, he sends his mail data, sends his message, where he redirects to change the password
* user password change

## Development requirement:
* express
* postgresql
* graphql

## Stack: 
* express
* Sequelize
* postgresql
* docker-compose
* graphql

## Installation

```bash
$ npm install
```


## Running the app

```bash
# up database container
$ docker-compose up
# stop database container
$ docker-compose down -v
# run server
$ npm run dev
```


## Improvements

* add logic with files for user
* add testing
* pass token via http headers
* add query examples


## Mutations examples

```
mutation singUp($email: String!, $password: String!, $username: String!) {
  singUp(email: $email, password: $password, username: $username) {
    id
    email
    token
  }
}

mutation singIn($email: String!, $password: String!) {
  singIn(email: $email, password: $password) {
    id
    email
  }
}

mutation updateUser($email: String, $password: String, $username: String, $token: String!, $id: Int!) {
  updateUser(email: $email, password: $password, username: $username, token: $token, id: $id) {
    id
    email
    token
  }
}

mutation deleteUser($token: String!, $id: Int!) {
  deleteUser(token: $token, id: $id) {
  id
  }
}

```