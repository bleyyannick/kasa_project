import { Link } from 'react-router-dom';
import styles from './Banner.module.css';
export const Banner = ({ img}) => {
    return (
      <header className={styles.header}>
        <img alt="logo" src={img} width="200" />
        <nav className={styles.navbar}>
          <ul className={styles.navbar_list}>
            <li>
              <Link to={"/"}>Accueil</Link>
            </li>
            <li>
              <Link to={"/about"}>A propos</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
  
  export default Banner; 