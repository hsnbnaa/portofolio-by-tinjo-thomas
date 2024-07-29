const Button = (props) => {
  const { title, style } = props;
  return (
    <button type="button" className={style}>
      {title}
    </button>
  );
};

export default Button;
