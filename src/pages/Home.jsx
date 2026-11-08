
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
          minHeight: "auto",
          display: "flex",
          alignItems: "flexe-start",
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

         
          <div className="clara-video-grid">
            {videos.map((item, index) => (
              <div
                key={item.src}
                className={`clara-video-item clara-video-${index + 1}`}
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
                  {item.title}
                </span>
              </div>
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
          grid-template-columns: 0.9fr 1.1fr;
          gap: 45px;
          align-items: start;
          max-width: 1450px;
          width: 100%;
          margin: auto;
        }
        
        .clara-landing-intro h1 {
          font-size: clamp(36px, 4vw, 60px);
          font-weight: 400;
          line-height: 1.12;
          color: #244b3c;
          margin: 22px 0;
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

                
        .clara-video-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          width: 100%;
          align-items: stretch;
        }
        
        .clara-video-item {
          position: relative;
          overflow: hidden;
          background: #eaece6;
          aspect-ratio: 4 / 3;
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
