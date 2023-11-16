import styles from '../../pages/Location/Location.module.css'; 

export const InfoNumberLocation = ({index, imagesLocationNumber}) => <div className={styles.container_index}>{`${index}/${imagesLocationNumber}`}</div>; 

export default InfoNumberLocation; 