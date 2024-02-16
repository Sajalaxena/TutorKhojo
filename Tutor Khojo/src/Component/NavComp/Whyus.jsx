function Whyus(detail) {
  const subText = detail?.detail[0]
  const imageSrc = detail?.detail[1]
  return (
    <div className="rounded-3xl bg-white w-96 py-10 px-8" style={{ boxShadow: '35px 29px 48px rgba(51, 102, 255, 0.05)', width: '370px' }} bg-white>
      <div className="flex flex-col justify-center items-center h-352 w-310">
      <img src={imageSrc} className="m-4" />
        <div className="font-bold text-xl text-center">{subText.heading}</div>
        <div className="text-base text-center mt-4">
          {subText.subheading}
        </div>
      </div>
    </div>

    
  );
}

export default Whyus;
