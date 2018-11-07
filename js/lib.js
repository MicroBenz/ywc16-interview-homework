// API Call Helper
var baseURL = 'https://api.icndb.com/jokes';

function fetchWrapper(method) {
  if (!method) {
    throw new Error('Method Not Found');
  }
  if (['GET', 'POST', 'PUT', 'DELETE'].indexOf(method) === -1) {
    throw new Error('Method Not Allow');
  }
  return function(url) {
    return new Promise(function (resolve, reject) {
      var request = new XMLHttpRequest();
      request.onreadystatechange = function() {
        if (request.readyState === 4) {
          if(request.status === 200) { 
            try {
              var response = JSON.parse(request.responseText);
              return resolve(response);
            } catch (e) {
              return reject(new Error('Error Parsing JSON: ' + e));
            }
          }
          return reject(new Error('Fetch Fail: ' + request.status + ' ' + request.statusText));
        }
      }
      request.open(method, baseURL + url);
      request.send();
    });
  }
}

var api = {
  get: fetchWrapper('GET'),
  post: fetchWrapper('POST'),
  put: fetchWrapper('PUT'),
  delete: fetchWrapper('DELETE'),
}

// Get Joke Helper
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

// This is not jQuery
window.$ = function(query) {
  var selector = document.querySelector(query);
  if (!selector) {
    throw new Error('Fail to get Element');
  }
  return selector;
}
