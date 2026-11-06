
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
    fontSize: "18px",
    lineHeight: 2,
    color: "#444",
    marginBottom: "28px",
  };

  const captionStyle = {
    fontSize: "13px",
    color: "#888",
    textAlign: "center",
    marginTop: "14px",
    fontFamily: "Arial, sans-serif",
  };

  const headingStyle = {
    fontSize: "clamp(24px, 3vw, 30px)",
    fontWeight: 400,
    color: "#244b3c",
    margin: "48px 0 24px",
  };

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "60px 28px 120px",
        fontFamily: "Georgia, serif",
      }}
    >
      <header style={{ marginBottom: "55px" }}>
        <p
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "13px",
            letterSpacing: "3px",
            color: "#777",
          }}
        >
          AUTORIN · STORYTELLING · KREATIVITÄT
        </p>

        <h1
          style={{
            fontSize: "clamp(36px, 5vw, 54px)",
            fontWeight: 400,
            color: "#244b3c",
            margin: "20px 0",
          }}
        >
          Über mich
        </h1>

        <p
          style={{
            fontSize: "23px",
            lineHeight: 1.6,
            color: "#777",
            fontStyle: "italic",
          }}
        >
          Geschichten begleiten mich – und mit jeder
          Geschichte beginnt eine neue Entdeckungsreise.
        </p>
      </header>

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

      <figure style={{ margin: "40px 0" }}>
        <img
          src={`${BASE}images/Adilia_5.png`}
          alt="Illustration aus der Bilderbuchwelt von Adilia"
          style={imageStyle}
        />
        <figcaption style={captionStyle}>
          Eine Bilderbuchwelt voller Fantasie
        </figcaption>
      </figure>

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
          <em> Knödel Prinzessin</em> und <em> Wenn ein Stern fällt</em>. Jedes dieser Bücher
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

      <figure style={{ margin: "40px 0" }}>
        <img
          src={`${BASE}images/FrankfurtMesse.jpg`}
          alt="Meine Kinderbücher auf der Frankfurter Buchmesse 2025"
          style={imageStyle}
        />
        <figcaption style={captionStyle}>
          Meine Kinderbücher auf der Frankfurter Buchmesse 2025
        </figcaption>
      </figure>

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

      <footer
        style={{
          borderTop: "1px solid #ddd",
          marginTop: "70px",
          paddingTop: "35px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "23px",
            fontStyle: "italic",
            lineHeight: 1.7,
            color: "#244b3c",
          }}
        >
          Geschichten verändern sich.
          <br />
          Die Freude am Erzählen bleibt.
        </p>
      </footer>
    </main>
  );
}
