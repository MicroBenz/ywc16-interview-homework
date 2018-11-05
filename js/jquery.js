// That's joke...This is not jQuery
window.$ = function(query) {
  var selector = document.querySelector(query);
  if (!selector) {
    throw new Error('Fail to get Element');
  }
  return selector;
}
