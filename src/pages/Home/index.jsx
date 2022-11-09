import React from 'react'
import {Link} from 'react-router-dom';
import "./home.css";
import { useState, useEffect } from 'react'
import { db, auth } from './FirebaseConnection';
import { doc, setDoc, 
  collection, addDoc, 
  getDoc, getDocs, 
  updateDoc, deleteDoc, onSnapshot} from 'firebase/firestore'
import { async } from '@firebase/util';
import {createUserWithEmailAndPassword} from 'firebase/auth'

export default function Home()
 {
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');

  async function buscarPost(){
    const postsRef = collection(db, "posts")
    await getDocs(postsRef)
    .then((snapshot) => {
      let lista = [];


      snapshot.forEach((doc) => {
        lista.push({
          email: doc.data().email,
          senha: doc.data().senha,
          
        })
        alert('acesso permitido');
      })

      setPosts(lista);

    })
    .catch((error) => {
      console.log("DEU ALGUM ERRO AO BUSCAR")
    })
  }


  return (

<div className='primeira'>
<h1>Lista De Tarefa</h1>
<h4>Gerencie sua agenda fácil</h4>
<div className='container'>

<input type="email"
    placeholder="seuemail@provedor.com"
    value={email}
    onChange={(e)=>setEmail(e.target.value)}/><br/>

<input type="password"
    placeholder="**"
    value={senha}
    onChange={(e)=>setSenha(e.target.value)}/><br/>


<button onClick={buscarPost}><Link to='/admin'>Acessar</Link></button>
<p className='cadastrar'> <Link to="/register">Não possui uma conta?Cadastre-se</Link></p>

</div>

</div>
  )
}
