
import { useEffect, useState } from "react";
import { images } from "./data/images";

import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./components/Gallery";
import Modal from "./components/Modal";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Butterflies from "./components/Butterflies";
import Forschung from "./pages/Forschung";

const BOOKS = [
  "Alle",
  "Adilia",
  "Ein Kind des Windes",
  "Knödel Prinzessin",
  "Wenn ein Stern fällt",
];

const MENU = [
  { id: "startseite", label: "Startseite" },
  { id: "buecher", label: "Bücher" },
  { id: "projekte", label: "Projekte" },
  { id: "forschung", label: "Forschung" },
  { id: "aktuelles", label: "Aktuelles" },
  { id: "ueber-mich", label: "Über mich" },
  { id: "kontakt", label: "Kontakt" },
];

function getPage() {
  const hash = window.location.hash.replace("#/", "");

  return MENU.some((item) => item.id === hash)
    ? hash
    : "startseite";
}

const BUTTERFLY_PAGES = {
  startseite: "home",
  buecher: "buecher",
  projekte: "projekte",
  forschung: "forschung",
  "ueber-mich": "about",
  aktuelles: "other",
  kontakt: "other",
};

export default function App() {
  const [page, setPage] = useState(getPage);
  const [filter, setFilter] = useState("Alle");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  // Synchronize page when hash changes
  useEffect(() => {
    function handleLocationChange() {
      setPage(getPage());
      setSelected(null);
      window.scrollTo(0, 0);
    }

    window.addEventListener("hashchange", handleLocationChange);
    window.addEventListener("popstate", handleLocationChange);

    return () => {
      window.removeEventListener("hashchange", handleLocationChange);
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  function navigate(id) {
    window.location.hash = `/${id}`;
    setPage(id);
    setSelected(null);
    window.scrollTo(0, 0);
  }

  const butterflyPage = BUTTERFLY_PAGES[page] || "other";

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
      {/* NAVIGATION */}
      <nav
        style={{
          display: "flex",
          flexWrap: "nowrap",
          justifyContent: "center",
          alignItems: "center",
          gap: 70,
          overflowX: "auto",
          padding: "20px max(40px, calc((100% - 1150px) / 2))",
          borderBottom: "1px solid #ddd",
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
              fontSize: 22,
              fontWeight: 700,
              color: "#214d3b",
            }}
          >
            Clara Kang
          </span>

          <span style={{ fontSize: 12, color: "#777" }}>
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

      {/* BUTTERFLIES ON ALL SELECTED PAGES */}
      <Butterflies page={butterflyPage} />

      {/* HOME */}
      {page === "startseite" && <Home />}

      {/* BOOKS */}
      {page === "buecher" && (
        <section
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "36px 32px 60px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 20,
              marginBottom: 18,
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
              }}
            >
              {BOOKS.map((b) => (
                <button
                  key={b}
                  onClick={() => setFilter(b)}
                  style={{
                    padding: "9px 14px",
                    borderRadius: 999,
                    border: "1px solid #ddd",
                    background:
                      filter === b ? "#214d3b" : "white",
                    color:
                      filter === b ? "white" : "#333",
                    cursor: "pointer",
                    fontSize: 14,
                  }}
                >
                  {b}
                </button>
              ))}
            </div>

            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Suche..."
              aria-label="Bücher suchen"
              style={{
                padding: "10px 12px",
                borderRadius: 0,
                border: "1px solid #ddd",
                width: 180,
                maxWidth: "100%",
                boxSizing: "border-box",
              }}
            />
          </div>

          <p
            style={{
              fontSize: 14,
              color: "#777",
              margin: "0 0 28px",
            }}
          >
            Buchcover anklicken – mehr erfahren &amp; Links
            zu Amazon und YouTube entdecken.
          </p>

          <Gallery
            items={images}
            filter={filter}
            query={query}
            onSelect={setSelected}
          />
        </section>
      )}

      {/* PROJECTS */}
      {page === "projekte" && (
        <section style={{ padding: "60px 32px" }}>
          <h1>Projekte</h1>
          <p>
            Hier stelle ich meine kreativen und digitalen
            Projekte vor.
          </p>
        </section>
      )}

      {/* RESEARCH */}
     
{page === "forschung" && <Forschung />}

      {/* NEWS */}
      {page === "aktuelles" && (
        <section style={{ padding: "60px 32px" }}>
          <h1>Aktuelles</h1>
          <p>
            Neuigkeiten zu Büchern, Projekten und
            Veranstaltungen.
          </p>
        </section>
      )}

      {/* ABOUT */}
      {page === "ueber-mich" && <About />}

      {/* CONTACT */}
      {page === "kontakt" && <Contact />}

      {/* MODAL */}
      <Modal
        item={selected}
        onClose={() => setSelected(null)}
      />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
