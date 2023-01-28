import styles from './Landscape.module.css'
export const Landscape = ({img}) => {
  return (
    <div className={styles.section}>
      <img alt="landscape" src={img} />
      <p>Chez vous,<br className={styles.responsive}/> partout et ailleurs</p>
    </div>
  )
}

export default Landscape; 