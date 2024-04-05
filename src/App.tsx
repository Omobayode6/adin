import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import ScrollToTop from "./components/reusable/ScrollToTop";
import Login from "./pages/auth/Login";
import AdminDashboardLayout from "./layout/AdminLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import AcademicSession from "./pages/dashboard/academics/AcademicSession";
import ManageAcademics from "./pages/dashboard/academics/ManageAcademics";
import CourseManagement from "./pages/dashboard/CourseManagement";
import UserManagement from "./pages/dashboard/UserManagement";
import Helps from "./pages/dashboard/Helps";
import Settings from "./pages/dashboard/Settings";
import Home from "./pages/auth/Home";


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboardLayout />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/academic-session" element={<AcademicSession />} />
          <Route path="/admin/manage-academics" element={<ManageAcademics />} />
          <Route path="/admin/course-management" element={<CourseManagement />} />
          <Route path="/admin/user-management" element={<UserManagement />} />
          <Route path="/admin/helps" element={<Helps />} />
          <Route path="/admin/settings" element={<Settings />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
