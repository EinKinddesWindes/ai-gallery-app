
export default function Forschung() {
  const BASE = import.meta.env.BASE_URL;

  return (
    <main
      style={{
        fontFamily: "Georgia, serif",
        background: "#f7f5f0",
        color: "#244b3c",
      }}
    >
      <section className="forschung-intro">
        <div className="forschung-intro-text">
          <p className="forschung-eyebrow">
            LITERATUR · KREATIVITÄT · KÜNSTLICHE INTELLIGENZ
          </p>

          <h1>Forschung</h1>

          <h2>
            Wenn Geschichten auf künstliche
            Intelligenz treffen
          </h2>

          <p className="forschung-description">
            Wie kann künstliche Intelligenz
            den kreativen Schreibprozess
            unterstützen, ohne die individuelle
            Stimme einer Autorin zu ersetzen?
          </p>
        </div>

        <div className="forschung-intro-art">
          <img
            src={`${BASE}images/forschung-storybook.png`}
            alt="Aquarellillustration eines geöffneten Buches"
          />
        </div>
      </section>

      <section className="forschung-perspective">
        <div className="forschung-content">
          <p className="forschung-eyebrow">
            MEINE PERSPEKTIVE
          </p>

          <h2>Zwischen Literatur und Technologie</h2>

          <p>
            Als Kinderbuchautorin beschäftige ich mich
            mit der Frage, wie künstliche Intelligenz
            kreative Schreibprozesse begleiten und
            erweitern kann.
          </p>

          <p>
            Dabei interessiert mich besonders das
            Zusammenspiel von menschlicher
            Vorstellungskraft, literarischer Gestaltung
            und KI-gestützten Werkzeugen. Die kreativen
            Entscheidungen und die Verantwortung für
            ein Werk bleiben für mich bei der Autorin
            oder dem Autor.
          </p>
        </div>
      </section>

      <section className="forschung-topics">
        <p className="forschung-eyebrow">
          FORSCHUNGSSCHWERPUNKTE
        </p>

        <h2>Themen und Fragestellungen</h2>

        <div className="forschung-cards">
          {[
            {
              number: "01",
              title: "Kreatives Schreiben",
              text: "Wie verändern KI-gestützte Werkzeuge den literarischen Schreibprozess?",
            },
            {
              number: "02",
              title: "Mensch und KI",
              text: "Welche Möglichkeiten und Grenzen entstehen in der Zusammenarbeit zwischen Autorinnen, Autoren und KI?",
            },
            {
              number: "03",
              title: "Autorschaft und Kreativität",
              text: "Welche Bedeutung haben menschliche Entscheidungen, Originalität und Verantwortung beim KI-gestützten Erzählen?",
            },
          ].map((topic) => (
            <article key={topic.number}>
              <span>{topic.number}</span>
              <h3>{topic.title}</h3>
              <p>{topic.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="forschung-status">
        <p className="forschung-eyebrow">
          AKTUELLER STAND
        </p>

        <h2>Forschung in Vorbereitung</h2>

        <p>
          Derzeit entwickle ich mein Forschungsvorhaben
          im Bereich KI-gestütztes Storytelling und
          Kinderliteratur. Im Mittelpunkt stehen die
          Perspektive der Autorin und die Rolle
          künstlicher Intelligenz im kreativen Prozess.
        </p>
      </section>

      <style>{`
        .forschung-intro {
          max-width: 1250px;
          margin: 0 auto;
          padding: 40px 7% 55px;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          align-items: center;
          gap: 40px;
        }

        .forschung-eyebrow {
          font: 12px Arial, sans-serif;
          letter-spacing: 2.5px;
          color: #827d72;
          line-height: 1.8;
        }

        .forschung-intro h1 {
          font-size: clamp(42px, 6vw, 68px);
          font-weight: 400;
          margin: 20px 0;
        }

        .forschung-intro h2 {
          font-size: clamp(26px, 3vw, 39px);
          font-weight: 400;
          line-height: 1.3;
        }

        .forschung-description {
          font-size: 17px;
          line-height: 1.9;
          color: #666;
        }

        .forschung-intro-art img {
          display: block;
          width: 100%;
          max-height: 360px;
          object-fit: contain;
        }

        .forschung-perspective {
          background: #eaece6;
          padding: 55px 7%;
        }

        .forschung-content,
        .forschung-topics {
          max-width: 1100px;
          margin: 0 auto;
        }

        .forschung-perspective h2,
        .forschung-topics h2,
        .forschung-status h2 {
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 400;
          margin: 20px 0 25px;
        }

        .forschung-perspective p:not(.forschung-eyebrow),
        .forschung-status p:not(.forschung-eyebrow) {
          font-size: 17px;
          line-height: 1.9;
          color: #666;
          max-width: 850px;
        }

        .forschung-topics {
          padding: 60px 7%;
        }

        .forschung-cards {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .forschung-cards article {
          background: #eaece6;
          padding: 25px;
        }

        .forschung-cards span {
          font: 12px Arial, sans-serif;
          color: #827d72;
        }

        .forschung-cards h3 {
          font-size: 22px;
          font-weight: 400;
        }

        .forschung-cards p {
          color: #666;
          line-height: 1.8;
          font-size: 15px;
        }

        .forschung-status {
          background: #eaece6;
          padding: 55px 7%;
          text-align: center;
        }

        .forschung-status p:not(.forschung-eyebrow) {
          margin: 0 auto;
          max-width: 700px;
        }

        @media (max-width: 800px) {
          .forschung-intro {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .forschung-intro-art img {
            max-height: 280px;
          }

          .forschung-cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}
