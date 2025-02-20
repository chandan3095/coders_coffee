import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import QueryForm from "./components/QueryForm/QueryForm";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Services />
      <QueryForm />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
