import "../buttons.scss";

function Button({ myClass, title }) {
  return (
    <button className={myClass} type="submit">
      {title}
    </button>
  );
}

export default Button;
