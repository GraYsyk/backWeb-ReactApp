import { Route, Routes } from "react-router"
import { StartPage } from "./pages/StartPage";
import { DefaultGameLayout } from "./pages/components/DefaultGameLayout";
import { FirstPage } from "./pages/gamePages/FirstPage";
import { SecondPage } from "./pages/gamePages/SecondPage";
import { ThirdPage } from "./pages/gamePages/ThirdPage";
import { ForthPage } from "./pages/gamePages/ForthPage";
import { FifthPage } from "./pages/gamePages/FifthPage";
import { SixthPage } from "./pages/gamePages/SixthPage";
import { SeventhPage } from "./pages/gamePages/SeventhPage";
import { SuccessPage } from "./pages/SuccessPage";
import { LoginPage } from "./pages/LoginPage";
import { Final } from "./pages/final";
import { Credits } from "./pages/Credits";

function App() {
  return (
    <Routes>
      <Route element={<DefaultGameLayout />}>
        <Route path="/" element={<StartPage />}/>
        <Route path="/page01" element={<FirstPage />}/>
        <Route path="/page02" element={<SecondPage />}/>
        <Route path="/page03" element={<ThirdPage />}/>
        <Route path="/page04" element={<ForthPage />}/>
        <Route path="/page05" element={<FifthPage />}/>
        <Route path="/page06" element={<SixthPage />}/>
        <Route path="/page07" element={<SeventhPage />}/>
        <Route path="/success" element={<SuccessPage />}/>
        <Route path="/login" element={<LoginPage />}/>
      </Route>
      <Route path="/final" element={<Final />}/>
      <Route path="/credits" element={<Credits/>}/>
    </Routes>
    
  );
}

export default App
