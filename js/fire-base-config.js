const firebaseConfig = {
    apiKey: "AIzaSyCL7Dnui4oFdNfN-41bz0Z0cafViaCHn6s",
    authDomain: "la-barbearia-f414c.firebaseapp.com",
    projectId: "la-barbearia-f414c",
    storageBucket: "la-barbearia-f414c.appspot.com",
    messagingSenderId: "542493387510",
    appId: "1:542493387510:web:c00d426d2557e8c8765ad7",
    measurementId: "G-7C70JRMX5N"
  };
  
  // Initialize Firebase in my website
  firebase.initializeApp(firebaseConfig);
    //criar o objeto da autenticação para que eu posso usar seus metodos
  const auth = firebase.auth();
  //criar o onjeto BD firestore para que eu possa usar seus métodos
  const db = firebase.firestore();