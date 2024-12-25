// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./404.tsx";
import MainDashboard from "./dashboard/speedings/page.tsx";
import RecordPage from "./record/record.tsx";
import Login from "./login/login.tsx";
import Traffic from "./traffic/traffic.tsx";
import ProtectedRoute from "./protect.tsx";
import Details from "./traffic/Details.tsx";
import About from "./About/About.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/dashboard",
        index: true,
        element: (
          <ProtectedRoute>
            <MainDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/record",
        element: (
          <ProtectedRoute>
            <RecordPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/traffic",
        element: (
          <ProtectedRoute>
            <Traffic />
          </ProtectedRoute>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <ProtectedRoute>
            <Details />
          </ProtectedRoute>
        ),
      },
      { path: "/login", element: <Login /> },
      { path: "/about", element: <About /> },
      { path: "/help", element: <div>Help</div> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <RouterProvider router={router} />
  // </StrictMode>,
);
