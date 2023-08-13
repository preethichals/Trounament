import { Route, Routes } from "react-router-dom";
//css
import "./App.css";

//pages
import HomePage from "./pages/HomePage";
import TournamentList from "./pages/TournamentList";
import Tournament from './pages/Tournament';
import CategoryPlan from "./pages/CategoryPlan";
import PageNotFound from "./pages/PageNotFound";
// Admin
import Plans from "./pages/Admin/Plans";
import AdminUsers from "./pages/Admin/AdminUsers";
import CreatePlan from "./pages/Admin/CreatePlan";
import UpdatePlan from "./pages/Admin/UpdatePlan";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateCategory from "./pages/Admin/CreateCategory";
// route

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
         <Route path="/plan" element={<TournamentList />} />
         <Route path="/tournament" element={<Tournament/>} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/plan" element={<Plans />} />
          <Route path="admin/users" element={<AdminUsers />} />
          <Route path="/admin/create-plan" element={<CreatePlan />} />
          <Route path="/admin/plan/:slug" element={<UpdatePlan />} />
          <Route path="/admin/create-category" element={<CreateCategory />} />
        <Route path="/category/:slug" element={<CategoryPlan />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
