import { useRouteError } from "react-router-dom";
import styles from './ErrorPage.module.css'; 
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className={styles.body}>ErrorPage
      <p>{error.statusText || error.message}</p>
    </div>
  )
}

export default ErrorPage; 