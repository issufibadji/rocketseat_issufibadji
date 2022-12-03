import React from "react"
import ReactDOM from "react-dom/client"
import "./style/global.css" //arquivo css precisa de extensão
import { Home } from "./pages/home" //arquivo jsx não precisa de extensão//{Home}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)
