import React from 'react';
import App from './App';
import "../src/assets/css/index.css"
import { createRoot } from 'react-dom/client';
// import * as ReactDOM from "react-dom/client";

createRoot(document.getElementById('root')).render(
  <App />
);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );