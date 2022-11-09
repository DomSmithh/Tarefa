import React from 'react'
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react'
import { db, auth } from './FirebaseConnection2';
import { doc, setDoc, 
  collection, addDoc, 
  getDoc, getDocs, 
  updateDoc, deleteDoc, onSnapshot} from 'firebase/firestore'

import { async } from '@firebase/util';
import {createUserWithEmailAndPassword} from 'firebase/auth'

export default function Register()
 {
  const [senha, setSenha] = useState('');
 const [email, setEmail] = useState('');
  

  async function handleAdd(){
    //método que cadastra no banco addDoc 
    await addDoc(collection(db, "posts"), {
     email: email,
      senha: senha,
    })
    .then(() => {
      alert("CADASTRADO COM SUCESSO")
      setSenha('');
      setEmail('');
    })
    .catch((error)=>{
        if(error.code === 'auth/weak-password'){
          alert("Senha muito fraca.")
        } else if(error.code === 'auth/email-already-in-use'){
          alert("email já existe")
        }
      })
  }

  return (
    <div className='primeira'>
    <h1>Cadraste-se</h1>
    <h4>Vamo criar sua conta</h4>
<div className='container'>

    <input type="email"
    placeholder="seuemail@provedor.com"
    value={email}
    onChange={(e)=>setEmail(e.target.value)}/><br/>

    <input type="password"
    placeholder="**"
    value={senha}
    onChange={(e)=>setSenha(e.target.value)}/><br/>

<button onClick={handleAdd}>Cadastrar</button>
        <br></br>
        <br></br>
  <p className='cadastrar'> <Link to="/">já possui uma conta?Faça o login</Link></p>

</div>
<br/><br/>

</div>
  )
}

