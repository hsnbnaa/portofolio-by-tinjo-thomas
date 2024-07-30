import Header from "../components/Fragments/Header";
import Footer from "../components/Fragments/Footer";
import BlogContent from "../components/Fragments/BlogContent";

export default function Blog() {
  return (
    <div className="bg-white font-heebo min-h-screen">
      <Header />
      <main className="mx-235">
        <h1 className="font-bold text-44 pt-90 pb-16">Blog</h1>
        <BlogContent
          title="UI Interactions of the week"
          date="12 Feb 2019"
          tools="Express, Handlebars"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
        <BlogContent
          title="UI Interactions of the week"
          date="12 Feb 2019"
          tools="Express, Handlebars"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
        <BlogContent
          title="UI Interactions of the week"
          date="12 Feb 2019"
          tools="Express, Handlebars"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
        <BlogContent
          title="UI Interactions of the week"
          date="12 Feb 2019"
          tools="Express, Handlebars"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
      </main>
      <Footer />
    </div>
  );
}
