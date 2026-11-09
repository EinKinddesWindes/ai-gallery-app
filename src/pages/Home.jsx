
import Butterflies from "../components/Butterflies";
import Footer from "../components/Footer";

export default function Home() {
  const BASE = import.meta.env.BASE_URL;

  const videos = [
    {
      src: `${BASE}videos/adilia-preview.mp4`,
      title: "Adilia",
      youtube: "https://www.youtube.com/watch?v=SpLFxYUaMhM",
    },
    {
      src: `${BASE}videos/prinzessin-preview.mp4`,
      title: "Knödel Prinzessin",
      youtube: "https://www.youtube.com/watch?v=TBQKSDscfDk",
    },
    {
      src: `${BASE}videos/wind-preview.mp4`,
      title: "Ein Kind des Windes",
      youtube: "https://www.youtube.com/watch?v=l6Pg27NteMo",
    },
  ];

  return (
    <main style={{ fontFamily: "Georgia, serif" }}>
      <Butterflies />

      {/* LANDING PAGE */}
      <section
        className="clara-landing"
        style={{
          minHeight: "auto",
          display: "flex",
          alignItems: "flex-start",
          background: "#f7f5f0",
          padding: "35px 7% 65px",
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

          {/* THREE VIDEOS */}
          <div className="clara-video-grid">
            {videos.map((item, index) => (
              <a
                key={item.src}
                className={`clara-video-item clara-video-${index + 1}`}
                href={item.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${item.title} – Video ansehen`}
              >
                <video
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />

                <span className="clara-video-title">
                  {item.title} ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CREATIVE PORTFOLIO */}
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

      {/* RESEARCH */}
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

      {/* PAGE STYLES */}
      <style>{`
        .clara-landing {
          box-sizing: border-box;
        }

        .clara-landing-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 45px;
          align-items: start;
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
          font-size: clamp(36px, 4vw, 60px);
          font-weight: 400;
          line-height: 1.12;
          color: #244b3c;
          margin: 22px 0;
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

        /* VIDEO GRID */

        .clara-video-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          width: 100%;
          align-items: stretch;
        }

        .clara-video-item {
          position: relative;
          display: block;
          overflow: hidden;
          background: #eaece6;
          aspect-ratio: 4 / 3;
          text-decoration: none;
          cursor: pointer;
        }

        .clara-video-3 {
          grid-column: 1 / -1;
          aspect-ratio: 16 / 7;
        }

        .clara-video-item video {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .clara-video-item:hover video {
          transform: scale(1.04);
        }

        .clara-video-title {
          position: absolute;
          left: 14px;
          bottom: 14px;
          color: white;
          font-family: Arial, sans-serif;
          font-size: 13px;
          text-shadow: 0 1px 5px rgba(0,0,0,0.8);
          pointer-events: none;
        }

        /* CREATIVE PORTFOLIO */

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

        /* RESEARCH */

        .clara-research {
          background: #eaece6;
          padding: 100px 25px;
          text-align: center;
        }

        .clara-research > p {
          max-width: 650px;
          margin: 20px auto;
        }

        /* TABLET */

        @media (max-width: 800px) {
          .clara-landing-grid,
          .clara-feature {
            grid-template-columns: 1fr;
          }

          .clara-landing {
            padding: 35px 6% 65px !important;
          }

          .clara-video-grid {
            margin-top: 25px;
          }

          .clara-feature {
            padding: 70px 6%;
            gap: 30px;
          }
        }

        /* MOBILE */

        @media (max-width: 600px) {
          .clara-video-grid {
            grid-template-columns: 1fr;
          }

          .clara-video-3 {
            grid-column: auto;
          }

          .clara-video-item,
          .clara-video-3 {
            aspect-ratio: 16 / 10;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .clara-video-item video {
            transition: none;
          }
        }
      `}</style>

      <Footer />
    </main>
  );
}
