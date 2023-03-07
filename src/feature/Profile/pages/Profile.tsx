import * as React from "react";
import { LoginModel } from "../../../models/LoginModel";
import { ProfileModel } from "../../../models/ProfileModel";
import ProfileForm from "../components/ProfileForm";
import { toast } from "react-toastify";
export interface ProfileProps {}

export default function Profile(props: ProfileProps) {
  const handleSubmit = async (data: ProfileModel) => {
    await toast.success("Update successfully!!");
    console.log(data);
  };
  return (
    <div className="login-page">
      <ProfileForm onSubmit={handleSubmit} />
    </div>
  );
}
