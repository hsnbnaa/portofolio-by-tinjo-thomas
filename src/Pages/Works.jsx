import Header from "../components/Fragments/Header";
import Footer from "../components/Fragments/Footer";
import WorksContent from "../components/Elements/WorksContent";

export default function Works() {
  return (
    <div className="bg-white font-heebo min-h-screen">
      <Header />
      <main className="mx-235">
        <h1 className="font-black text-44 pt-90 pb-47">Works</h1>
        <div className="flex flex-col">
          <WorksContent
            source="../../../../public/images/work-1.png"
            title="Designing Dashboards"
            year="2020"
            type="Dashboard"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
          <WorksContent
            source="../../../../public/images/work-2.png"
            title="Vibrant Portraits of 2020"
            year="2018"
            type="Illustration"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
          <WorksContent
            source="../../../../public/images/work-3.png"
            title="36 Days of Malayalam type"
            year="2018"
            type="Typhography"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
          <WorksContent
            source="../../../../public/images/work-4.png"
            title="Components"
            year="2018"
            type="Components, Design"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
