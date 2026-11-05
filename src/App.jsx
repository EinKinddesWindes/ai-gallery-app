
import { useState } from "react";
import { images } from "./data/images";

import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./components/Gallery";
import Modal from "./components/Modal";
import Contact from "./components/Contact";

const MENU = [
  { id: "startseite", label: "Startseite" },
  { id: "buecher", label: "Bücher" },
  { id: "projekte", label: "Projekte" },
  { id: "forschung", label: "Forschung" },
  { id: "aktuelles", label: "Aktuelles" },
  { id: "ueber-mich", label: "Über mich" },
  { id: "kontakt", label: "Kontakt" },
];

const BASE = import.meta.env.BASE_URL;
const PAGE_SIZE = 12;

function getPage() {
  const hash = window.location.hash.replace("#/", "");
  return MENU.some((item) => item.id === hash)
    ? hash
    : "startseite";
}

export default function App() {
  const [page, setPage] = useState(getPage);
  const [status, setStatus] = useState("Alle");
  const [query, setQuery] = useState("");
  const [bookPage, setBookPage] = useState(1);
  const [selected, setSelected] = useState(null);

  function navigate(id) {
    window.history.pushState({}, "", BASE + "#/" + id);
    setPage(id);
    setSelected(null);
    window.scrollTo(0, 0);
  }

  function changeStatus(value) {
    setStatus(value);
    setBookPage(1);
  }

  function changeQuery(value) {
    setQuery(value);
    setBookPage(1);
  }

  const filteredBooks = images.filter((item) => {
    const matchesSearch = [
      item.title,
      item.book,
      item.description,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase()
      .includes(query.toLowerCase());

    const matchesStatus =
      status === "Alle" ||
      (status === "Veröffentlicht" && Boolean(item.year)) ||
      (status === "In Vorbereitung" && !item.year);

    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.max(
    1,
    Math.ceil(filteredBooks.length / PAGE_SIZE)
  );

  const visibleBooks = filteredBooks.slice(
    (bookPage - 1) * PAGE_SIZE,
    bookPage * PAGE_SIZE
  );

  const navButtonStyle = (id) => ({
    border: "none",
    background: "transparent",
    color: page === id ? "#214d3b" : "#555",
    fontWeight: page === id ? "bold" : "normal",
    cursor: "pointer",
    whiteSpace: "nowrap",
    fontSize: 15,
    padding: "8px 0",
  });

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
          justifyContent: "center",
          alignItems: "center",
          gap: 70,
          overflowX: "auto",
          padding:
            "20px max(40px, calc((100% - 1150px) / 2))",
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
              fontSize: 20,
              fontWeight: 700,
              color: "#214d3b",
            }}
          >
            Clara Kang
          </span>
          <span style={{ fontSize: 12, color: "#777" }}>
            | Author &amp; Researcher
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
              style={navButtonStyle(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {page === "startseite" && <Home />}

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
              flexWrap: "wrap",
              gap: 12,
              marginBottom: 20,
            }}
          >
            {[
              "Alle",
              "Veröffentlicht",
              "In Vorbereitung",
            ].map((value) => (
              <button
                key={value}
                onClick={() => changeStatus(value)}
                style={{
                  padding: "10px 18px",
                  border: "1px solid #ddd",
                  borderRadius: 0,
                  background:
                    status === value ? "#214d3b" : "white",
                  color:
                    status === value ? "white" : "#333",
                  cursor: "pointer",
                  fontSize: 14,
                }}
              >
                {value}
              </button>
            ))}
          </div>

          <input
            value={query}
            onChange={(e) => changeQuery(e.target.value)}
            placeholder="Buchtitel suchen ..."
            aria-label="Bücher suchen"
            style={{
              display: "block",
              width: "100%",
              padding: "14px 16px",
              border: "1px solid #ddd",
              borderRadius: 0,
              fontSize: 14,
              boxSizing: "border-box",
              marginBottom: 18,
            }}
          />

          <p
            style={{
              fontSize: 14,
              color: "#777",
              margin: "0 0 28px",
            }}
          >
            Buchcover anklicken – mehr erfahren und Links
            zu Amazon und YouTube entdecken.
          </p>

          <Gallery
            items={visibleBooks}
            filter="Alle"
            query=""
            onSelect={setSelected}
          />

          {totalPages > 1 && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 12,
                marginTop: 40,
              }}
            >
              <button
                disabled={bookPage === 1}
                onClick={() =>
                  setBookPage((p) => Math.max(1, p - 1))
                }
              >
                ←
              </button>

              {Array.from(
                { length: totalPages },
                (_, i) => i + 1
              ).map((number) => (
                <button
                  key={number}
                  onClick={() => setBookPage(number)}
                  style={{
                    border: "none",
                    background: "transparent",
                    fontWeight:
                      bookPage === number ? 700 : 400,
                    color:
                      bookPage === number
                        ? "#214d3b"
                        : "#777",
                    cursor: "pointer",
                    padding: 8,
                  }}
                >
                  {number}
                </button>
              ))}

              <button
                disabled={bookPage === totalPages}
                onClick={() =>
                  setBookPage((p) =>
                    Math.min(totalPages, p + 1)
                  )
                }
              >
                →
              </button>
            </div>
          )}
        </section>
      )}

      {page === "projekte" && (
        <section style={{ padding: "60px 32px" }}>
          <h1>Projekte</h1>
          <p>
            Hier stelle ich meine kreativen und digitalen
            Projekte vor.
          </p>
        </section>
      )}

      {page === "forschung" && (
        <section style={{ padding: "60px 32px" }}>
          <h1>Forschung</h1>
          <h2>
            KI-gestütztes Storytelling und Kinderliteratur
          </h2>
          <p>
            Hier stelle ich meine Forschungsinteressen und
            mein geplantes Promotionsvorhaben vor.
          </p>
        </section>
      )}

      {page === "aktuelles" && (
        <section style={{ padding: "60px 32px" }}>
          <h1>Aktuelles</h1>
          <p>
            Neuigkeiten zu Büchern, Projekten und
            Veranstaltungen.
          </p>
        </section>
      )}

      {page === "ueber-mich" && <About />}

      {page === "kontakt" && <Contact />}

      <Modal
        item={selected}
        onClose={() => setSelected(null)}
      />
    </div>
  );
}
