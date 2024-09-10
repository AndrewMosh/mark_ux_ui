import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Main } from "./Pages/Main/Main";
import { Portfolio } from "./Pages/Portfolio/Portfolio";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Main />,
            },
            {
                path: "/portfolio",
                element: <Portfolio />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")!).render(
        <RouterProvider router={router} />
);