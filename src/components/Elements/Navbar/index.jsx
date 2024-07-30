const Navbar = () => {
  return (
      <ul className="list-none flex justify-end flex-row gap-10 text-black font-medium text-lg font-5">
        <li>
          <a href="works">Works</a>
        </li>
        <li>
          <a href="blog">Blog</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
  );
};

export default Navbar;
