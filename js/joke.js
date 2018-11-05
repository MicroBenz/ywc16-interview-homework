function getRandomJokes() {
  return api.get('http://api.icndb.com/jokes/random');
}

function getJokeWithName(firstName, lastName) {
  if (!firstName) {
    firstName = 'John';
  }
  if (!lastName) {
    lastName = 'Doe';
  }
  return api.get('http://api.icndb.com/jokes/random?firstName=' + firstName + '&lastName=' + lastName);
}
