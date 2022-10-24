import { db } from '../firebase/config'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'

import { useState, useEffect } from 'react'

export const useAuthentication = () => {
    const [ error, setError ] = useState(null)
    const [ loading, setLoading ] = useState(null)

    //  deal with memory leak
    // cleanuo
    const [canceled, setCanceled ] = useState(false)

    const auth = getAuth();

    function checkIfIsCancelled() {
        if(canceled) {
            return;
        }
    }
    // register
    const createUser = async (data) => {
        checkIfIsCancelled()

        setLoading(true)
        setError(null)

        try{

            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
            await updateProfile(user, {
                displayName: data.displayName
            })
            setLoading(false)

            return user

        } catch (error) {
            console.log(error.message)
            console.log(typeof error.message)

            let systemErrorMessage

            if (error.message.includes("Password")) {
                systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres.";
              } else if (error.message.includes("email-already")) {
                systemErrorMessage = "E-mail já cadastrado.";
              } else {
                systemErrorMessage = "Ocorreu um erro, por favor tenta mais tarde.";
              }
              
              console.log(systemErrorMessage);
              setError(systemErrorMessage)
            }
        setLoading(false)

    }

    // logout
    const logout = () => {
        checkIfIsCancelled();

        signOut(auth)
    }

    // login
    const login = async(data) => {
        
        setLoading(true)
        setError(false)

        try {
            await signInWithEmailAndPassword(auth, data.email, data.password)
            setLoading(false)
        } catch(error) {

            let systemErrorMessege;

            if (error.message.includes("user-not-found")) {
                systemErrorMessege = "Usuário não encontrado."
            } else if (error.message.include("wrong-password")) {
                systemErrorMessege = "Senha incorreta."
            } else {
                systemErrorMessege = "Ocorreu um erro, tente mais tarde."
            }

            setError(systemErrorMessege)
            setLoading(false)
        }
    }
    useEffect(() => {
        return () => setCanceled(true);
    }, [])
    return {
        auth,
        createUser,
        error,
        loading,
        logout,
        login,
    }
}