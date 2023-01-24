
import { useState } from 'react';
import ArrowGallery from '../ArrowGallery/ArrowGallery';
import styles from './Gallery.module.css';

export const Gallery = ({images, dataLength}) =>  {
  const [galleryIndex, setGalleryIndex] = useState(1);

  const nextImage = () => galleryIndex !== dataLength ? setGalleryIndex(galleryIndex + 1) : setGalleryIndex(1)
  const prevImage = () => galleryIndex !== 1 ? setGalleryIndex(galleryIndex - 1) : setGalleryIndex(dataLength)
  
  const displayArrow = (length) => length > 1 ? <><ArrowGallery onMove={prevImage} flow={"prev"} /><ArrowGallery onMove={nextImage} flow={"next"} /></>: null
  
  return (
    <div className={styles.container_slider}>
      {images.map((image,index)=> <div key={`${index}`} className={galleryIndex === index + 1 ? `${styles.slide} ${styles.active_anim}`: styles.slide }> <img  alt="single location" src={image}  /></div>)}
      {displayArrow(dataLength)}
      <div className={styles.container_index}>
        {`${galleryIndex}/${dataLength}`}
      </div>
    </div>
  )
}

export default Gallery; 