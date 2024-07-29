import Posts from "../../Elements/Posts";

const Recent = () => {
  return (
    <main className="px-36 pt-7 pb-8 bg-blue-light m-0">
      <div className="flex flex-row justify-between">
        <h2 className="text-2xl">Recent Post</h2>
        <h3>
          <a href="" className="text-blue-400">
            View all
          </a>
        </h3>
      </div>
      <div className="flex flex-row gap-5">
        <Posts
          title="Making a design system from scratch"
          date="12 Feb 2020"
          tools="Design, Pattern"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
        <Posts
          title="Creating pixel perfect icons in Figma"
          date="12 Feb 2020"
          tools="Figma, Icon Design"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
        <Posts
          title="Creating pixel perfect icons in Figma"
          date="12 Feb 2020"
          tools="Figma, Icon Design"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
        
      </div>
    </main>
  );
};

export default Recent;
