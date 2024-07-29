const WorksContent = (props) => {
    const { source, title, year, type, description } = props
  return (
    <div className="flex flex-row w-full mb-8 pb-18 border-b-2 border-ligth-white">
      <img
        src={source}
        alt="Works-1"
        className="w-246 h-180"
      />
      <div className="pl-5">
        <h3 className="font-bold text-3xl text-dark-grey">{title}</h3>
        <h4 className="pt-8 pb-6">
          <span className="px-3 text-lg border-2 rounded-s-full rounded-e-full bg-black text-white border-black font-black">
            {year}
          </span>
          <span className="text-xl p-0 pl-6 bg-none text-light-grey">{type}</span>
        </h4>
        <p className="text-base text-dark-grey">
          {description}
        </p>
      </div>
    </div>
  );
};

export default WorksContent;
