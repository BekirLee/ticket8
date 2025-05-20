import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./assets/components/Layout";
import Home from "./assets/pages/Home";
import Errorpage from "./assets/pages/Errorpage";
import Details from "./assets/pages/Details";
import Admin from "./assets/pages/Admin/Admin";
import Basket from "./assets/pages/Basket";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",  
          element: <Home />,
        },
        {
          path: "/admin",
          element: <Admin />,
        },
        {
          path: "/details/:id",
          element: <Details />,
        },
        {
          path: "/basket",
          element: <Basket />,
        },
        {
          path: "/*",
          element: <Errorpage />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
