import Button from "../Button";

const HeroLeft = () => {
  return (
    <section className="flex flex-col text-black">
      <h2 className="text-44 font-bold">
        Hi, I am John,
        <br />
        Creative Technologies
      </h2>
      <p className="w-497 font-reguler pt-10 pb-38">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>
      <Button
        title="Download Resume"
        style="bg-red-color text-white font-medium py-3 w-208 rounded-sm text-20 hover:text-black transition-all duration-300"
      />
    </section>
  );
};

export default HeroLeft;
