export default function Footer() {
  const links = [
    { label: "Bücher", id: "buecher" },
    { label: "Projekte", id: "projekte" },
    { label: "Forschung", id: "forschung" },
    { label: "Über mich", id: "ueber-mich" },
    { label: "Kontakt", id: "kontakt" },
  ];

  return (
    <footer
      style={{
        background: "#244b3c",
        color: "#ffffff",
        padding: "55px 28px 25px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1150px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "30px",
            marginBottom: "45px",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "Georgia, serif",
                fontWeight: 400,
                fontSize: "28px",
                margin: "0 0 8px",
              }}
            >
              Clara Kang
            </h2>
            <p
              style={{
                fontSize: "13px",
                color: "#d1dfd6",
              }}
            >
              Author & Researcher
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "18px",
              alignItems: "center",
            }}
          >
            {links.map((link) => (
              <a
                key={link.id}
                href={`#/${link.id}`}
                style={{
                  color: "#ffffff",
                  textDecoration: "none",
                  fontSize: "13px",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <p
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "18px",
            fontStyle: "italic",
            textAlign: "center",
            color: "#d1dfd6",
            marginBottom: "40px",
          }}
        >
          Geschichten verändern sich.
          Die Freude am Erzählen bleibt.
        </p>

        <div
          style={{
            borderTop: "1px solid #718b7d",
            paddingTop: "22px",
            textAlign: "center",
            color: "#b7c9be",
            fontSize: "12px",
          }}
        >
          © {new Date().getFullYear()} Clara Kang.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}
