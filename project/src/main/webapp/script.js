/* eslint-disable */
function init() {
  const config = {
    apiKey: 'AIzaSyDUYns7b2bTK3Go4dvT0slDcUchEtYlSWc',
    authDomain: 'step-collaborative-code-editor.firebaseapp.com',
    databaseURL: 'https://step-collaborative-code-editor.firebaseio.com',
  };
  firebase.initializeApp(config);

  const firepadRef = getExampleRef();
  const codeMirror = CodeMirror(
      document.getElementById('firepad-container'),
      {lineNumbers: true, mode: 'javascript'});

  const firepad = Firepad.fromCodeMirror(firepadRef, codeMirror, {
    defaultText:
        '// JavaScript Editing with Firepad!\nfunction go() {\n  var message = "Hello, world.";\n  console.log(message);\n}'
  });
}

// Helper to get hash from end of URL or generate a random one.
function getExampleRef() {
  let ref = firebase.database().ref();
  const hash = window.location.hash.replace(/#/g, '');
  if (hash) {
    ref = ref.child(hash);
  } else {
    ref = ref.push();  // generate unique location.
    window.location =
        window.location + '#' + ref.key;  // add it as a hash to the URL.
  }
  if (typeof console !== 'undefined') {
    console.log('Firebase data: ', ref.toString());
  }
  return ref;
}
/* eslint-enable */
