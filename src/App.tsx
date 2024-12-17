import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Admin from "./pages/admin";
import { RootLayout } from "./layout/RootLayout";
import AdminLayout from "./layout/adminLayout";
import UsersList from "./pages/users/UsersList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}></Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route path="users" element={<UsersList />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
