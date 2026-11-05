
const books = [
  {
    title: "Adilia",
    year: "2024",
    amazon: "https://amzn.eu/d/0g9argRH",
  },
  {
    title: "Ein Kind des Windes",
    year: "2025",
    amazon: "https://amzn.eu/d/0bOONEfQ",
  },
  {
    title: "Knödel Prinzessin",
    year: "2024",
    amazon: "https://amzn.eu/d/08RmwFE3",
  },
];

export default function Books() {
  return (
    <section
      style={{
        maxWidth: 1100,
        margin: "60px auto",
        padding: "0 24px",
      }}
    >
      <h2 style={{ fontSize: 32, color: "#344e41" }}>
        Meine Bücher
      </h2>

      <p style={{ color: "#666", marginBottom: 36 }}>
        Geschichten und Illustrationen für Kinder
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 24,
        }}
      >
        {books.map((book) => (
          <article
            key={book.title}
            style={{
              padding: "28px",
              background: "#f7f7f4",
              borderTop: "3px solid #708b80",
            }}
          >
            <h3 style={{ color: "#344e41" }}>
              {book.title}
            </h3>

            <p style={{ color: "#777" }}>
              Veröffentlichung: {book.year}
            </p>

            <a
              href={book.amazon}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#344e41",
                fontWeight: 600,
              }}
            >
              Auf Amazon ansehen →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
