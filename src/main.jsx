import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import PageError from "./PageError.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function Layout() {
  return (
    <>
      <Header/>
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <PageError />,
    children: [
      {
        path: "/",
        Component: App,
      },
      {
        path: "/About",
        Component: App,
      },
      {
        path: "/Contact",
        Component: App,
      },
      {
        path: "/Projects",
        Component: App,
      },
      {
        path: "/Projects/Magellan",
        Component: App,
      }]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
