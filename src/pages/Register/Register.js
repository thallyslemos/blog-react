import styles from './Register.module.css'
import { useState, useEffect } from 'react'

import React from 'react'
import { useAuthentication } from '../../hooks/useauthntication'

const Register = () => {
    const [ displayName, setdDisplayName] = useState("")
    const [ email, setEmail] = useState("")
    const [ password, setPassword] = useState("")
    const [ confirmPassword, setConfirmPassword] = useState("")
    const [ error, setError] = useState("")

    const { createUser, error: authError, loading} = useAuthentication()

    const handleSubmit = async (e) => {
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
            return
        }

        const res = await createUser(user)

        console.log(user)
    }

    useEffect(()=>{
        if(authError){
            setError(authError)
        }
    }, [authError])

    return (
    <div className={styles.register}>
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
            {!loading && <button type='submit' className='btn'>Cadastrar</button>}
            {loading && <button type='submit' disabled className='btn'>Aguarde...</button>}
            {error && <p className='error'>{error}</p>}
        </form>
    </div>
  )
}

export default Register