
export default function Home() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #f7f2e9, #e8efe9)",
        borderRadius: 24,
        padding: "60px 32px",
        marginBottom: 40,
        textAlign: "center",
      }}
    >
      <p style={{
        color: "#7b6a54",
        letterSpacing: 3,
        fontSize: 13,
        fontWeight: 600,
      }}>
        CREATIVE PORTFOLIO
      </p>

      <h1 style={{
        fontSize: "clamp(36px, 6vw, 64px)",
        color: "#303d35",
        margin: "20px 0",
      }}>
        Clara Kang
      </h1>

      <h2 style={{
        fontSize: "clamp(20px, 3vw, 30px)",
        fontWeight: 400,
        color: "#53675a",
      }}>
        Where Stories Meet Technology
      </h2>

      <p style={{
        maxWidth: 650,
        margin: "24px auto",
        lineHeight: 1.8,
        color: "#555",
      }}>
        Children's Literature · Creative Writing · Generative AI
        <br />
        Web & App Development · Digital Media
      </p>

      <a
        href="#gallery"
        style={{
          display: "inline-block",
          marginTop: 20,
          padding: "14px 30px",
          background: "#344e41",
          color: "white",
          borderRadius: 30,
          textDecoration: "none",
          fontWeight: 600,
        }}
      >
        Explore My Work
      </a>
    </section>
  );
}
