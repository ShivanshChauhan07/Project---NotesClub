import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Front/Header.jsx";
import Footer from "./components/Front/Footer.jsx";
import { Notes } from "./components/Pages/Notes.jsx";
import { Contribute } from "./components/Pages/Contribute.jsx";
import { Home } from "./components/Pages/Home.jsx";
import About from "./components/Front/About.jsx";
import Contact from "./components/Front/Contact.jsx";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/notes/:name",
        element: <Notes />,
      },
      {
        path: "/contribute",
        element: <Contribute />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
