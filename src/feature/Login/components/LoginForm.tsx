import * as React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "../../../components/FormField/InputField";

import { yupResolver } from "@hookform/resolvers/yup";
import { LoginModel } from "../../../models/LoginModel";
import { useNavigate } from "react-router-dom";
export interface LoginFormProps {
  onSubmit: () => void;
}

const title = "Login";
export default function LoginForm({ onSubmit }: LoginFormProps) {
  const [showPassword, setShowPassWord] = React.useState(false);
  const navigate = useNavigate();
  const schema = yup
    .object({
      email: yup
        .string()
        .required("Please enter your email")

        .email("Invaid email address"),
      password: yup
        .string()
        .required("Please enter your password")
        .min(8, "Password at least 8 characters"),
    })
    .required();

  const { control, handleSubmit, register, formState } = useForm<LoginModel>({
    defaultValues: {
      email: "",
      password: "",
    },

    resolver: yupResolver(schema),
  });
  function handleLoginSubmit() {
    onSubmit?.();
  }
  React.useEffect(() => {}, [formState]);
  return (
    <div className="login-form">
      <p className="login-form-title"> {title} </p>

      <form onSubmit={handleSubmit(handleLoginSubmit)}>
        <InputField
          type="name"
          control={control}
          placeholder="example@kyanon.digital"
          name="email"
          label="Email:"
          register={{
            ...register("email"),
          }}
        />
        <InputField
          type={!showPassword ? "password" : "text"}
          control={control}
          placeholder="******"
          name="password"
          label="Password:"
        />
        <div className="form-action">
          <div className="row">
            <div className="col show-password ">
              <input
                type="checkbox"
                name="checkbox"
                onClick={() => {
                  setShowPassWord((x) => !x);
                }}
              />
              <label htmlFor="checkbox"> Show password </label>
            </div>
            <div className="col sign-in">
              <button type="submit"> Sign in</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
