import "./App.css";
import BannerSlider from "./components/banner";
import Footer from "./components/footer";
import JewelrySection from "./components/jewellery-section";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BannerSlider />
      <JewelrySection />
      <Footer/>
    </div>
  );
}

export default App;
