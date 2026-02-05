import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import './index.css'
import App from './App.jsx';
import About from "./About.jsx";
// import Contact from './Contact.jsx';
import PageError from "./PageError.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Projects from "./Projects.jsx";
import ProjectDetail from "./ProjectDetail.jsx";

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
        Component: About,
      },
      // {
      //   path: "/Contact",
      //   Component: Contact,
      // },
      {
        path: "/Projects",
        Component: Projects,
      },
      {
        path: "/Project/:projectId",
        Component: ProjectDetail,
      }]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
