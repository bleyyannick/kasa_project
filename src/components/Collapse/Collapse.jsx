import styles from './Collapse.module.css'; 
import arrow from '../../images/arrow.png'
import arrowDown from '../../images/arrowDown.png'; 
import { useState } from 'react';



export const Collapse = ({title,text}) => {
  const [isOpen, setIsOpen] = useState(true)
  const collapseState = isOpen ? styles.collapse_text : styles.collapse_closed; 
  const arrowState = isOpen ? arrow : arrowDown
  const handleClick = ()=> {
    setIsOpen(!isOpen)
  }
  const equipementText = typeof text === "object" ? text.map( text => <li key={text}> {text}</li>) : text
  return (
    <div className={styles.collapse_container}>
      <div className={styles.collapse_title}> 
        <p>{title}</p>
        <img alt="clickable arrow" 
        src={arrowState} 
        onClick={handleClick}/>
      </div>
      <div className={collapseState}>
        {equipementText}
      </div>
    </div>
  )
}

export default Collapse; 