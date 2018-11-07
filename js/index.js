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
