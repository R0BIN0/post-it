/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller } from "react-hook-form";
import "./Input.css";
import { IInputProps } from "../../types/IInputProps";

const Input = (props: IInputProps) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field }) => (
        <div className="input-container">
          <input {...field} placeholder={props.placeholder} data-error={!!props.errors[props.name]} />
          {props.errors[props.name] && <p>{String(props.errors[props.name]?.message)}</p>}
        </div>
      )}
    />
  );
};

export default Input;
