import tutorkhojo from "../../assets/Images/tutorkhojo.png";
import phonecall from "../../assets/Images/PhoneCall.png";
import teaching from "../../assets/Images/Teaching-amico1.png";
import { whyus } from "../../constant/whyus";
import Whyus from "./Whyus";
import { metric } from "../../constant/metric";
import Metric from "./Metric";
import flexible from "../../assets/Images/whyus/FlexibleIcon.png";
import tutor from "../../assets/Images/whyus/TutorIcon.png";
import progress from "../../assets/Images/whyus/ProgressIcon.png";

function Navbar() {
  const imagesSrc = [flexible, tutor, progress];
  return (
    <div className="pl-14 pr-14 font-poppins">
      <div className=" flex items-center h-24 md:justify-between">
        <div>
          <img src={tutorkhojo} alt="tutorkhojo" />
        </div>
        <div className="flex ">
          <img src={phonecall} alt="phonecall" className="mr-2" />
          6381223900
        </div>
      </div>
      <div className="relative h-690">
        <div className="font-bold text-4xl mt-4">
          Transform Your Education Experience <br />
          Quality Tutoring, Anytime, Anywhere
        </div>
        <p className="mt-10">
          Experience the warmth of face-to-face interactions, as our dedicated{" "}
          <br />
          tutors provide genuine guidance, ensuring a personalized educational{" "}
          <br />
          experience that transcends the limitations of screens
        </p>
        <div className="flex mt-72">
          <div className="btn filled-button ">Get Started</div>
          <div className="btn outlined-button ml-4">How it works</div>
          <img
            src={teaching}
            alt="teaching"
            className="absolute right-0 bottom-0"
          />
        </div>
      </div>
      <div className="flex flex-col items-center mt-36 text-2xl">
        <strong className="italic">
          "Education is not just a process of learning facts but the training of
          the mind to think."
        </strong>
        <div className="text-right">- Jawaharlal Nehru</div>
      </div>
      <div
        className="flex flex-col justify-center items-center py-28 px-14 font-poppins"
        style={{ backgroundColor: "#F8F9FF" }}
      >
        <h1 className="font-extrabold text-4xl mb-5">Why us?</h1>
        <p>
          {" "}
          These are just a few features that are highlights of our enterprise
        </p>
        <div
          className="flex justify-between w-full mt-14"
          style={{ backgroundColor: "#F8F9FF" }}
        >
          {whyus.map((item, index) => (
            <Whyus detail={[item, imagesSrc[index]]} />
          ))}
        </div>
      </div>
      <div
        className="flex flex-col justify-center items-center py-28 px-14 font-poppins"
        style={{ backgroundColor: "#F8F9FF" }}
      >
        <h1 className="font-extrabold text-4xl mb-5">
          Our Metrics Tell the Story
        </h1>
        <p>
          Our metrics component gives you the inside scoop on why our
          methodologies are the best in bussiness
        </p>
        <div className="flex">
          {metric.map((item, index) => (
            <Metric metric={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
