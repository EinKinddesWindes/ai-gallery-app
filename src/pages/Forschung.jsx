
export default function Forschung() {
  const BASE = import.meta.env.BASE_URL;

  const topics = [
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
  ];

  return (
    <main
      style={{
        fontFamily: "Georgia, serif",
        background: "#f7f5f0",
        color: "#244b3c",
      }}
    >
      {/* INTRODUCTION */}
      <section className="forschung-intro">
        <div className="forschung-intro-text">
          <p className="forschung-eyebrow">
            LITERATUR · KREATIVITÄT · KÜNSTLICHE INTELLIGENZ
          </p>

          <h1>
            Wenn Geschichten auf künstliche
            Intelligenz treffen
          </h1>

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

      {/* MY PERSPECTIVE */}
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

      {/* RESEARCH TOPICS */}
      <section className="forschung-topics">
        <p className="forschung-eyebrow">
          FORSCHUNGSSCHWERPUNKTE
        </p>

        <h2>Themen und Fragestellungen</h2>

        <div className="forschung-cards">
          {topics.map((topic) => (
            <article key={topic.number}>
              <span>{topic.number}</span>
              <h3>{topic.title}</h3>
              <p>{topic.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CURRENT STATUS */}
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
          max-width: 1200px;
          margin: 0 auto;
          padding: 35px 9%;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          align-items: center;
          gap: 35px;
        }

        .forschung-eyebrow {
          font-family: Arial, sans-serif;
          font-size: 12px;
          letter-spacing: 2.5px;
          color: #827d72;
          line-height: 1.8;
          margin: 0 0 12px;
        }

        .forschung-intro h1 {
          font-size: clamp(20px, 2.5vw, 24px);
          font-weight: 400;
          line-height: 1.45;
          margin: 0 0 18px;
        }

        .forschung-description {
          font-size: 17px;
          line-height: 1.8;
          color: #666;
          max-width: 550px;
          margin: 0;
        }

        .forschung-intro-art img {
          display: block;
          width: 100%;
          max-height: 330px;
          object-fit: contain;
        }

        .forschung-perspective {
          background: #eaece6;
          padding: 55px 9%;
        }

        .forschung-content {
          max-width: 1000px;
          margin: 0 auto;
        }

        .forschung-perspective h2,
        .forschung-topics h2,
        .forschung-status h2 {
          font-size: clamp(24px, 3vw, 32px);
          font-weight: 400;
          line-height: 1.4;
          margin: 12px 0 25px;
        }

        .forschung-perspective p:not(.forschung-eyebrow),
        .forschung-status p:not(.forschung-eyebrow) {
          font-size: 17px;
          line-height: 1.8;
          color: #666;
          max-width: 800px;
        }

        .forschung-topics {
          max-width: 1200px;
          margin: 0 auto;
          padding: 55px 9%;
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
          font-family: Arial, sans-serif;
          font-size: 12px;
          color: #827d72;
        }

        .forschung-cards h3 {
          font-size: 22px;
          font-weight: 400;
          line-height: 1.4;
        }

        .forschung-cards p {
          color: #666;
          line-height: 1.8;
          font-size: 15px;
        }

        .forschung-status {
          background: #eaece6;
          padding: 55px 9%;
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
            padding: 30px 7%;
          }

          .forschung-intro-art img {
            max-height: 280px;
          }

          .forschung-perspective,
          .forschung-topics,
          .forschung-status {
            padding: 40px 7%;
          }

          .forschung-cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}
