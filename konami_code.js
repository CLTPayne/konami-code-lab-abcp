const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
let body = document.querySelector('body')
body.addEventListener('keydown', function(e) {
  const key = parseInt(e.detail);
  if (key === code) {
      alert('Congratulations!')}
  } ) }

