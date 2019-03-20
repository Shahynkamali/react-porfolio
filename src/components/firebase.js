import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAfRFNTi5_mq-4MtOBH6YpfbHABSMdHGXs",
    authDomain: "react-portfolio-50467.firebaseapp.com",
    databaseURL: "https://react-portfolio-50467.firebaseio.com",
    projectId: "react-portfolio-50467",
    storageBucket: "react-portfolio-50467.appspot.com",
    messagingSenderId: "872329071575"
};
firebase.initializeApp(config);


export default firebase;