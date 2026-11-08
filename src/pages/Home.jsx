
import { useState } from "react";

export default function Home() {
  const BASE = import.meta.env.BASE_URL;
  const [selected, setSelected] = useState(null);

  const images = [
    {
      src: `${BASE}images/Adilia_5.png`,
      title: "Adilia",
    },
    {
      src: `${BASE}images/Adilia_24.png`,
      title: "Adilia – Bilderwelt",
    },
    {
      src: `${BASE}images/FrankfurtMesse.jpg`,
      title: "Frankfurter Buchmesse 2025",
    },
  ];

  return (
    <main style={{ fontFamily: "Georgia, serif" }}>
      <section
        className="clara-landing"
        style={{
          minHeight: "calc(100vh - 90px)",
          display: "flex",
          alignItems: "center",
          background: "#f7f5f0",
          padding: "70px 7%",
        }}
      >
        <div className="clara-landing-grid">
          <div className="clara-landing-intro">
            <p className="clara-eyebrow">
              AUTHOR · STORYTELLING · RESEARCH
            </p>

            <h1>
              Where Stories
              <br />
              Meet Technology
            </h1>

            <p className="clara-subtitle">
              Kinderliteratur, Kreativität und
              künstliche Intelligenz.
            </p>

            <p className="clara-description">
              Ich verbinde die Welt der Geschichten
              mit digitaler Gestaltung und neuen
              Technologien. Entdecken Sie meine
              Bücher, Bilderwelten und
              Forschungsinteressen.
            </p>

            <div className="clara-actions">
              <a href="#/projekte" className="clara-primary">
                Meine Projekte entdecken
              </a>

              <a href="#/forschung" className="clara-secondary">
                Forschung entdecken
              </a>
            </div>
          </div>

          <div className="clara-art-grid">
            {images.map((item, index) => (
              <button
                key={index}
                className="clara-art-item"
                onClick={() => setSelected(item)}
                aria-label={`${item.title} vergrößern`}
              >
                <img src={item.src} alt={item.title} />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="clara-feature">
        <div>
          <p className="clara-eyebrow">
            CREATIVE PORTFOLIO
          </p>
          <h2>Geschichten in Bildern</h2>
          <p>
            Jede Illustration erzählt ihre eigene
            Geschichte. Zwischen Fantasie, Literatur
            und digitaler Kunst entstehen neue
            Bilderwelten.
          </p>
          <a href="#/projekte">
            Bilderwelten entdecken →
          </a>
        </div>

        <img
          src={`${BASE}images/Adilia_5.png`}
          alt="Illustration aus Adilia"
        />
      </section>

      <section className="clara-research">
        <p className="clara-eyebrow">
          LITERATURE · CREATIVITY · AI
        </p>
        <h2>Wenn Literatur auf KI trifft</h2>
        <p>
          Wie kann künstliche Intelligenz den
          kreativen Schreibprozess unterstützen,
          ohne die persönliche Stimme einer
          Autorin zu ersetzen?
        </p>
        <a href="#/forschung">
          Meine Forschungsinteressen →
        </a>
      </section>

      {selected && (
        <div
          className="clara-lightbox"
          onClick={() => setSelected(null)}
          role="presentation"
        >
          <button
            className="clara-close"
            onClick={() => setSelected(null)}
            aria-label="Schließen"
          >
            ×
          </button>
          <img
            src={selected.src}
            alt={selected.title}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <style>{`
        .clara-landing-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 55px;
          align-items: center;
          max-width: 1450px;
          width: 100%;
          margin: auto;
        }

        .clara-eyebrow {
          font-family: Arial, sans-serif;
          font-size: 12px;
          letter-spacing: 3px;
          color: #827d72;
        }

        .clara-landing-intro h1 {
          font-size: clamp(40px, 5vw, 72px);
          font-weight: 400;
          line-height: 1.12;
          color: #244b3c;
          margin: 25px 0;
        }

        .clara-subtitle {
          font-size: 22px;
          color: #555;
          line-height: 1.6;
        }

        .clara-description {
          font-size: 16px;
          color: #777;
          line-height: 1.9;
          max-width: 480px;
        }

        .clara-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 35px;
          font-family: Arial, sans-serif;
        }

        .clara-actions a {
          text-decoration: none;
          padding: 15px 20px;
          font-size: 13px;
        }

        .clara-primary {
          background: #244b3c;
          color: white;
        }

        .clara-secondary {
          border: 1px solid #244b3c;
          color: #244b3c;
        }

        .clara-art-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
          align-items: center;
        }

        .clara-art-item {
          padding: 0;
          border: 0;
          background: transparent;
          cursor: pointer;
          overflow: hidden;
          height: 310px;
        }

        .clara-art-item:nth-child(2) {
          transform: translateY(-24px);
        }

        .clara-art-item:nth-child(3) {
          transform: translateY(24px);
        }

        .clara-art-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .5s ease;
        }

        .clara-art-item:hover img {
          transform: scale(1.06);
        }

        .clara-feature {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 70px;
          align-items: center;
          max-width: 1200px;
          margin: auto;
          padding: 110px 7%;
        }

        .clara-feature h2,
        .clara-research h2 {
          font-size: clamp(30px, 4vw, 48px);
          font-weight: 400;
          color: #244b3c;
        }

        .clara-feature p,
        .clara-research p {
          line-height: 1.9;
          color: #666;
        }

        .clara-feature img {
          width: 100%;
          max-height: 460px;
          object-fit: contain;
        }

        .clara-feature a,
        .clara-research a {
          display: inline-block;
          margin-top: 20px;
          color: #244b3c;
          text-decoration: none;
          font-family: Arial, sans-serif;
        }

        .clara-research {
          background: #eaece6;
          padding: 100px 25px;
          text-align: center;
        }

        .clara-research > p {
          max-width: 650px;
          margin: 20px auto;
        }

        .clara-lightbox {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(0,0,0,.9);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 40px;
        }

        .clara-lightbox img {
          max-width: 95%;
          max-height: 90vh;
          object-fit: contain;
        }

        .clara-close {
          position: absolute;
          top: 20px;
          right: 30px;
          background: none;
          border: 0;
          color: white;
          font-size: 40px;
          cursor: pointer;
        }

        @media (max-width: 800px) {
          .clara-landing-grid,
          .clara-feature {
            grid-template-columns: 1fr;
          }

          .clara-landing {
            padding: 60px 6% !important;
          }

          .clara-art-grid {
            margin-top: 45px;
          }

          .clara-art-item {
            height: 220px;
          }

          .clara-feature {
            padding: 70px 6%;
            gap: 30px;
          }
        }

        @media (max-width: 480px) {
          .clara-art-item {
            height: 160px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .clara-art-item img {
            transition: none;
          }
        }
      `}</style>
    </main>
  );
}
