import "./App.css";
import Auth from "./Components/Authentication/Auth";
import { Routes, Route } from "react-router-dom";
import ClientNav from "./Components/Nav/ClientNav";
import ClientProfile from "./Components/Profile/ClientProfile";
import ClientSchedule from "./Components/Schedule/ClientSchedule";
import AdminSchedule from "./Components/Schedule/AdminSchedule";
import AdminProfile from "./Components/Profile/AdminProfile";
import AdminUsers from "./Components/Users.js/Users";

function App() {
  return (
    <div className="App">
      <ClientNav />
      <Routes>
        <Route path="/admin/schedule" element={<AdminSchedule />} />
        <Route path="/admin/profile" element={<AdminProfile />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/client/schedule" element={<ClientSchedule />} />
        <Route path="/client/profile" element={<ClientProfile />} />
        <Route path="*" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
