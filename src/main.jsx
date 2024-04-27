import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routes/Routes";
import MetaPixel from "./utils/MetaPixel";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <MetaPixel></MetaPixel>
    </RouterProvider>
    ,
  </React.StrictMode>,
);
