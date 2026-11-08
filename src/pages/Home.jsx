
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
            {videos.map((item, index) => (
              <a
                key={item.title}
                className={`clara-art-item clara-float-${index + 1}`}
                href={item.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${item.title} – vollständiges Video ansehen`}
                title={`${item.title} – Video mit Musik ansehen`}
              >
                <video
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-hidden="true"
                />
                <span className="clara-video-label">
                  {item.title} ↗
                </span>
              </a>
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

      <style>{`
        .clara-landing {
          box-sizing: border-box;
        }

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
          position: relative;
          display: block;
          height: 310px;
          overflow: hidden;
          background: #e8e5dd;
          text-decoration: none;
          cursor: pointer;
          will-change: transform;
        }

        .clara-art-item video {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: scale .5s ease;
        }

        .clara-art-item:hover video {
          scale: 1.06;
        }

        .clara-video-label {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 24px 10px 12px;
          background: linear-gradient(
            transparent,
            rgba(0,0,0,.55)
          );
          color: white;
          font-family: Arial, sans-serif;
          font-size: 12px;
          text-align: center;
          pointer-events: none;
        }

        .clara-float-1 {
          animation: claraFloat1 7s ease-in-out infinite;
        }

        .clara-float-2 {
          animation: claraFloat2 8.5s ease-in-out infinite;
        }

        .clara-float-3 {
          animation: claraFloat3 9s ease-in-out infinite;
        }

        @keyframes claraFloat1 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        @keyframes claraFloat2 {
          0%, 100% { transform: translateY(-24px); }
          50% { transform: translateY(-42px); }
        }

        @keyframes claraFloat3 {
          0%, 100% { transform: translateY(24px); }
          50% { transform: translateY(7px); }
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

          .clara-video-label {
            font-size: 10px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .clara-art-item {
            animation: none;
          }

          .clara-art-item video {
            transition: none;
          }
        }
      `}</style>
    </main>
  );
}
