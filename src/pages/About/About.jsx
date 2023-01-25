import styles from './About.module.css'
import { Banner, Collapse, Footer, Landscape } from '../../components';
import logo from '../../images/logo.png';
import landscape from '../../images/landscape_about.jpg';

const About = () => {
  return (
   <>
    <div className={styles.container}>
      <Banner img={logo} />
      <Landscape img={landscape} />
      <section className={styles.collapse_section}>
        <Collapse
         width="100%"
         title="Fiabilité"
         text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
         />
        <Collapse 
          title="Respect"
          text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
         />
        <Collapse 
          title="Service"
          text="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
         />
        <Collapse 
         title="Securité"
         text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </section>
    </div>
    <Footer logo={logo} text={"© 2020 Kasa. All rights reserved"}/>
   </>
  )
}
export default About; 