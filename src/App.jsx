import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/LoginPage";
import Signup from "./pages/SignupPage";
// import Home from "./pages/Home";
// import ProtectedRoute from "./components/ProtectedRoute"; // For authentication

const router = createBrowserRouter([
  // { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  // {
  //   path: "/dashboard",
  //   element: (
      // <ProtectedRoute>
      //   <Dashboard />
      // </ProtectedRoute>
    // ),
  // },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
