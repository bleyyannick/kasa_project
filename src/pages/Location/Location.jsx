import styles from './Location.module.css';

import { useState } from 'react';
import { useParams } from 'react-router-dom'

import { locations } from '../../data/logements'

import { Collapse, Gallery } from '../../components'
import CollapseWrapper from '../../components/CollapseWrapper/CollapseWrapper';
import ErrorPage from '../ErrorPage/ErrorPage';
import ImageList from '../../components/ImageList/ImageList';
import ArrowGallery from '../../components/ArrowGallery/ArrowGallery'; 
import InfoNumberLocation from '../../components/InfoNumberLocation/InfoNumberLocation';
import ContainerInfoLocation from '../../components/ContainerInfoLocation/ContainerInfoLocation';
import InfoLocation from '../../components/InfoLocation/InfoLocation';



const Location = () => {

  const { id } = useParams();
  const [galleryIndex, setGalleryIndex] = useState(1);

  const nextImage = () => galleryIndex !== location.pictures.length ? setGalleryIndex(galleryIndex + 1) : setGalleryIndex(1); 
  const prevImage = () => galleryIndex !== 1 ? setGalleryIndex(galleryIndex - 1) : setGalleryIndex(location.pictures.length);
  const location = locations.find(location => location.id === id);
  const displayArrowGallery = location.pictures.length && <><ArrowGallery onMove={prevImage} flow={"prev"} /><ArrowGallery onMove={nextImage} flow={"next"} /></>
  if(!location) return <ErrorPage /> 
  

  return (
    <>
        <Gallery>
          <ImageList images={location.pictures} galleryIndex={galleryIndex} />
           {displayArrowGallery}
          <InfoNumberLocation index={galleryIndex} imagesLocationNumber={location.pictures.length}/>
        </Gallery>

        <ContainerInfoLocation>
          <InfoLocation location={location} />
        </ContainerInfoLocation>
        
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