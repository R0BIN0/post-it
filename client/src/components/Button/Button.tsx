import { memo } from "react";
import "./Button.css";

type HTMLButtonType = "submit" | "reset" | "button" | undefined;

const Button = memo((props: { title: string; type: HTMLButtonType; onClick?: () => void }) => {
  return (
    <button type={props.type} className="button-content" onClick={props.onClick}>
      {props.title}
    </button>
  );
});

export default Button;
