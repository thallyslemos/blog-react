import styles from './Login.module.css';

import { useState, useEffect } from 'react'

import React from 'react'
import { useAuthentication } from '../../hooks/useauthntication'

const Login = () => {

  const [ displayName, setdDisplayName] = useState("")
  const [ email, setEmail] = useState("")
  const [ password, setPassword] = useState("")
  const [ error, setError] = useState("")

  const { login, error: authError, loading} = useAuthentication()

  const handleSubmit = async (e) => {
      e.preventDefault()
      
      setError('')
      const user = {
          email,
          password,
      }
      const res = await login(user)
      console.log(res)
  }

  useEffect(()=>{
      if(authError){
          setError(authError)
      }
  }, [authError])

  return (
    <div className={styles.login}>
        <h1>Entrar</h1>
        <p>Faça seu login para poder acessar a plataforma.</p>
        <form onSubmit={handleSubmit}>
       
            <label >
                <span>e-mail</span>
                <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Insira seu e-mail' required />
            </label>
            <label >
                <span>Senha</span>
                <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Insira sua senha' required />
            </label>
           
            {!loading && <button type='submit' className='btn'>Cadastrar</button>}
            {loading && <button type='submit' disabled className='btn'>Aguarde...</button>}
            {error && <p className='error'>{error}</p>}
        </form>
    </div>
  )
}

export default Login