function getRandomJokes() {
  return api.get('/random');
}

function getJokeWithName(firstName, lastName) {
  if (!firstName) {
    firstName = 'John';
  }
  if (!lastName) {
    lastName = 'Doe';
  }
  return api.get('/random?firstName=' + firstName + '&lastName=' + lastName);
}
