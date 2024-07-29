import HeroLeft from "../../Elements/HeroLeft";

const Hero = () => {
  return (
    <main className="px-36 pt-36 pb-71 flex flex-row justify-between">
      <HeroLeft />
      <img
        src="../../../../public/images/img-profile.png"
        alt="Profile Picture"
        className="w-243 h-243"
      />
    </main>
  );
};

export default Hero;
