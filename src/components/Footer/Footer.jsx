import styles from './Footer.module.css'; 

export const Footer = ({logo, text}) => {
    return (
      <footer className={styles.footer}>
        <img className={styles.white} src={logo} alt="logo entreprise" />
        <p>{text}</p>
      </footer>
    )
  }
  
  export default Footer; 