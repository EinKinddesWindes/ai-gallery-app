
import React, { useState } from "react";
import { projects } from "../data/projects";
import { cmsPosts } from "../data/cmsPosts";

const BASE = import.meta.env.BASE_URL;

const archivePosts = cmsPosts.filter(
  (post) => post.category === "projekte"
);

const colors = {
  background: "#f7f5f0",
  card: "#eaece6",
  green: "#244b3c",
  gray: "#666",
  muted: "#827d72",
};

function formatDate(date) {
  if (!date) return "";

  const parsed = new Date(`${date}T12:00:00`);

  if (Number.isNaN(parsed.getTime())) return date;

  return new Intl.DateTimeFormat("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(parsed);
}

function getImagePath(image) {
  if (!image) return "";

  if (
    image.startsWith("https://") ||
    image.startsWith("http://")
  ) {
    return image;
  }

  if (image.startsWith(BASE)) return image;

  return `${BASE}${image.replace(/^\/+/, "")}`;
}

function ArticleBody({ body }) {
  if (!body) return null;

  // Simple Markdown paragraphs and headings.
  const blocks = body.split(/\n\s*\n/);

  return (
    <div
      style={{
        fontSize: 17,
        lineHeight: 1.9,
        color: colors.gray,
        overflowWrap: "anywhere",
      }}
    >
      {blocks.map((block, index) => {
        const content = block.trim();

        if (!content) return null;

        if (content.startsWith("### ")) {
          return (
            <h3 key={index} style={{ color: colors.green }}>
              {content.slice(4)}
            </h3>
          );
        }

        if (content.startsWith("## ")) {
          return (
            <h2
              key={index}
              style={{
                color: colors.green,
                fontWeight: 400,
              }}
            >
              {content.slice(3)}
            </h2>
          );
        }

        return (
          <p
            key={index}
            style={{
              whiteSpace: "pre-wrap",
              marginBottom: 24,
            }}
          >
            {content}
          </p>
        );
      })}
    </div>
  );
}

export default function Projekte() {
  const [selectedProject, setSelectedProject] = useState(null);

  function openProject(project, type) {
    setSelectedProject({ ...project, type });
    window.scrollTo(0, 0);
  }

  function closeProject() {
    setSelectedProject(null);
    window.scrollTo(0, 0);
  }

  if (selectedProject) {
    const isArchive = selectedProject.type === "archive";

    return (
      <main
        style={{
          background: colors.background,
          color: colors.green,
          minHeight: "70vh",
          fontFamily: "Georgia, serif",
        }}
      >
        <article
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            padding: "65px 7% 90px",
          }}
        >
          <button
            onClick={closeProject}
            style={{
              background: "transparent",
              border: "none",
              padding: "0 0 35px",
              color: colors.green,
              cursor: "pointer",
              fontSize: 15,
            }}
          >
            ← Zurück zu Projekte
          </button>

          <p
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: 12,
              letterSpacing: 2,
              color: colors.muted,
            }}
          >
            {isArchive
              ? formatDate(selectedProject.date)
              : selectedProject.technique}
          </p>

          <h1
            style={{
              fontSize: "clamp(40px, 6vw, 65px)",
              fontWeight: 400,
              margin: "20px 0",
            }}
          >
            {selectedProject.title}
          </h1>

          <h2
            style={{
              fontSize: "clamp(23px, 3vw, 32px)",
              fontWeight: 400,
              marginBottom: 35,
            }}
          >
            {isArchive
              ? selectedProject.description
              : selectedProject.subtitle}
          </h2>

          {selectedProject.image && (
            <img
              src={getImagePath(selectedProject.image)}
              alt={selectedProject.title}
              style={{
                display: "block",
                width: "100%",
                maxHeight: 550,
                objectFit: "contain",
                marginBottom: 45,
              }}
            />
          )}

          {isArchive ? (
            <ArticleBody body={selectedProject.body} />
          ) : (
            <>
              <h2
                style={{
                  fontSize: 30,
                  fontWeight: 400,
                }}
              >
                Über das Projekt
              </h2>

              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.9,
                  color: colors.gray,
                  maxWidth: 800,
                }}
              >
                {selectedProject.description}
              </p>
            </>
          )}
        </article>
      </main>
    );
  }

  return (
    <main
      style={{
        background: colors.background,
        color: colors.green,
        fontFamily: "Georgia, serif",
      }}
    >
      {/* INTRODUCTION */}
      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "65px 7% 45px",
        }}
      >
        <p
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: 12,
            letterSpacing: 3,
            color: colors.muted,
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
            maxWidth: 850,
          }}
        >
          Geschichten auf unterschiedliche Weise gestalten
        </h2>

        <p
          style={{
            fontSize: 17,
            lineHeight: 1.9,
            color: colors.gray,
            maxWidth: 850,
          }}
        >
          In meinen Kinderbuchprojekten beschäftige ich mich
          mit unterschiedlichen Möglichkeiten der visuellen
          Gestaltung – von der traditionellen Aquarellmalerei
          über digitale Illustration bis hin zum Einsatz
          künstlicher Intelligenz.
        </p>
      </section>

      {/* EXISTING PROJECTS */}
      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "20px 7% 75px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
            gap: 24,
          }}
        >
          {projects.map((project, index) => (
            <article
              key={project.id || project.title || index}
              style={{
                background: colors.card,
                overflow: "hidden",
              }}
            >
              <button
                onClick={() => openProject(project, "featured")}
                style={{
                  display: "block",
                  width: "100%",
                  padding: 0,
                  border: "none",
                  background: "transparent",
                  textAlign: "left",
                  cursor: "pointer",
                  color: "inherit",
                  fontFamily: "inherit",
                }}
              >
                <img
                  src={getImagePath(project.image)}
                  alt={`Illustration aus ${project.title}`}
                  style={{
                    display: "block",
                    width: "100%",
                    height: 240,
                    objectFit: "cover",
                  }}
                />

                <div style={{ padding: 28 }}>
                  <p
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: 11,
                      letterSpacing: 2,
                      color: colors.muted,
                    }}
                  >
                    {project.technique}
                  </p>

                  <h2
                    style={{
                      fontSize: 28,
                      fontWeight: 400,
                      margin: "18px 0 10px",
                    }}
                  >
                    {project.title}
                  </h2>

                  <p
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                      marginBottom: 16,
                    }}
                  >
                    {project.subtitle}
                  </p>

                  <p
                    style={{
                      fontSize: 15,
                      lineHeight: 1.8,
                      color: colors.gray,
                    }}
                  >
                    {project.description}
                  </p>
                </div>
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* PROJECT ARCHIVE */}
      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "20px 7% 90px",
        }}
      >
        <p
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: 12,
            letterSpacing: 3,
            color: colors.muted,
          }}
        >
          NEUE BEITRÄGE · DOKUMENTATION
        </p>

        <h2
          style={{
            fontSize: "clamp(30px, 4vw, 44px)",
            fontWeight: 400,
            margin: "20px 0 35px",
          }}
        >
          Projektarchiv
        </h2>

        {archivePosts.length === 0 ? (
          <p style={{ color: colors.gray }}>
            Noch keine Beiträge vorhanden.
          </p>
        ) : (
          <div>
            {archivePosts.map((post) => (
              <button
                key={post.id}
                onClick={() => openProject(post, "archive")}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: 20,
                  width: "100%",
                  padding: "25px 0",
                  border: "none",
                  borderBottom: "1px solid #d6d9d1",
                  background: "transparent",
                  textAlign: "left",
                  cursor: "pointer",
                  color: colors.green,
                  fontFamily: "Georgia, serif",
                }}
              >
                <div style={{ flex: "1 1 260px" }}>
                  <p
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: 12,
                      color: colors.muted,
                      margin: "0 0 10px",
                    }}
                  >
                    {formatDate(post.date)}
                  </p>

                  <h3
                    style={{
                      fontSize: 25,
                      fontWeight: 400,
                      margin: "0 0 8px",
                    }}
                  >
                    {post.title}
                  </h3>

                  <p
                    style={{
                      fontSize: 15,
                      color: colors.gray,
                      margin: 0,
                      lineHeight: 1.7,
                    }}
                  >
                    {post.description}
                  </p>
                </div>

                <span
                  style={{
                    fontFamily: "Arial, sans-serif",
                    fontSize: 14,
                    whiteSpace: "nowrap",
                  }}
                >
                  Weiterlesen →
                </span>
              </button>
            ))}
          </div>
        )}
      </section>

      {/* RESEARCH CONNECTION */}
      <section
        style={{
          background: colors.card,
          padding: "55px 7%",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: 12,
            letterSpacing: 3,
            color: colors.muted,
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
            fontSize: 17,
            lineHeight: 1.9,
            color: colors.gray,
            maxWidth: 750,
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
