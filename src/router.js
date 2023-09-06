import Dashboard from "./views/Dashboard";
import Student from "./views/Student";
import Account from "./views/Account";
import Library from "./views/Library";
import Staff from "./views/Staff";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/student",
    element: <Student />,
  },
  {
    path: "/account",
    element: <Account />,
  },
  {
    path: "/library",
    element: <Library />,
  },
  {
    path: "/staff",
    element: <Staff />,
  },
]);
export default router;
