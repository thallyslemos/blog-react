import styles from './Register.module.css'
import { useState, useEfect } from 'react'

import React from 'react'

const Register = () => {
    const [ displayName, setdDisplayName] = useState("")
    const [ email, setEmail] = useState("")
    const [ password, setPassword] = useState("")
    const [ confirmPassword, setConfirmPassword] = useState("")
    const [ error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        
        setError('')
        const user = {
            displayName,
            email,
            password,
            error
        }
        if(password !== confirmPassword){
            setError("As senhas precisam ser iguais")
        }
        console.log(user)
    }

    return (
    <div>
        <h1>Cadastrar</h1>
        <p>Crie seu usuário</p>
        <form onSubmit={handleSubmit}>
            <label >
                <span>Nome</span>
                <input type="text" name="displayName" value={displayName} onChange={(e)=>setdDisplayName(e.target.value)} placeholder='Insira seu Nome' required />
            </label>
            <label >
                <span>e-mail</span>
                <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Insira seu e-mail' required />
            </label>
            <label >
                <span>Senha</span>
                <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Insira sua senha' required />
            </label>
            <label >
                <span>Confirmação de senha</span>
                <input type="password" name="confirmPassword" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} placeholder='Confirme sua senha' required />
            </label>
            <button type='submit' className='btn'>Cadastrar</button>
            {error && <p className='error'>{error}</p>}
        </form>
    </div>
  )
}

export default Register