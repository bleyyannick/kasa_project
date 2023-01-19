import styles from './Gallery.module.css'
export const Gallery = ({images}) =>  {
  return (
    <div className={styles.full_container}>
      {images.map(image => <div key={`${image}`} className={styles.container}> <img  alt="c'est cool" src={image}  /> </div>)}
    </div>
  )
}

export default Gallery; 