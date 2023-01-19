import styles from './Location.module.css'
import logo from '../../images/logo.png'
import { Banner, Gallery } from '../../components'
import { useParams } from 'react-router-dom'
import { locations } from '../../data/logements'
const Location = () => {

  const {id} = useParams(); 

  const location = locations.find(location => location.id === id); 
  return (
    <div className={styles.container}>
      <Banner img={logo} />
      <Gallery images={location.pictures} />
      <section>
        
      </section>
    </div>
  )
}

export default Location