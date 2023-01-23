import styles from './Location.module.css'
import logo from '../../images/logo.png'
import { Banner, Collapse, Footer, Gallery, Tag, Rating } from '../../components'
import { useParams } from 'react-router-dom'
import { locations } from '../../data/logements'

const Location = () => {

  const { id } = useParams();

  const location = locations.find(location => location.id === id);
  const tags = location.tags.map(tag => <Tag key={tag} text={tag} />)
  return (
    <div className={styles.container}>
      <Banner img={logo} />
      <Gallery images={location.pictures} />
      <section className={styles.container_info}>
        <div className={styles.container_introduction}>
          <p> {location.title} </p>
          <p>{location.location}</p>
          <div className={styles.container_tag}>{tags}</div>
        </div>
        <div className={styles.container_introduction}>
          <span>{location.host.name}</span>
          <div>
            <img className={styles.owner_location} alt="host face" src={location.host.picture} />
            <Rating rate={location.rating}/>
          </div>
        </div>
      </section>
      <section className={styles.container_section}>
        <div className={styles.collapseWrapper}>
          <Collapse title={"Description"} text={location.description} />
        </div>
        <div className={styles.collapseWrapper}>
          <Collapse title={"Equipements"} text={location.equipments} />
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Location