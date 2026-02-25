export default function About() {
  return (
    <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid #eee", opacity: 0.9 }}>
      <h2 style={{ margin: "0 0 10px 0" }}>Über mich</h2>
      <p style={{ marginTop: 0 }}>
        Ich verbinde Storytelling, KI-gestützte Medienproduktion und Webentwicklung. 
        Meine Projekte zeigen einen strukturierten Workflow von <br />Idee → Visuals → Video/Musik → Publishing.
      </p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <a href="https://github.com/EinKinddesWindes" style={{ border: "1px solid", padding: "6px 12px", borderRadius: 8 
           
        }} 
        className="linkBtn"
        target="_blank" rel="noreferrer">
          GitHub →
        </a>
        <a href="https://www.youtube.com/@Clarasgeschenk"  style={{ border: "1px solid", padding: "6px 12px", borderRadius: 8 }} 
          className="linkBtn"
          target="_blank" rel="noreferrer">
          YouTube →
        </a>
        <a href="https://amzn.eu/d/04BJtkfV"  style={{ border: "1px solid", padding: "6px 12px", borderRadius: 8 }} 
          className="linkBtn"
          target="_blank" rel="noreferrer">
          Etc →
        </a>
      </div>
    </div>
  );
}