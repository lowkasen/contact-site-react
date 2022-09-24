import { Route, Routes } from "react-router-dom";
import TopNavigation from "./components/TopNavigation";
import AppLayout from "./components/AppLayout";
import ProtectedOne from "./pages/ProtectedOne";
import ProtectedTwo from "./pages/ProtectedTwo";
import ProtectedThree from "./pages/ProtectedThree";
import UnprotectedFour from "./pages/UnprotectedFour";

export default function App() {
  return (
    <>
      <TopNavigation isLoggedIn={true} />
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<>Home</>}></Route>
          <Route path="/protectedone" element={<ProtectedOne />}></Route>
          <Route path="/protectedtwo" element={<ProtectedTwo />}></Route>
          <Route path="/protectedthree" element={<ProtectedThree />}></Route>
          <Route path="/unprotectedfour" element={<UnprotectedFour />}></Route>
          <Route path="*" element={<>NotFound</>}></Route>
        </Route>
      </Routes>
    </>
  );
}
