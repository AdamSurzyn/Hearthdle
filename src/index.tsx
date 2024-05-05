import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Game from "./pages/game";
import { QueryClient, QueryClientProvider } from "react-query";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/hearthdleGame",
    element: <Game />,
  },
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
