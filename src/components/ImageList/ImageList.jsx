import styles from '../Gallery/Gallery.module.css';

export const ImageList = ({images, galleryIndex})=> images.map((image,index)=> <div key={`${index}`} className={galleryIndex === index + 1 ? `${styles.slide} ${styles.active_anim}`: styles.slide }> <img  alt="single location" src={image}  /></div>);

export default ImageList; 