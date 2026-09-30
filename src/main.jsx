import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/Portfolio-Project">
      <App />
    </BrowserRouter>
  </StrictMode>
);