import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Game from "./pages/game/game";
import Hearthdle from "./pages/game/hearthdle/heartdleWithContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
 
  {
    path: "/game",
    element: <Game />,
    children:[
      {
        path: "/game/hearthdle",
        element: <Hearthdle />,
      },
    ]
  }
]);
const blizzardQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      //The cards don't change too much so we can stale the data for 10 minutes
      staleTime: 600000,
    },
  },
});

root.render(
  <React.StrictMode>
    <QueryClientProvider client={blizzardQueryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
