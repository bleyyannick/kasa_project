export const Banner = ({ img}) => {
    return (
      <header>
        <img alt="logoo" src={img} />
        <nav>
          <ul>
            <li>Accueil</li>
            <li>A propos</li>
          </ul>
        </nav>
      </header>
    )
  }
  
  export default Banner; 