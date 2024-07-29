const Posts = (props) => {
  const { title, date, tools, description } = props;
  return (
    <div className="flex flex-col bg-white mt-5 p-6 w-418 rounded-sm">
      <h3 className="font-bold text-26 pb-9">{title}</h3>
      <div className="flex flex-row pb-6">
        <p className="border-r-2 border-solid border-black pr-6">{date}</p>
        <p className="pl-6">{tools}</p>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Posts;
