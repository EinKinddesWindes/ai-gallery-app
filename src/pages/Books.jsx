const books = [
  { title: "Adilia", amazon: "https://amzn.eu/d/0g9argRH" },
  { title: "Ein Kind des Windes", amazon: "https://amzn.eu/d/0bOONEfQ" },
  { title: "Knödel Prinzessin", amazon: "https://amzn.eu/d/08RmwFE3" },
];

export default function Books() {
  return (
    <div style={{ marginTop: 16, paddingTop: 16, borderTop: "2px solid #eee" }}>
      <h2 style={{ margin: "0 0 10px 0" }}>Bücher</h2>
      <ul style={{ margin: 0, paddingLeft: 18, display: "grid", gap: 8 }}>
        {books.map((b) => (
          <li key={b.title}>
            <a href={b.amazon} target="_blank" rel="noreferrer">
              {b.title} – Auf Amazon ansehen →
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}