import Navbar from "./Component/Navbar/Navbar";
import "./index.css"
import Team from "./Component/TeamComp/Team";
import Plans from "./Component/PlansComp/Plans";
import Testimonial from "./Component/TeatimonialComp/Teastimonial";

function App() {
  return (
    <>
      <Navbar />
      <Testimonial />
      <Plans />
      <Team />
    </>
  );
}
export default App;
