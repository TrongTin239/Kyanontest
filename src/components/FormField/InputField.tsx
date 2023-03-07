import React, { InputHTMLAttributes } from "react";
import { Control, useController } from "react-hook-form";

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  control: Control<any>;
  name: string;
  placeholder?: string;
  type: string;
  label: string;
  register?: any;
}

export default function InputField({
  control,
  name,
  label,
  placeholder,
  type,
  register,
}: InputFieldProps) {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <div className="input-main ">
      <div className="input-field">
        <p> {label} </p>
        <input
          onBlur={onBlur}
          value={value || ""}
          onChange={onChange || ""}
          type={type || ""}
          placeholder={placeholder || ""}
          name={name || ""}
          {...register}
          // pattern={
          //   name === "email" ? "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$" : ""
          // }
        />
        <p className="warning"> {error ? error.message : ""} </p>
      </div>
    </div>
  );
}
//pattern
// ({
//   required:true
//   pattern:{
//     value:"/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i";
//     message:"Invalid emaill address"
//   }
// })
