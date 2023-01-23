import styles from './Tag.module.css'
export const Tag = ({text}) => {
  return (
    <div className={styles.tag}>{text}</div>
  )
}

export default Tag; 