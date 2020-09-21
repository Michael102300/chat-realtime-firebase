import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCekqu5Za9Ss-73jrQeTFvK4jn56VBAyXY",
    authDomain: "chat-realtime-6714e.firebaseapp.com",
    databaseURL: "https://chat-realtime-6714e.firebaseio.com",
    projectId: "chat-realtime-6714e",
    storageBucket: "chat-realtime-6714e.appspot.com",
    messagingSenderId: "191405685542",
    appId: "1:191405685542:web:9569eb54edd13d66a99fe7"
};

export default firebase.initializeApp(firebaseConfig);