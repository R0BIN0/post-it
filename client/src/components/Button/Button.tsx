import "./Button.css";

const Button = (props: { title: string; onClick: () => void }) => {
  return (
    <button className="button-content" onClick={props.onClick}>
      {props.title}
    </button>
  );
};

export default Button;
