import Hero from "../components/Hero";
import NewCollections from "../components/NewCollections";
import Newsletter from "../components/NewsLetter";
import Offer from "../components/Offer";
import Popular from "../components/Popular";

const Home = () => {
  return (
    <>
      <Hero />
      <Popular />
      <Offer />
      <NewCollections />
      <Newsletter />
    </>
  );
};

export default Home;
