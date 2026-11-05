
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

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "80px 28px 120px",
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
          Über die Autorin
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
        <p style={paragraphStyle}>
          Meine Begeisterung für Geschichten beginnt
          mit der Welt der Kinder. Schon früh
          interessiert mich, wie Kinder ihre Umgebung
          wahrnehmen, wie sie Bilder verstehen und
          wie aus einfachen Worten ganze Welten
          entstehen können.
        </p>

        <p style={paragraphStyle}>
          In Korea studiere ich Kinderliteratur und
          beschäftige mich intensiv mit der Bedeutung
          von Geschichten für die kindliche Entwicklung.
          Nach meinem Studium arbeite ich mehrere Jahre
          mit Kindern in Grundschulen und Kindergärten.
          Diese Begegnungen prägen meine Vorstellung
          davon, was eine gute Kindergeschichte
          ausmacht: Sie soll neugierig machen,
          Fantasie wecken und Raum für eigene
          Gedanken lassen.
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
        <p style={paragraphStyle}>
          Mit der Zeit wird aus meiner Begeisterung
          für Kinderliteratur der Wunsch, eigene
          Geschichten zu erzählen. Ich beginne,
          Bilderbücher zu schreiben und die Figuren
          und Welten meiner Geschichten gestalterisch
          zu entwickeln.
        </p>

        <p style={paragraphStyle}>
          Auch nach meinem Weg nach Deutschland
          bleibt die Kinderliteratur ein wichtiger
          Teil meines Lebens. Als selbstständige
          Kinderbuchautorin veröffentliche ich
          mehrere Bücher. Jede Veröffentlichung
          bedeutet für mich mehr als ein fertiges
          Werk: Sie ist das Ergebnis vieler Ideen,
          Entwürfe, Entscheidungen und neuer Fragen.
        </p>

        <p style={paragraphStyle}>
          Besonders schön ist es, wenn die Geschichten
          ihren Weg aus meinem Arbeitszimmer in die
          Welt finden – zu Leserinnen und Lesern,
          in Bücherregale und zu Menschen, die
          sich von ihnen berühren lassen.
        </p>
      </section>

      <figure style={{ margin: "40px 0" }}>
        <img
          src={`${BASE}images/FrankfurtMesse.jpg`}
          alt="Kinderbücher auf einem Bücherregal bei einer Buchausstellung"
          style={imageStyle}
        />
        <figcaption style={captionStyle}>
          Meine Bücher im Rahmen einer Buchausstellung
        </figcaption>
      </figure>

      <section>
        <p style={paragraphStyle}>
          Neben dem Schreiben wächst mein Interesse
          an digitalen Medien und neuen Technologien.
          Ich beschäftige mich mit Webentwicklung
          und entdecke, wie sich kreative Ideen
          auch in digitalen Projekten umsetzen lassen.
        </p>

        <p style={paragraphStyle}>
          Mit der Entwicklung künstlicher Intelligenz
          entstehen für mich neue Fragen. Wie verändert
          KI den kreativen Schreibprozess? Welche
          Möglichkeiten eröffnet sie Autorinnen und
          Autoren? Und welche Entscheidungen sollten
          auch in Zukunft bewusst beim Menschen bleiben?
        </p>

        <p style={paragraphStyle}>
          Heute möchte ich diese Fragen mit meiner
          Erfahrung als Kinderbuchautorin verbinden.
          Mein geplantes Forschungsvorhaben beschäftigt
          sich mit KI-gestütztem Storytelling,
          Kreativität und der Rolle der Autorin
          im Entstehungsprozess einer Geschichte.
        </p>

        <p style={paragraphStyle}>
          Dabei steht für mich nicht die Vorstellung
          im Mittelpunkt, dass Technologie menschliche
          Fantasie ersetzt. Vielmehr interessiert mich,
          wie neue Werkzeuge den kreativen Prozess
          begleiten können, ohne dass die persönliche
          Stimme einer Autorin verloren geht.
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
