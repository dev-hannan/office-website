import "./App.css";
import Navbar from "./Components/Navbar";
import FirstSection from "./Components/FirstSection";
import FifthSection from "./Components/FifthSection";
import SixthSection from "./Components/SixthSection";
import ThirdSection from "./Components/ThirdSection";
import FourthSection from "./Components/fourthSection";
import SecondSection from "./Components/SecondSection";
import EightSection from "./Components/EightSection";
import NinthSection from "./Components/NinthSection";
import SeventhSection from "./Components/SeventhSection";
import Footer from "./Components/Footer";
import ContactUs from "./Components/ContactUs";
const App = () => {
  return (
    <div className="">
      <Navbar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <EightSection />
      <NinthSection />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
