function init() {
    // Initialize Firebase.
    // TODO: replace with your Firebase project configuration.
    var config = {
    apiKey: "AIzaSyB6ozgIzIaiNQEh62i6iHsHNupleA-0BPU",
    authDomain: "tinodore-step-2020.firebaseapp.com",
    databaseURL: "https://tinodore-step-2020.firebaseio.com"
    };
    firebase.initializeApp(config);
    var rootRef = firebase.database().ref();
    var firepadRef = rootRef.push();
    Firepad.fromCodeMirror(firebaseRef, codeMirror, options)
}