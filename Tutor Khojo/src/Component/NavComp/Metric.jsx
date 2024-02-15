function Metric(metric) {
  metric = metric?.metric;
  return (
    <div className="w-370 p-16 flex flex-col justify-center items-center text-center ">
      <div className="h-234 mt-2 bg-white p-4 border-b-2 border-orange-500 rounded-t-lg">
        <div className="font-semibold text-2xl mt-2">{metric?.percentage}</div>
        <div className="text- mt-2 text-base">
          {metric?.paragraph}
        </div>
      </div>
    </div>
  );
}

export default Metric;
