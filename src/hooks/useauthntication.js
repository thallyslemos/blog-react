import {
    getAuth,
    createUserWithEmailAndPassword,
    singinWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'

import { useState, useEfect } from 'react'

export const useAuthentication = () => {
    const [ error, setError ] = useState(null)
    const [ loading, setLoading ] = useState(null)

    //  deal with memory leak
    // cleanuo
    const [canceled, setCanceled ] = useState(false)

    function checkIfIsCancelled() {
        if(canceled) {
            return;
        }
    }
}