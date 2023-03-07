import * as React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "../../../components/FormField/InputField";

import { yupResolver } from "@hookform/resolvers/yup";
import { LoginModel } from "../../../models/LoginModel";
import { ProfileModel } from "../../../models/ProfileModel";
import { useNavigate } from "react-router-dom";
export interface ProfileFormProps {
  onSubmit: (data: ProfileModel) => void;
}

const title = "Profile";
export default function ProfileForm({ onSubmit }: ProfileFormProps) {
  const [showPassword, setShowPassWord] = React.useState(false);
  const navigate = useNavigate();
  const schema = yup
    .object({
      fullName: yup.string(),
      dayOfBirth: yup.string(),
      email: yup
        .string()
        .required("Email is required")
        .email("Invaid email address"),
      phone: yup
        .string()
        .required("Phone number is required")
        .matches(
          /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,
          "Invaid phone number"
        ),
    })
    .required();

  const { control, handleSubmit, register, formState } = useForm<ProfileModel>({
    defaultValues: {
      email: "",
      fullName: "",
    },

    resolver: yupResolver(schema),
  });
  function handleLoginSubmit(data: ProfileModel) {
    onSubmit?.(data);
  }
  React.useEffect(() => {}, [formState]);
  return (
    <div className="login-form profile-form ">
      <p className="login-form-title profile-form-title"> {title} </p>

      <form onSubmit={handleSubmit(handleLoginSubmit)}>
        <InputField
          type="text"
          control={control}
          name="fullName"
          label="Full name:"
          register={{
            ...register("fullName"),
          }}
        />
        <InputField
          type="date"
          control={control}
          name="dayOfBirth"
          label="Day of Birth:"
          register={{
            ...register("dayOfBirth"),
          }}
        />
        <InputField
          type="text"
          control={control}
          name="email"
          label="Email:"
          register={{
            ...register("email"),
          }}
        />
        <InputField
          type="text"
          control={control}
          name="phone"
          label="Phone:"
          register={{
            ...register("phone"),
          }}
        />
        <div className="form-action">
          <div className="row">
            <div
              className="col show-password "
              onClick={() => {
                navigate("/");
              }}
            >
              <button className="btn-cancel"> Cancel </button>
            </div>
            <div className="col sign-in ">
              <button type="submit">Update</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
