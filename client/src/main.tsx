import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import ThemeProvider from "./context/ThemeProvider";
import HomePage from "./pages/HomePage";
import Quotes from "./pages/Quotes";

const options = {
  method: "GET",
  headers: { "x-api-key": `${import.meta.env.VITE_NINJA_API_KEY}` },
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "quotes/:category",
        element: <Quotes />,
        loader: ({ params }) => {
          return fetch(
            `https://api.api-ninjas.com/v1/quotes?category=${params.category}&appid=oO7a9B83jVV6xNzeZj7w5g==EMxSx5M4B64F1lpZ`,
            options,
          );
        },
      },
    ],
  },
]);

const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
