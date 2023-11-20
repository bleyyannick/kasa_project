import { Rating } from '../Rating/Rating';
import Tag from '../Tag/Tag';
import styles from '../../pages/Location/Location.module.css'

export const InfoLocation = ({location}) => {
const tags = location.tags.map(tag => <Tag key={tag} text={tag} />); 

  return (
    <>
         <div className={styles.container_introduction}>
            <h2>{location.title}</h2>
            <h3>{location.location}</h3>
            <div className={styles.container_tag}>{tags}</div>
          </div>
          <div className={styles.container_introduction_notation}>
            <div>
              <p>{location.host.name}</p>
              <img className={styles.img_location} alt="host face" src={location.host.picture} />
            </div>
            <Rating rate={location.rating}/>
          </div>
    </>
  )
}; 

export default InfoLocation;