import nextArrow from '../../images/nextArrow.svg'; 
import prevArrow from '../../images/prevArrow.svg'; 
import './ArrowGallery.css'; 

function ArrowGallery({onMove, flow}) {
  return (
    <div onClick={onMove} className={flow === "next" ? 'arrow_slide next': "arrow_slide prev"}>
        <img alt="arrow for handling gallery" src={flow === "next" ? nextArrow : prevArrow}/>
    </div >
  )
}

export default ArrowGallery