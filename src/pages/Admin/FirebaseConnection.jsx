import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

//colocar a configuração firebase
const firebaseConfig = {
  apiKey: "AIzaSyD78lIFzDmSCSkrL6KE4la0Zi_6BAQbjnw",
  authDomain: "aula2610-487aa.firebaseapp.com",
  projectId: "aula2610-487aa",
  storageBucket: "aula2610-487aa.appspot.com",
  messagingSenderId: "1084409152716",
  appId: "1:1084409152716:web:66b679d74429b427486e69",
  measurementId: "G-5R2BYE8B9G"
};
  

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  export {db, auth};