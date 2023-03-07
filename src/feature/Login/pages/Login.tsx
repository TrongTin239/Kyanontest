import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";

import { toast } from "react-toastify";
export interface LoginProps {}

export default function Login(props: LoginProps) {
  const navigate = useNavigate();
  async function handleLoginSubmit() {
    await toast.success("Login successfully!!");
    navigate("/profile");
  }
  return (
    <div className="">
      <div className="login-page ">
        <LoginForm onSubmit={handleLoginSubmit} />
      </div>
    </div>
  );
}
