import Navbar from "./Component/NavComp/Navbar";
import "./index.css";
import Team from "./Component/TeamComp/Team";
import Plans from "./Component/PlansComp/Plans";
import Testimonial from "./Component/TestimonialComp/Testimonial";
import Contact from "./Component/ContactComp/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Testimonial />
      <Plans />
      <Team />
      <Contact />
    </>
  );
}
export default App;
