
import { Link } from 'react-router-dom';
import styles from './Thumb.module.css'
export const Thumb = ({location})  => {
  return (
    <div className={styles.container}>
     
      <Link to={`location/${location.id}`}>
      <img className={styles.image} alt="location" src={location.cover} />
      <p>{location.title}</p>
      </Link>
    </div>
  )
}

export default Thumb; 