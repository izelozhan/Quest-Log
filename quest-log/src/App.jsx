import "./styles/main.scss";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Habits from "./pages/Habits";
import Login from "./pages/Login";
import Stats from "./pages/Stats";
import Sidebar from "./layouts/Sidebar";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/habits" element={<Habits />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
