import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./404.tsx";
import MainDashboard from "./dashboard/speedings/page.tsx";
import RecordPage from "./record/record.tsx";
import Login from "./login/login.tsx";
import Traffic from "./traffic/traffic.tsx";
import Details from "./traffic/Details.tsx";
import About from "./About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { path: "/dashboard", index: true, element: <MainDashboard /> },
      { path: "/record", element: <RecordPage /> },
      { path: "/traffic", element: <Traffic /> },
      { path: "/login", element: <Login /> },
      { path: "/about", element: <About /> },
      { path: "/help", element: <div>Help </div> },
      { path: "/details/:id", element: <Details /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
