import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./assets/components/Layout";
import Home from "./assets/pages/Home";
import Errorpage from "./assets/pages/Errorpage";

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
