import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.css";

function App() {
  return (
    <main className="app-shell">
      <section className="setup-card" aria-labelledby="page-title">
        <p className="eyebrow">Haapsalu kolledž</p>
        <h1 id="page-title">Tunniplaan</h1>
        <p>Rakenduse lähteprojekt on seadistatud.</p>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
