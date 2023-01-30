import styles from './Landscape.module.css'

export const Landscape = ({img, page}) => {
  const sentence = page === "home" ? <p>Chez vous,<br className={styles.responsive}/> partout et ailleurs</p> : null; 
  return (
    <div className={styles.section}>
      <img alt="landscape" src={img} />
      {sentence}
    </div>
  )
}

export default Landscape; 