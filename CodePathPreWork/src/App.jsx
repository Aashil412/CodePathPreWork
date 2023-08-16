import "./App.css";
import { useRoutes } from "react-router-dom";
import { supabase } from "./client";
import { useState, useEffect } from "react";
import Card from "./components/Card";
import Showcreators from "./pages/ShowCreators";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageLayout from "./pages/PageLayout";
import AddCreator from "./pages/AddCreator";
import EditCreator from "./pages/EditCreator";
import ViewCreator from "./pages/ViewCreator";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout />,
      children: [
        { path: "/", element: <Showcreators /> },
        { path: "/new", element: <AddCreator /> },
        { path: "/edit/:id", element: <EditCreator /> },
        { path: "/:id", element: <ViewCreator /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
