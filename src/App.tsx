import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import TopNavigation from "./components/TopNavigation";
import ProtectedOne from "./pages/ProtectedOne";
import ProtectedThree from "./pages/ProtectedThree";
import ProtectedTwo from "./pages/ProtectedTwo";

function App() {
  return (
    <>
      <TopNavigation />
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<>Home</>}></Route>
          <Route path="/protectedone" element={<ProtectedOne />}></Route>
          <Route path="/protectedtwo" element={<ProtectedTwo />}></Route>
          <Route path="/protectedthree" element={<ProtectedThree />}></Route>
          <Route path="*" element={<>NotFound</>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
