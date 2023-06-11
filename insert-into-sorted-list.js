/*
    QUESTION 1: As a senior backend engineer, you are tasked with developing a fast in-memory data structure to 
    manage profile information (username, name and email) for 100 million users. It should allow the following 
    operations to be performed efficiently:

        Insert the profile information for a new user.
        Find the profile information of a user, given their username
        Update the profile information of a user, given their usrname
        List all the users of the platform, sorted by username

    You can assume that usernames are unique.


    1. Insert:
        1. Inserting into an empty database of users
        2. Trying to insert a user with a username that already exists
        3. Trying to insert a user with a email that already exists
        4. Inserting a user with a username that does not exist
        5. Inserting a user without required fields (name, username and email)
        6. Inserting a new user with all required fields ok
    

    2. Find:
        1. Trying to find a user with a username that does not exists
        2. Trying to find a user in an empty database of users
        3. Finding a user with a valid username

    3. Update:
        1. Updating into an empty database of users
        2. Trying to update the user's username with a username that already exists
        3. Trying to update the user's email with a email that already exists
        4. Updating a user that does not exist
        5. Updating a user with at least one required fields blank (name, username or email)
        6. Updating a user with all required fields ok

    4. List:
        1. Listing users in an empty database of users
*/


const insertTests = [
  {
    name: 'Inserting a new user with all required fields ok',
    input: {
      username: 'mike',
      email: 'mike@email.com',
      name: 'Mike the Mike',
    },
    output: 'ok',
  },

  {
    name: 'Trying to insert a user with a username that already exists',
    input: {
      username: 'grace',
      email: 'grace@email.com',
      name: 'The second GRACE',
    },
    output: 'username duplicated',
  },

  {
    name: 'Trying to insert a user with a email that already exists',
    input: {
      username: 'jhon',
      email: 'grace@email.com',
      name: 'Jhon the Jhon',
    },
    output: 'email duplicated',
  },
  {
    name: 'Inserting a user with a username that does not exist',
    input: {
      username: 'jhon',
      email: 'jhon@email.com',
      name: 'Jhon the Jhon',
    },
    output: 'ok',
  },
  {
    name: 'Inserting a user without required field (name)',
    input: {
      email: 'maria@email.com',
      name: 'Maria the Maria',
    },
    output: 'required field missing',
  },
  {
    name: 'Inserting a user without required field (name)',
    input: {
      username: 'maria',
      name: 'Maria the Maria',
    },
    output: 'required field missing',
  },
  {
    name: 'Inserting a user without required field (name)',
    input: {
      username: 'maria',
      email: 'maria@email.com',
    },
    output: 'required field missing',
  },
  {
    name: 'Inserting a new user with all required fields ok',
    input: {
      username: 'maria',
      email: 'maria@email.com',
      name: 'Maria the Maria',
    },
    output: 'ok',
  },
]

const findTests = [
  {
    name: 'Trying to find a user with a username that does not exists',
    input: {
      username: 'davi',
    },
    output: 'not found',
  },
  {
    name: 'Trying to find a user in an empty database of users',
    input: {
      username: 'mike',
    },
    output: 'not found',
  },
  {
    name: 'Finding a user with a valid username',
    input: {
      username: 'davi',
    },
    output: 'not found',
  },
]

const updateTests = [
  {
    name: 'Updating into an empty database of users',
    input: {
      update: {
        username: 'michael'
      }
    },
    output: 'not found',
  },

  {
    name: 'Trying to update the user\'s username with a username that already exists',
    input: {
      update: {
        username: 'grace'
      }
    },
    output: 'username is taken',
  },
  {
    name: 'Trying to update the user\'s email with a email that already exists',
    input: {
      update: {
        email: 'mike@email.com'
      }
    },
    output: 'email is taken',
  },
  {
    name: 'Updating a user that does not exist',
    input: {
      update: {
        username: 'jhonjhon'
      }
    },
    output: 'not found',
  },
  {
    name: 'Updating a user with at least one required fields blank (name, username or email)',
    input: {
      update: {
        username: 'mikemike',
        email: 'mike@gmail.com',
        name: ''
      }
    },
    output: 'missing required field',
  },
  {
    name: 'Updating a user with all required fields ok',
    input: {
      update: {
        username: 'michael',
        name: 'Michael the Mike',
        email: 'mike@gmail.com',
      }
    },
    output: 'ok',
  },
]

class User {
  username
  email
  name

  constructor(username, email, name) {
    this.username = username
    this.email = email
    this.name = name
  }

  greetings() {
    return `Hello, my name is ${this.username}`
  }
}

class Database {
  users = []
  userId = 0

  constructor(users) {
    users.forEach(user => {
      this.insert(user)
    })
  }

  insert(user) {

    if (this.users.find(obj => user.username === obj.username)) {
      return 'username duplicated'
    } else if (users.find(obj => user.email === obj.email)) {
      return 'email duplicated'
    } else if (!(user.username && user.email && user.name)) {
      return 'required field missing'
    } else {
      this.userId += 1
      user.id = this.userId
      // insert in alphabetical order
      let positionToInsert = this.users.find(obj => obj.username > user.username)
      positionToInsert = this.users.indexOf(positionToInsert)

      this.users.splice(positionToInsert, 0, user)
      return 'ok'
    }
  }

  find(username) {
    const result = this.users.find(obj => obj.username === username)
    return result || 'not found'
  }

  update(user) {
    const userToUpdate = this.users.find(obj => obj.id === user.id)
    console.log(user)
  }
}

// creating default database
const users = [
  new User('alice', 'alice@email.com', 'Alice the Great'),
  new User('bob', 'bob@email.com', 'Bob the Builder'),
  new User('charlie', 'charlie@email.com', 'Charlie Chaplin'),
  new User('david', 'david@email.com', 'David Beckham'),
  new User('emily', 'emily@email.com', 'Emily Dickinson'),
  new User('frank', 'frank@email.com', 'Frank Sinatra'),
  new User('grace', 'grace@email.com', 'Grace Hopper'),
]
const database = new Database(users)

const emptyDatabase = new Database([])

// TESTS
let test
let result
function testResult(result, expectedResult) {
  if (result === expectedResult) {
    console.log(`${test.name} -> OK`)
  } else {
    console.log(`${test.name} -> FAIL`)
  }
}

for (test of insertTests) {
  const user = new User(test.input.username, test.input.email, test.input.name)
  result = database.insert(user)
  testResult(result, test.output)
}

for (test of findTests) {
  const result = database.find(test.input)
  testResult(result, test.output)
}

test = findTests[2]
result = emptyDatabase.find(test.input)
testResult(result, test.output)

console.log(database)
