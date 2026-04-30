import { Route, Routes } from "react-router"
import { GreetingPage } from './pages/GreetingPage';
import { StartPage } from "./pages/StartPage";

function App() {
  return (
    <Routes>
      <Route path="/greeting" element={<GreetingPage />}/>
      <Route index element={<StartPage />}/>
    </Routes>
    
  );
}

export default App
