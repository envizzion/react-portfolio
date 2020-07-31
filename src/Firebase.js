import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyBK7NPaO4WCm0u9EpsUpMOVQrANrWr7D50",
  authDomain: "portfolio-38252.firebaseapp.com",
  databaseURL: "https://portfolio-38252.firebaseio.com",
  projectId: "portfolio-38252",
  storageBucket: "portfolio-38252.appspot.com",
  messagingSenderId: "1014686710745",
  appId: "1:1014686710745:web:a78f53db205e859284f7c8",
  measurementId: "G-74P6RMYZ6R"


};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
