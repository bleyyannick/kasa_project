
import { useState } from 'react';
import ArrowGallery from '../ArrowGallery/ArrowGallery';
import styles from './Gallery.module.css';

export const Gallery = ({images, dataLength}) =>  {
  const [galleryIndex, setGalleryIndex] = useState(1);
  const nextImage = () => {
     if(galleryIndex !== dataLength) {
     setGalleryIndex(galleryIndex + 1)
     } else if(galleryIndex === dataLength) {
      setGalleryIndex(1)
     }
  }
  const prevImage = () => {
    if(galleryIndex !== 1) {
      setGalleryIndex(galleryIndex - 1)
    } else if (galleryIndex === 1) {
      setGalleryIndex(dataLength)
    }
  } 
  
  return (
    <div className={styles.container_slider}>
      {images.map((image,index)=> <div key={`${index}`} className={galleryIndex === index + 1 ? `${styles.slide} ${styles.active_anim}`: styles.slide }> <img  alt="c'est cool" src={image}  /></div>)}
      <ArrowGallery onMove={prevImage} flow={"prev"} />
      <ArrowGallery onMove={nextImage} flow={"next"} />
    </div>
  )
}

export default Gallery; 