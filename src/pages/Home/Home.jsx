

import landscape from '../../images/landscape_home.jpg'; 

import { ThumbList, Landscape } from '../../components';

const Home = () => {
  return (
   <>
      <Landscape img={landscape}></Landscape>
      <ThumbList></ThumbList>
  </>
  )
}

export default Home; 