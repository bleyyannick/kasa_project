
import styles from './Home.module.css'; 
import logo from '../../images/logo.png'


import { Banner, ThumbList, Footer, Landscape } from '../../components';

const Home = () => {
  
  return (
    <>
     <Banner img={logo} />
    <Landscape></Landscape>
    <ThumbList></ThumbList>
    <Footer></Footer>
    </>
  )
}

export default Home; 