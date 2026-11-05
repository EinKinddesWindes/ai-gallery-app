
import { useState } from "react";
import { images } from "./data/images";

import Home from "./pages/Home";
import Books from "./pages/Books";
import About from "./pages/About";

import Gallery from "./components/Gallery";
import Modal from "./components/Modal";
import Contact from "./components/Contact";

const BOOKS = [
  "Alle",
  "Adilia",
  "Ein Kind des Windes",
  "Knödel Prinzessin",
];


const MENU = [
  { id: "startseite", label: "Startseite" },
  { id: "buecher", label: "Bücher & Projekte" },
  { id: "forschung", label: "Forschung" },
  { id: "aktuelles", label: "Aktuelles" },
  { id: "ueber-mich", label: "Über mich" },
  { id: "kontakt", label: "Kontakt" },
];


const BASE = "/ai-gallery-app/";

function getPage() {
  const hash = window.location.hash.replace("#/", "");
  return MENU.some((item) => item.id === hash)
    ? hash
    : "startseite";
}

export default function App() {
  const [page, setPage] = useState(getPage);
  const [filter, setFilter] = useState("Alle");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  function navigate(id) {
    window.history.pushState(
      {},
      "",
      BASE + "#/" + id
    );
    setPage(id);
    setSelected(null);
    window.scrollTo(0, 0);
  }

  return (
  <div
    style={{
    width: "100%",
    minHeight: "100vh",
    margin: 0,
    padding: 0,
    fontFamily: "system-ui, sans-serif",
  }}
>
      <nav
        style={{
          display: "flex",
          flexWrap: "nowrap",
          justifyContent: "space-between",
          gap: 20,
          overflowX: "auto",
         
          padding: "20px max(40px, calc((100% - 1150px) / 2))",

          borderBottom: "1px solid #ddd",
          marginBottom: 0,
        }}
      >
        
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            whiteSpace: "nowrap",
          }}
        >
          <span
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: "#214d3b",
            }}
          >
            Clara Kang
          </span>
        
          <span
            style={{
              fontSize: 12,
              color: "#777",
            }}
          >
            | Author & Researcher
          </span>
        </div>

        
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
          }}
        >

        {MENU.map((item) => (
          <button
            key={item.id}
            onClick={() => navigate(item.id)}
            style={{
              border: "none",
              background: "transparent",
              color:
                page === item.id ? "#214d3b" : "#555",
              fontWeight:
                page === item.id ? "bold" : "normal",
              cursor: "pointer",
              whiteSpace: "nowrap",
              fontSize: 15,
              padding: "8px 0",
            }}
          >
        
            {item.label}
          </button>
        ))}
        </div>
      </nav>

      {page === "startseite" && <Home />}

      {page === "buecher" && (
        <>
          <h1>Bücher und Illustrationen</h1>

          <div
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              marginBottom: 16,
            }}
          >
            {BOOKS.map((b) => (
              <button
                key={b}
                onClick={() => setFilter(b)}
                style={{
                  padding: "8px 12px",
                  borderRadius: 999,
                  border: "1px solid #ddd",
                  background:
                    filter === b ? "#214d3b" : "white",
                  color:
                    filter === b ? "white" : "#111",
                  cursor: "pointer",
                }}
              >
                {b}
              </button>
            ))}
          </div>

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Suche (Titel, Buch, Beschreibung)..."
            style={{
              padding: "10px 12px",
              borderRadius: 12,
              border: "1px solid #ddd",
              width: "100%",
              maxWidth: 400,
              marginBottom: 20,
              boxSizing: "border-box",
            }}
          />

          <Gallery
            items={images}
            filter={filter}
            query={query}
            onSelect={setSelected}
          />
          <Books />
        </>
      )}

      {page === "bezugsquellen" && (
        <section>
          <h1>Bezugsquellen</h1>
          <p>
            Hier finden Sie Informationen darüber,
            wo meine Bücher erhältlich sind.
          </p>
          <Books />
        </section>
      )}

      
      {page === "forschung" && (
        <section style={{ padding: "60px 24px", textAlign: "center" }}>
          <h1>Forschung</h1>
          <h2>KI-gestütztes Storytelling und Kinderliteratur</h2>
          <p>
            Hier stelle ich meine Forschungsinteressen und
            mein geplantes Promotionsvorhaben vor.
          </p>
        </section>
      )}


      {page === "kontakt" && <Contact />}

      <Modal
        item={selected}
        onClose={() => setSelected(null)}
      />
    </div>
  );
}
