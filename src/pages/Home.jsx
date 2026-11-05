
import { useEffect, useState } from "react";

const BASE = import.meta.env.BASE_URL;

const slides = [
  {
    type: "intro",
    title: "Clara Kang",
  },
  {
    type: "image",
    title: "Adilia",
    caption: "Auf der Suche nach Mama …",
    image: `${BASE}images/adilia-01.jpg`,
    position: { left: "6%", top: "18%" },
  },
  {
    type: "image",
    title: "Ein Kind des Windes",
    caption: "Lasst uns die Farben der Natur entdecken!",
    image: `${BASE}images/wind-01.jpg`,
    position: { right: "6%", bottom: "18%" },
  },
  {
    type: "image",
    title: "Knödel Prinzessin",
    caption: "Lasst uns gemeinsam mit Kartoffeln kochen!",
    image: `${BASE}images/knoedel-01.jpg`,
    position: { left: "6%", bottom: "18%" },
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [paused]);

  function goTo(index) {
    setCurrent((index + slides.length) % slides.length);
  }

  return (
    <section
      style={{
        position: "relative",
        height: "calc(100dvh - 100px)",
        minHeight: 400,
        borderRadius: 0,
        overflow: "hidden",
        background: "#e8efe9",
        marginBottom: 0,
      }}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            inset: 0,
            opacity: current === index ? 1 : 0,
            transition: "opacity 1.2s ease-in-out",
            pointerEvents: current === index ? "auto" : "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            background:
              slide.type === "intro"
                ? "linear-gradient(135deg, #f7f2e9, #e8efe9)"
                : "#24362e",
          }}
        >
          {slide.type === "intro" ? (
            <div style={{ padding: "30px 24px" }}>
              <p
                style={{
                  color: "#7b6a54",
                  letterSpacing: 3,
                  fontSize: 13,
                  fontWeight: 600,
                }}
              >
                CREATIVE & RESEARCH PORTFOLIO
              </p>

              <h1
                style={{
                  fontSize: "clamp(36px, 6vw, 64px)",
                  color: "#303d35",
                  margin: "20px 0",
                }}
              >
                Clara Kang
              </h1>

              <h2
                style={{
                  fontSize: "clamp(20px, 3vw, 30px)",
                  fontWeight: 400,
                  color: "#53675a",
                }}
              >
                Where Stories Meet Technology
              </h2>

              <p style={{ color: "#555", lineHeight: 1.8 }}>
                Children's Literature · Creative Writing · Generative AI
                <br />
                Web & App Development · Digital Media
              </p>
            </div>
          ) : (
            <>
              <img
                src={slide.image}
                alt={slide.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

             
<div
  style={{
    position: "absolute",
    ...slide.position,
    width: "clamp(145px, 17vw, 220px)",
    aspectRatio: "1 / 1",
    boxSizing: "border-box",
    padding: "20px",
    borderRadius: "50%",
    background: "rgba(255, 224, 125, 0.92)",
    color: "#254735",
    fontSize: "clamp(13px, 1.4vw, 18px)",
    fontWeight: 600,
    lineHeight: 1.45,
    boxShadow: "0 5px 18px rgba(0,0,0,0.12)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  }}
>
  {slide.caption}
</div>

            </>
          )}
        </div>
      ))}

      <div
        style={{
          position: "absolute",
          bottom: 18,
          left: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
          zIndex: 2,
        }}
      >
        <button
          onClick={() => goTo(current - 1)}
          aria-label="Vorheriges Bild"
        >
          ❮
        </button>

        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            aria-label={`Bild ${index + 1}`}
            style={{
              width: 11,
              height: 11,
              padding: 0,
              borderRadius: "50%",
              border: "1px solid #777",
              background:
                current === index ? "#344e41" : "#ffffff",
              cursor: "pointer",
            }}
          />
        ))}

        <button
          onClick={() => goTo(current + 1)}
          aria-label="Nächstes Bild"
        >
          ❯
        </button>

        <button
          onClick={() => setPaused((prev) => !prev)}
          aria-label={
            paused ? "Wiedergabe starten" : "Wiedergabe pausieren"
          }
        >
          {paused ? "▶" : "Ⅱ"}
        </button>
      </div>
    </section>
  );
}
