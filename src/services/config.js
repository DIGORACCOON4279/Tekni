import { initializeApp } from "firebase/app";
// Importar dos funciones del module Firebase
// Initialize iniciar conexion con Firebase
// getfirestore: obtiene una instance de Firestore

//Objeto con toda nuestra informacion cuenta Firebase
//Key personal para la base de datos
import { getFirestore } from "firebase/firestore";

// Initialize Firebase y se pasa la configuracion como argumentos
// y esto devuelve una instance de firebase

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY_FIREBASE_CONFIG,
    authDomain: "tekni-200c1.firebaseapp.com",
    projectId: "tekni-200c1",
    storageBucket: "tekni-200c1.appspot.com",
    messagingSenderId: "526040721447",
    appId: "1:526040721447:web:f0cad195f6338f7b4bc602"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Usar esa instance para ser uso del Store
export const db =  getFirestore(app);





























