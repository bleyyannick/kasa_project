import { useRouteError } from "react-router-dom";
import { Footer } from "../../components";
import logo from '../../images/logo.png'; 

import styles from './ErrorPage.module.css'; 
const ErrorPage = () => {
  const error = useRouteError();
  return (
  <>
    <div className={styles.body}>ErrorPage
      <p>{error.statusText || error.message}</p>
    </div>
    <Footer logo={logo} text={"© 2020 Kasa. All rights reserved"}/>
  </>
  )
}

export default ErrorPage; 