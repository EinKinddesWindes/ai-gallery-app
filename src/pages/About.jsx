
export default function About() {
  const BASE = import.meta.env.BASE_URL;

  const imageStyle = {
    width: "100%",
    maxWidth: "550px",
    maxHeight: "380px",
    height: "auto",
    display: "block",
    objectFit: "contain",
    margin: "0 auto",
  };

  const paragraphStyle = {
    fontSize: 17,
    lineHeight: 1.8,
    color: "#555",
    margin: "0 0 24px",
  };

  const captionStyle = {
    fontSize: 13,
    color: "#827d72",
    textAlign: "center",
    marginTop: 14,
    fontFamily: "Arial, sans-serif",
  };

  const headingStyle = {
    fontSize: "clamp(24px, 3vw, 28px)",
    fontWeight: 400,
    lineHeight: 1.4,
    color: "#244b3c",
    margin: "45px 0 22px",
  };

  return (
    <main
      style={{
        background: "#f7f5f0",
        color: "#244b3c",
        fontFamily: "Georgia, serif",
        minHeight: "75vh",
      }}
    >
      <div className="about-container">
        {/* INTRODUCTION */}
        <header className="about-intro">
          <p className="about-eyebrow">
            AUTORIN · STORYTELLING · KREATIVITÄT
          </p>

          <h1 className="about-intro-title">
            Geschichten begleiten mich – und mit jeder
            Geschichte beginnt eine neue Entdeckungsreise.
          </h1>
        </header>

        {/* MY BACKGROUND */}
        <section>
          <h2 style={headingStyle}>
            Zwischen Geschichten, Kreativität und Technologie
          </h2>

          <p style={paragraphStyle}>
            Geschichten begleiten mich schon seit vielen
            Jahren. Meine berufliche und kreative Entwicklung
            begann in Korea, wo ich zunächst Literatur
            studierte und mich später intensiv mit der
            Kinderliteratur beschäftigte. Schon früh
            interessierte mich die Frage, wie Geschichten
            entstehen, welche Bedeutung sie für Kinder
            haben und wie Worte und Bilder gemeinsam eine
            eigene Welt erschaffen können.
          </p>

          <p style={paragraphStyle}>
            Nach meinem Literaturstudium arbeitete ich
            mehrere Jahre an Schulen und in Kindergärten.
            Diese Zeit ermöglichte es mir, die Welt der
            Kinder aus nächster Nähe kennenzulernen.
            Ihre Fantasie, ihre Fragen und ihre besondere
            Art, die Wirklichkeit wahrzunehmen, haben
            mein Interesse an Geschichten für junge
            Leserinnen und Leser nachhaltig geprägt.
          </p>

          <p style={paragraphStyle}>
            Zwischen 2008 und 2012 vertiefte ich dieses
            Interesse durch ein Masterstudium der
            Kinderliteratur an der Sookmyung Women's
            University in Seoul. Dabei beschäftigte
            ich mich mit der literarischen Gestaltung
            von Geschichten und der Bedeutung von
            Kinderbüchern.
          </p>
        </section>

        <figure className="about-figure">
          <img
            src={`${BASE}images/Adilia_5.png`}
            alt="Illustration aus der Bilderbuchwelt von Adilia"
            style={imageStyle}
          />
          <figcaption style={captionStyle}>
            Eine Bilderbuchwelt voller Fantasie
          </figcaption>
        </figure>

        {/* CHILDREN'S BOOKS */}
        <section>
          <h2 style={headingStyle}>
            Geschichten werden zu Büchern
          </h2>

          <p style={paragraphStyle}>
            Neben meiner beruflichen und akademischen
            Entwicklung begann ich, eigene Geschichten
            zu schreiben und zu illustrieren. Aus Ideen
            wurden Figuren, aus Figuren entstanden Bilder
            und schließlich Bücher.
          </p>

          <p style={paragraphStyle}>
            Zu meinen veröffentlichten Arbeiten gehören
            <em> Adilia</em>, <em>Ein Kind des Windes</em>,
            <em> Knödel Prinzessin</em> und
            <em> Wenn ein Stern fällt</em>. Jedes dieser Bücher
            ist Teil meiner kreativen Auseinandersetzung
            mit Fantasie, Sprache und visueller Gestaltung.
          </p>

          <p style={paragraphStyle}>
            Mit der Zeit erweiterte sich meine Arbeit
            über das gedruckte Buch hinaus. Digitale
            Illustrationen, Videos und multimediale
            Erzählformen eröffneten mir neue Möglichkeiten,
            Geschichten zu gestalten und einem größeren
            Publikum zugänglich zu machen.
          </p>
        </section>

        <figure className="about-figure">
          <img
            src={`${BASE}images/FrankfurtMesse.jpg`}
            alt="Meine Kinderbücher auf der Frankfurter Buchmesse 2025"
            style={imageStyle}
          />
          <figcaption style={captionStyle}>
            Meine Kinderbücher auf der Frankfurter Buchmesse 2025
          </figcaption>
        </figure>

        {/* TECHNOLOGY */}
        <section>
          <h2 style={headingStyle}>
            Ein neuer Weg in die digitale Welt
          </h2>

          <p style={paragraphStyle}>
            Mein Interesse an Computern reicht bis in
            meine frühe Ausbildungszeit in Korea zurück,
            in der ich mich bereits mit Programmierung
            beschäftigte. Viele Jahre später entschied
            ich mich, diesen Bereich erneut aufzugreifen
            und meine Kenntnisse systematisch zu erweitern.
          </p>

          <p style={paragraphStyle}>
            Von März bis Juli 2024 absolvierte ich eine
            Weiterbildung in Web- und App-Entwicklung
            an der WBS Coding School. Dort beschäftigte
            ich mich unter anderem mit HTML, CSS,
            JavaScript und React.
          </p>

          <p style={paragraphStyle}>
            Heute verbinde ich meine Erfahrungen aus
            Literatur und Gestaltung mit der Entwicklung
            digitaler Anwendungen. Ein Beispiel dafür
            ist meine eigene AI Gallery Web App, die ich
            mit React und Vite entwickle. Sie bietet
            Raum für Illustrationen, Bücher und
            kreative Projekte.
          </p>
        </section>

        {/* AI AND LITERATURE */}
        <section>
          <h2 style={headingStyle}>
            Wenn Literatur auf künstliche Intelligenz trifft
          </h2>

          <p style={paragraphStyle}>
            Seit einigen Jahren beschäftige ich mich
            zunehmend mit den Möglichkeiten künstlicher
            Intelligenz im kreativen Prozess. Besonders
            interessiert mich, wie KI Autorinnen und
            Autoren beim Entwickeln von Geschichten,
            beim Gestalten von Bildern und beim
            Experimentieren mit neuen Erzählformen
            unterstützen kann.
          </p>

          <p style={paragraphStyle}>
            Dabei steht für mich nicht die Technologie
            allein im Mittelpunkt, sondern der Mensch,
            der sie verwendet. Eine Geschichte braucht
            eine eigene Perspektive, bewusste Entscheidungen
            und eine persönliche Handschrift.
          </p>

          <p style={paragraphStyle}>
            Aus dieser Verbindung zwischen Kinderliteratur,
            Kreativität und Technologie ist auch mein
            Interesse an einer vertieften wissenschaftlichen
            Auseinandersetzung mit KI-gestütztem
            Storytelling entstanden.
          </p>
        </section>

        {/* OUTLOOK */}
        <section>
          <h2 style={headingStyle}>
            Eine Geschichte, die weitergeht
          </h2>

          <p style={paragraphStyle}>
            Wenn ich heute auf meinen bisherigen Weg
            zurückblicke, sehe ich keine voneinander
            getrennten Tätigkeiten, sondern eine
            Entwicklung, in der sich unterschiedliche
            Interessen immer wieder begegnen.
          </p>

          <p style={paragraphStyle}>
            Literatur, pädagogische Erfahrung,
            Illustration, Programmierung und künstliche
            Intelligenz sind für mich verschiedene
            Möglichkeiten, Ideen auszudrücken und
            neue Perspektiven zu entdecken.
          </p>

          <p style={paragraphStyle}>
            Ich möchte weiterhin Geschichten erzählen,
            neue Technologien kennenlernen und
            herausfinden, welche kreativen Möglichkeiten
            aus ihrer Verbindung entstehen können.
          </p>
        </section>

        {/* CLOSING QUOTE */}
        <footer className="about-closing">
          <p>
            Geschichten verändern sich.
            <span>Die Freude am Erzählen bleibt.</span>
          </p>
        </footer>
      </div>

      <style>{`
        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 35px 9% 90px;
          box-sizing: border-box;
        }

        .about-intro {
          margin-bottom: 35px;
        }

        .about-eyebrow {
          font-family: Arial, sans-serif;
          font-size: 12px;
          letter-spacing: 2.5px;
          line-height: 1.8;
          color: #827d72;
          margin: 0 0 12px;
        }

        .about-intro-title {
          font-size: clamp(20px, 2.5vw, 24px);
          font-weight: 400;
          line-height: 1.45;
          color: #244b3c;
          margin: 0;
          max-width: 850px;
          font-style: italic;
        }

        .about-container section {
          max-width: 850px;
        }

        .about-figure {
          margin: 40px 0;
          max-width: 850px;
        }

        .about-closing {
          max-width: 850px;
          border-top: 1px solid #d7dbd1;
          margin-top: 65px;
          padding-top: 35px;
          text-align: center;
        }

        .about-closing p {
          font-size: clamp(20px, 2.5vw, 24px);
          font-style: italic;
          line-height: 1.7;
          color: #244b3c;
          margin: 0;
        }

        .about-closing span {
          display: block;
        }

        @media (max-width: 800px) {
          .about-container {
            padding: 30px 7% 65px;
          }

          .about-intro {
            margin-bottom: 25px;
          }

          .about-container section {
            max-width: 100%;
          }

          .about-figure {
            margin: 35px 0;
          }
        }
      `}</style>
    </main>
  );
}
