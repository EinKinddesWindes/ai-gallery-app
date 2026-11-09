
import { useEffect, useState } from "react";
import { images } from "./data/images";

import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./components/Gallery";
import Modal from "./components/Modal";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Butterflies from "./components/Butterflies";

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
     
{page === "forschung" && (
  <main
    style={{
      fontFamily: "Georgia, serif",
      background: "#f7f5f0",
      color: "#244b3c",
    }}
  >
    {/* INTRODUCTION */}
    <section
      style={{
        padding: "90px 7% 100px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <p
        style={{
          fontFamily: "Arial, sans-serif",
          fontSize: "12px",
          letterSpacing: "3px",
          color: "#827d72",
          lineHeight: 1.8,
        }}
      >
        LITERATUR · KREATIVITÄT ·
        KÜNSTLICHE INTELLIGENZ
      </p>

      <h1
        style={{
          fontSize: "clamp(42px, 6vw, 72px)",
          fontWeight: 400,
          margin: "25px 0",
        }}
      >
        Forschung
      </h1>

      <h2
        style={{
          fontSize: "clamp(26px, 3.5vw, 42px)",
          fontWeight: 400,
          lineHeight: 1.3,
          maxWidth: "800px",
        }}
      >
        Wenn Geschichten auf künstliche
        Intelligenz treffen
      </h2>

      <p
        style={{
          fontSize: "19px",
          lineHeight: 1.9,
          color: "#666",
          maxWidth: "750px",
          marginTop: "35px",
        }}
      >
        Wie kann künstliche Intelligenz
        den kreativen Schreibprozess
        unterstützen, ohne die individuelle
        Stimme einer Autorin zu ersetzen?
      </p>
    </section>

    {/* RESEARCH PERSPECTIVE */}
    <section
      style={{
        background: "#eaece6",
        padding: "90px 7%",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "12px",
            letterSpacing: "3px",
            color: "#827d72",
          }}
        >
          MEINE PERSPEKTIVE
        </p>

        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 400,
            margin: "20px 0 30px",
          }}
        >
          Zwischen Literatur und Technologie
        </h2>

        <p
          style={{
            fontSize: "17px",
            lineHeight: 2,
            color: "#666",
            maxWidth: "850px",
          }}
        >
          Als Kinderbuchautorin beschäftige
          ich mich mit der Frage, wie
          künstliche Intelligenz kreative
          Schreibprozesse begleiten und
          erweitern kann.
        </p>

        <p
          style={{
            fontSize: "17px",
            lineHeight: 2,
            color: "#666",
            maxWidth: "850px",
          }}
        >
          Dabei interessiert mich besonders
          das Zusammenspiel von menschlicher
          Vorstellungskraft, literarischer
          Gestaltung und KI-gestützten
          Werkzeugen. Die kreativen
          Entscheidungen und die
          Verantwortung für ein Werk
          bleiben für mich bei der Autorin
          oder dem Autor.
        </p>
      </div>
    </section>

    {/* RESEARCH TOPICS */}
    <section
      style={{
        padding: "100px 7%",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <p
        style={{
          fontFamily: "Arial, sans-serif",
          fontSize: "12px",
          letterSpacing: "3px",
          color: "#827d72",
        }}
      >
        FORSCHUNGSSCHWERPUNKTE
      </p>

      <h2
        style={{
          fontSize: "clamp(28px, 4vw, 44px)",
          fontWeight: 400,
          marginBottom: "45px",
        }}
      >
        Themen und Fragestellungen
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
          gap: "20px",
        }}
      >
        {[
          {
            number: "01",
            title: "Kreatives Schreiben",
            text:
              "Wie verändern KI-gestützte Werkzeuge den literarischen Schreibprozess?",
          },
          {
            number: "02",
            title: "Mensch und KI",
            text:
              "Welche Möglichkeiten und Grenzen entstehen in der Zusammenarbeit zwischen Autorinnen, Autoren und KI?",
          },
          {
            number: "03",
            title: "Autorschaft und Kreativität",
            text:
              "Welche Bedeutung haben menschliche Entscheidungen, Originalität und Verantwortung beim KI-gestützten Erzählen?",
          },
        ].map((topic) => (
          <article
            key={topic.number}
            style={{
              background: "#eaece6",
              padding: "35px 28px",
              minHeight: "230px",
            }}
          >
            <p
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "13px",
                color: "#827d72",
              }}
            >
              {topic.number}
            </p>

            <h3
              style={{
                fontSize: "23px",
                fontWeight: 400,
                lineHeight: 1.4,
              }}
            >
              {topic.title}
            </h3>

            <p
              style={{
                color: "#666",
                fontSize: "15px",
                lineHeight: 1.8,
              }}
            >
              {topic.text}
            </p>
          </article>
        ))}
      </div>
    </section>

    {/* CURRENT RESEARCH STATUS */}
    <section
      style={{
        background: "#eaece6",
        padding: "85px 7%",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontFamily: "Arial, sans-serif",
          fontSize: "12px",
          letterSpacing: "3px",
          color: "#827d72",
        }}
      >
        AKTUELLER STAND
      </p>

      <h2
        style={{
          fontSize: "clamp(28px, 4vw, 42px)",
          fontWeight: 400,
          margin: "20px 0",
        }}
      >
        Forschung in Vorbereitung
      </h2>

      <p
        style={{
          fontSize: "17px",
          lineHeight: 1.9,
          color: "#666",
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        Derzeit entwickle ich mein
        Forschungsvorhaben im Bereich
        KI-gestütztes Storytelling und
        Kinderliteratur. Im Mittelpunkt
        stehen die Perspektive der
        Autorin und die Rolle künstlicher
        Intelligenz im kreativen Prozess.
      </p>
    </section>
  </main>
)}


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
