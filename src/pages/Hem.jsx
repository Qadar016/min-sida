import Header from "../components/Header";
import Hero from "../components/Hero";
import Projekt from "../components/Projekt";
import Raknare from "../components/Raknare";

function Hem() {
  return (
    <>
      <Header namn="Hej" />
      <Hero />
      <Projekt />
      <Raknare />
    </>
  );
}

export default Hem;