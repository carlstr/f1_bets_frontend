import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Drivers from "./pages/Drivers";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/drivers/:driverId" element={<Drivers />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
