import styles from './Location.module.css';

import { useState } from 'react';
import { useParams } from 'react-router-dom'

import { locations } from '../../data/logements'

import { Collapse, Gallery, Tag, Rating } from '../../components'
import CollapseWrapper from '../../components/CollapseWrapper/CollapseWrapper';
import ErrorPage from '../ErrorPage/ErrorPage';
import ImageList from '../../components/ImageList/ImageList';
import ArrowGallery from '../../components/ArrowGallery/ArrowGallery'; 
import InfoNumberLocation from '../../components/InfoNumberLocation/InfoNumberLocation';



const Location = () => {

  const { id } = useParams();
  const [galleryIndex, setGalleryIndex] = useState(1);

  const nextImage = () => galleryIndex !== location.pictures.length ? setGalleryIndex(galleryIndex + 1) : setGalleryIndex(1); 
  const prevImage = () => galleryIndex !== 1 ? setGalleryIndex(galleryIndex - 1) : setGalleryIndex(location.pictures.length);

  const location = locations.find(location => location.id === id);
  if(!location) return <ErrorPage /> 
  const tags = location.tags.map(tag => <Tag key={tag} text={tag} />)

  return (
    <>
        <Gallery>
          <ImageList images={location.pictures} galleryIndex={galleryIndex} />
           {location.pictures.length && <><ArrowGallery onMove={prevImage} flow={"prev"} /><ArrowGallery onMove={nextImage} flow={"next"} /></>}
          <InfoNumberLocation index={galleryIndex} imagesLocationNumber={location.pictures.length}/>
        </Gallery>
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