import flexible from "../assets/img/whyus/FlexibleIcon.png";
import tutor from "../assets/img/whyus/TutorIcon.png";
import progress from "../assets/img/whyus/ProgressIcon.png";

function Whyus(detail) {
  const subText = detail?.detail[0]
  const imageSrc = detail?.detail[1]
  return (
    <div className="h-456 w-370 flex flex-col justify-center items-center text-center bg-white m-14 border-b rounded-lg">
      <div className="flex flex-col justify-center items-center h-352 w-310">
      <img src={imageSrc} className="m-4" />
        <div className="font-semibold text-2xl mt-2">{subText.heading}</div>
        <div className="font-semibold text- mt-2 text-base">
          {subText.subheading}
        </div>
      </div>
    </div>
  );
}

export default Whyus;
