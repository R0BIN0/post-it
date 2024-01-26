/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control, Controller } from "react-hook-form";
import { IColors } from "../../types/IColors";
import "./ColorPicker.css";
import { memo } from "react";

const ColorPicker = memo((props: { name: string; control: Control<any, any> }) => {
  const colors = Object.values(IColors);

  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field: { onChange, value } }) => (
        <div className="colorPicker-box-container">
          {colors.map((color) => (
            <button
              type="button"
              key={color}
              onClick={() => onChange(color)}
              className="colorPicker-color-box"
              style={{
                background: color,
                border: value === color ? `1px solid ${color === IColors.BLACK ? "grey" : "black"}` : "none",
                boxShadow: value === color ? "-2px 2px 0px black" : "none",
              }}
            />
          ))}
        </div>
      )}
    />
  );
});

export default ColorPicker;
