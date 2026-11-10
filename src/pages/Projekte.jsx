
import React from "react";
import { projects } from "../data/projects";

export default function Projekte() {
  return (
    <main
      style={{
        background: "#f7f5f0",
        color: "#244b3c",
        fontFamily: "Georgia, serif",
      }}
    >
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "65px 7% 45px",
        }}
      >
        <p
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "12px",
            letterSpacing: "3px",
            color: "#827d72",
          }}
        >
          KREATION · ILLUSTRATION · TECHNOLOGIE
        </p>

        <h1
          style={{
            fontSize: "clamp(42px, 6vw, 72px)",
            fontWeight: 400,
            margin: "25px 0",
          }}
        >
          Projekte
        </h1>

        <h2
          style={{
            fontSize: "clamp(25px, 3.2vw, 39px)",
            fontWeight: 400,
            lineHeight: 1.35,
            maxWidth: "850px",
          }}
        >
          Geschichten auf unterschiedliche Weise gestalten
        </h2>

        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.9,
            color: "#666",
            maxWidth: "850px",
          }}
        >
          In meinen Kinderbuchprojekten beschäftige ich mich
          mit unterschiedlichen Möglichkeiten der visuellen
          Gestaltung – von der traditionellen Aquarellmalerei
          über digitale Illustration bis hin zum Einsatz
          künstlicher Intelligenz.
        </p>
      </section>

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px 7% 75px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
            gap: "24px",
          }}
        >
          {projects.map((project) => (
            <article
              key={project.id}
              style={{
                background: "#eaece6",
                overflow: "hidden",
              }}
            >
              <img
                src={project.image}
                alt={`Illustration aus ${project.title}`}
                style={{
                  display: "block",
                  width: "100%",
                  height: "240px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "28px" }}>
                <p
                  style={{
                    fontFamily: "Arial, sans-serif",
                    fontSize: "11px",
                    letterSpacing: "2px",
                    color: "#827d72",
                  }}
                >
                  {project.technique}
                </p>

                <h2
                  style={{
                    fontSize: "28px",
                    fontWeight: 400,
                    margin: "18px 0 10px",
                  }}
                >
                  {project.title}
                </h2>

                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    marginBottom: "16px",
                  }}
                >
                  {project.subtitle}
                </p>

                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.8,
                    color: "#666",
                  }}
                >
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        style={{
          background: "#eaece6",
          padding: "55px 7%",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "12px",
            letterSpacing: "3px",
            color: "#827d72",
          }}
        >
          KREATIVE ENTWICKLUNG
        </p>

        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 400,
          }}
        >
          Von der Illustration zur Forschungsfrage
        </h2>

        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.9,
            color: "#666",
            maxWidth: "750px",
            margin: "20px auto 0",
          }}
        >
          Die Arbeit mit unterschiedlichen Gestaltungsmethoden
          bildet einen Ausgangspunkt für mein Interesse an
          KI-gestützten kreativen Prozessen. Besonders
          interessiert mich, wie sich die Rolle der Autorin
          durch den Einsatz neuer Technologien verändert.
        </p>
      </section>
    </main>
  );
}
