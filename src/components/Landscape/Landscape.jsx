import styles from './Landscape.module.css'

export const Landscape = ({img, page}) => {
  const HomeSentence = page === "home" && <p>Chez vous,<br className={styles.responsive}/> partout et ailleurs</p>;  
  const aboutHeight = page === "about" ? `${styles.section} ${styles.about}`: `${styles.section}`; 
  return (
    <div className={aboutHeight}>
      <img alt="landscape" src={img} />
      {HomeSentence}
    </div>
  )
}

export default Landscape; 