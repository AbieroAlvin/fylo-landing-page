import BodySection from "./components/BodySection";
import Footer from "./components/Footer";
import IntroSection from "./components/IntroSection";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";

function App() {
  return (
   <div className="min-h-screen">
   <Navbar/>
   <IntroSection/>
   <BodySection/>
   <Signup/>
   <Footer/>
   </div>
  );
}

export default App;
