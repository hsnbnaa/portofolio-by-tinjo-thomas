import Header from "../components/Fragments/Header";
import Hero from "../components/Fragments/Hero";
import Recent from "../components/Fragments/Recent";
import Works from "../components/Fragments/Works";
import Footer from "../components/Fragments/Footer";

function Home() {
  return (
    <div className="bg-white font-heebo min-h-screen">
      <Header />
      <Hero />
      <Recent />
      <Works />
      <Footer />
    </div>
  );
}

export default Home;
