import { Link } from 'react-router-dom';
import styles from './ErrorPage.module.css'; 


const ErrorPage = () => {
  return (
  <div className={styles.container} >
    <h1>404</h1>
    <p>Oups! La page que vous demandez n'existe pas</p>
     <Link to='/'>
       Retourner sur la page d'accueil
     </Link>
  </div>
  )
}

export default ErrorPage; 