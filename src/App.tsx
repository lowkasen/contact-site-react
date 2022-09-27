import { Navigate, Route, Routes } from "react-router-dom";
import TopNavigation from "./components/TopNavigation";
import AppLayout from "./components/AppLayout";
import ProtectedOne from "./pages/ProtectedOne";
import ProtectedTwo from "./pages/ProtectedTwo";
import ProtectedThree from "./pages/ProtectedThree";
import UnprotectedFour from "./pages/UnprotectedFour";
import Login from "./pages/Login";
import Signout from "./pages/Signout";
import RequireAuth from "./components/RequireAuth";

export default function App() {
  return (
    <>
      <TopNavigation />
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signout" element={<Signout />}></Route>
          <Route element={<RequireAuth />}>
            <Route path="/" element={<Navigate to="/protectedone" />}></Route>
            <Route path="/protectedone" element={<ProtectedOne />}></Route>
            <Route path="/protectedtwo" element={<ProtectedTwo />}></Route>
            <Route path="/protectedthree" element={<ProtectedThree />}></Route>
          </Route>
          <Route path="/unprotectedfour" element={<UnprotectedFour />}></Route>
          <Route path="*" element={<>NotFound</>}></Route>
        </Route>
      </Routes>
    </>
  );
}
