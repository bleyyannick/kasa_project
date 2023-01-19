import styles from './Landscape.module.css'
export const Landscape = ({img}) => {
  return (
    <div className={styles.section}>
      <img alt="landscape" src={img} />
    </div>
  )
}

export default Landscape; 