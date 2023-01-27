import styles from './Location.module.css';
import { Collapse, Gallery, Tag, Rating } from '../../components'
import { useParams } from 'react-router-dom'
import { locations } from '../../data/logements'
import CollapseWrapper from '../../components/CollapseWrapper/CollapseWrapper';
import ErrorPage from '../ErrorPage/ErrorPage';

const Location = () => {

  const { id } = useParams();

  const location = locations.find(location => location.id === id);
  if(!location) {
    return <ErrorPage />
  }
  const imagesLocationNumber = location.pictures.length 
  
  const tags = location.tags.map(tag => <Tag key={tag} text={tag} />)
  
  return (
    <>
        <Gallery images={location.pictures} dataLength={imagesLocationNumber} />
        <section className={styles.container_info}>
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
        </section>
        <section className={styles.container_section}>
          <CollapseWrapper>
            <Collapse title={"Description"} text={location.description} />
          </CollapseWrapper>
          <CollapseWrapper>
            <Collapse title={"Equipements"} text={location.equipments} />
          </CollapseWrapper>
        </section> 
    </>
  )
}

export default Location