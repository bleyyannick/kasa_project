

import landscape from '../../images/landscape_home.jpg'; 

import { ThumbList, Landscape } from '../../components';

const Home = () => {
  const page = "home"
  return (
   <>
      <Landscape page={page} img={landscape}></Landscape>
      <ThumbList></ThumbList>
  </>
  )
}

export default Home; 