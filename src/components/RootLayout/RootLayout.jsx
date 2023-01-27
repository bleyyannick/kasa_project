import React from 'react'
import Banner from '../Banner/Banner';
import styles from './RootLayout.module.css'; 
import logo from '../../images/logo.png';
import Footer from '../Footer/Footer';

export const RootLayout = ({children})=> {
  return (
    <>
      <div className={styles.container}>
        <Banner img={logo} />
        {children}
      </div>
      <Footer logo={logo} text={"© 2020 Kasa. All rights reserved"}/>
    </>
  )
}

export default RootLayout; 