import { Route } from "react-router";
import { Routes } from "react-router-dom";
import "./App.css";
import Login from "./feature/Login/pages/Login";
import Profile from "./feature/Profile/pages/Profile";
import MainLayout from "./MainLayout/MainLayout";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
