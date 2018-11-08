function onFail() {
  $('#joke-result').innerHTML = 'มุขแป้ก หาไม่เจอ';
}

function handleGetRandomJokes() {
  $('#joke-result').innerHTML = 'กำลังหามุกเทพๆ ให้อ่านอยู่ รอแปป';
  getRandomJokes()
    .then(function (response) {
      if (response.type === 'success') {
        $('#joke-result').innerHTML = response.value.joke;
      } else {
        onFail();
      }
    })
    .catch(onFail)
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/js/service-worker.js')
    .then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    })
    .catch(function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
