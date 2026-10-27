
import './Hero.css';
import heroBild from '../assets/klocka.png';

function Hero() {
  return (
<section className="hero">
    <div> 
    <p>Detta är en enkel </p>
    <h2>Välkommen till min sida!</h2>
    <p> Allt du söker hittar du här.</p>
    <a className="hero-button" href="#kontakt">Kontakta mig</a>

    </div>
        <img
            className="hero-image"
            src={heroBild}
            alt="Hero"  
            width="120px"
            height="120px"
        />
</section>
  );
}
export default Hero;