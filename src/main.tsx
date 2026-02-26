import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ThemeProvider from "./context/ThemeContext.tsx";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import Navigation from "./components/routes/Navigation.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Navigation />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
