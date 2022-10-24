import { NavLink } from "react-router-dom"

import { useAuthentication } from "../hooks/useauthntication"
import { useAuthValue } from "../context/AuthContext.js"



import styles from './Navbar.module.css'

const Navbar = () => {
    const { user } = useAuthValue()
    const { logout } =useAuthentication()

  return (
    <nav className={styles.navbar}>
        <NavLink to="/" className={styles.brand}>
            Portifólio <span>Thallys lemos</span>
        </NavLink>
        <ul className={styles.links_list}>
            <li>
                <NavLink to='/' className={({isActive})=>(isActive ? styles.active : "")}>Home</NavLink>
            </li>
            {!user &&
            <>
               <li>
                <NavLink to='/login' className={({isActive})=>(isActive ? styles.active : "")}>Login</NavLink>
            </li>
            <li>
                <NavLink to='/register' className={({isActive})=>(isActive ? styles.active : "")}>Cadastrar</NavLink>
            </li>
            </>}
            {user &&
            <>
               <li>
                <NavLink to='/post/create' className={({isActive})=>(isActive ? styles.active : "")}>Novo Post</NavLink>
            </li>
            <li>
                <NavLink to='/dashboard' className={({isActive})=>(isActive ? styles.active : "")}>Dashboard</NavLink>
            </li>
            </>}
            <li>
                <NavLink to='/about' className={({isActive})=>(isActive ? styles.active : "")}>Sobre</NavLink>
            </li>
            {user && <button onClick={logout}>Sair</button>}
        </ul>
    </nav>
  )
}

export default Navbar