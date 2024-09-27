import { useState } from 'react'
import { createUserWithEmailAndPassword , onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from './fireBase-config';


function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("")
  const [user,setUser] = useState({});
 
  onAuthStateChanged(auth, (currentUser)=>{
    setUser(currentUser)
  })



  const Register = async ()=>{
     try{
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log(user)
     }catch(error){
       console.log(error.message);
     }
  }
  
  const Login = async ()=>{
    try{
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(user)
     }catch(error){
       console.log(error.message);
     }
  }
  
  const Logout = async ()=>{
    await signOut(auth);
  }
  


  return (
    <>
    <div>
      <h1>Register</h1>
      <input type="text" placeholder="Email..." onChange={(e)=>{setRegisterEmail(e.target.value)}}/>
      <input type="text" placeholder="Password..."  onChange={(e)=>{setRegisterPassword(e.target.value)}}/>

      <button onClick={Register}>Sign-in</button>
    </div>
    <div>
      <h1>Login</h1>
      <input type="text" placeholder="Email..."  onChange={(e)=>{setLoginEmail(e.target.value)}}/>
      <input type="text" placeholder="Password..." onChange={(e)=>{setLoginPassword(e.target.value)}}/>

      <button onClick={Login}>Log-in</button></div>

      <h4 >User Logged-in : </h4>
      {user?.email}
      <button onClick={Logout}> Sign-out</button>
    </>
  )
}

export default App
  