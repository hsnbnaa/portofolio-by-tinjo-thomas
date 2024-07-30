const BlogContent = (props) => {
  const { title, date, tools, description } = props;
  return (
    <div className="flex flex-col w-full mb-8 pb-18 border-b-2 border-ligth-white">
      <h2 className="text-3xl font-medium pb-4">{title}</h2>
      <div className="flex flex-row pb-6">
        <p className="border-r-2 border-solid border-black pr-6 text-xl">
          {date}
        </p>
        <p className="pl-6 text-light-grey text-xl">{tools}</p>
      </div>
      <p className="text-base text-dark-grey">{description}</p>
    </div>
  );
};

export default BlogContent;
