// CSs
import { Link } from "react-router-dom";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
       <h2>Sobre o Mini <span>Blog</span></h2>
       <p>Esse projeto consistem em um blog feito com React no front-end e Firebase no back-end.</p>
       <Link to='/post/create' className="btn">Criar Post</Link>
    </div>
  )
}

export default About