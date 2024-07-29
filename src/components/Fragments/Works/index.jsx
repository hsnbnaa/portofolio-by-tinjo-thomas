import WorksContent from "../../Elements/WorksContent";

const Works = () => {
  return (
    <main className="mx-36 mt-7">
      <h2 className="pb-47 text-2xl">Featured Works</h2>
      <div className="flex flex-col">
        <WorksContent source="../../../../public/images/work-1.png" title="Designing Dashboards" year="2020" type="Dashboard" description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." />
        <WorksContent source="../../../../public/images/work-2.png" title="Vibrant Portraits of 2020" year="2018" type="Illustration" description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." />
        <WorksContent source="../../../../public/images/work-3.png" title="36 Days of Malayalam type" year="2018" type="Typhography" description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." />
      </div>
    </main>
  );
};

export default Works;
