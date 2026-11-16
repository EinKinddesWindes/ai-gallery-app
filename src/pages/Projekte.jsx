
import React, { useState } from "react";
import { projects } from "../data/projects";
import { cmsPosts } from "../data/cmsPosts";

const BASE = import.meta.env.BASE_URL;

const archivePosts = cmsPosts
  .filter((post) => post.category === "projekte")
  .sort((a, b) => (b.date || "").localeCompare(a.date || ""));

const colors = {
  background: "#f7f5f0",
  card: "#eaece6",
  green: "#244b3c",
  gray: "#666",
  muted: "#827d72",
  border: "#d7dbd1",
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

  if (/^https?:\/\//.test(image)) return image;
  if (image.startsWith(BASE)) return image;

  return `${BASE}${image.replace(/^\/+/, "")}`;
}

function ArticleBody({ body }) {
  if (!body) return null;

  const blocks = body.split(/\n\s*\n/);

  return (
    <div className="projekte-article-body">
      {blocks.map((block, index) => {
        const content = block.trim();

        if (!content) return null;

        if (content.startsWith("### ")) {
          return (
            <h3 key={index}>
              {content.slice(4)}
            </h3>
          );
        }

        if (content.startsWith("## ")) {
          return (
            <h2 key={index}>
              {content.slice(3)}
            </h2>
          );
        }

        return (
          <p key={index}>
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

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function closeProject() {
    setSelectedProject(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const sharedStyles = `
    .projekte-container {
      max-width: 1200px;
      margin: 0 auto;
      padding-left: 9%;
      padding-right: 9%;
      box-sizing: border-box;
    }

    .projekte-eyebrow {
      font-family: Arial, sans-serif;
      font-size: 12px;
      letter-spacing: 2.5px;
      line-height: 1.8;
      color: ${colors.muted};
      margin: 0 0 12px;
    }

    .projekte-heading {
      font-size: clamp(20px, 2.5vw, 24px);
      font-weight: 400;
      line-height: 1.45;
      color: ${colors.green};
      margin: 0 0 18px;
    }

    .projekte-description {
      font-size: 17px;
      line-height: 1.8;
      color: ${colors.gray};
      max-width: 850px;
      margin: 0;
    }

    .projekte-intro {
      padding-top: 35px;
      padding-bottom: 35px;
    }

    .projekte-grid-section {
      padding-top: 10px;
      padding-bottom: 45px;
    }

    .projekte-grid {
      display: grid;
      grid-template-columns:
        repeat(auto-fit, minmax(min(100%, 260px), 1fr));
      gap: 24px;
    }

    .projekte-card {
      background: ${colors.card};
      overflow: hidden;
    }

    .projekte-card-button {
      display: block;
      width: 100%;
      height: 100%;
      padding: 0;
      border: none;
      background: transparent;
      text-align: left;
      cursor: pointer;
      color: inherit;
      font-family: inherit;
    }

    .projekte-card-image {
      display: block;
      width: 100%;
      height: 240px;
      object-fit: cover;
    }

    .projekte-card-content {
      padding: 25px;
    }

    .projekte-card-technique {
      font-family: Arial, sans-serif;
      font-size: 11px;
      letter-spacing: 2px;
      color: ${colors.muted};
      margin: 0 0 12px;
    }

    .projekte-card-title {
      font-size: 25px;
      font-weight: 400;
      line-height: 1.35;
      margin: 0 0 12px;
    }

    .projekte-card-subtitle {
      font-size: 16px;
      font-weight: bold;
      line-height: 1.5;
      margin: 0 0 14px;
    }

    .projekte-card-description {
      font-size: 15px;
      line-height: 1.8;
      color: ${colors.gray};
      margin: 0;
    }

    .projekte-archive {
      padding-top: 25px;
      padding-bottom: 75px;
    }

    .projekte-section-title {
      font-size: clamp(24px, 3vw, 32px);
      font-weight: 400;
      line-height: 1.4;
      margin: 12px 0 25px;
    }

    .projekte-archive-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 20px;
      width: 100%;
      padding: 22px 0;
      border: none;
      border-bottom: 1px solid ${colors.border};
      background: transparent;
      color: ${colors.green};
      text-align: left;
      cursor: pointer;
      font-family: Georgia, serif;
    }

    .projekte-archive-info {
      flex: 1 1 260px;
      min-width: 0;
    }

    .projekte-archive-date {
      font-family: Arial, sans-serif;
      font-size: 12px;
      color: ${colors.muted};
      margin: 0 0 10px;
    }

    .projekte-archive-title {
      font-size: 22px;
      font-weight: 400;
      margin: 0 0 8px;
      line-height: 1.4;
    }

    .projekte-archive-description {
      font-size: 15px;
      line-height: 1.7;
      color: ${colors.gray};
      margin: 0;
    }

    .projekte-read-more {
      font-family: Arial, sans-serif;
      font-size: 13px;
      white-space: nowrap;
    }

    .projekte-research {
      background: ${colors.card};
      padding: 55px 9%;
      text-align: center;
    }

    .projekte-research-inner {
      max-width: 850px;
      margin: 0 auto;
    }

    .projekte-research-text {
      font-size: 17px;
      line-height: 1.8;
      color: ${colors.gray};
      max-width: 750px;
      margin: 20px auto 0;
    }

    .projekte-detail {
      padding-top: 35px;
      padding-bottom: 90px;
      min-height: 70vh;
    }

    .projekte-back {
      display: inline-block;
      background: transparent;
      border: none;
      padding: 0 0 30px;
      color: ${colors.green};
      cursor: pointer;
      font-family: Arial, sans-serif;
      font-size: 14px;
    }

    .projekte-detail-title {
      font-size: clamp(26px, 3vw, 35px);
      font-weight: 400;
      line-height: 1.4;
      margin: 12px 0 16px;
    }

    .projekte-detail-subtitle {
      font-size: clamp(20px, 2.5vw, 24px);
      font-weight: 400;
      line-height: 1.5;
      margin: 0 0 30px;
      max-width: 850px;
    }

    .projekte-detail-image {
      display: block;
      width: 100%;
      max-height: 480px;
      object-fit: contain;
      margin: 0 auto 40px;
    }

    .projekte-article-body {
      max-width: 850px;
      font-size: 17px;
      line-height: 1.8;
      color: ${colors.gray};
      overflow-wrap: anywhere;
    }

    .projekte-article-body p {
      white-space: pre-wrap;
      margin: 0 0 24px;
    }

    .projekte-article-body h2 {
      font-size: 26px;
      font-weight: 400;
      color: ${colors.green};
      margin: 35px 0 18px;
    }

    .projekte-article-body h3 {
      font-size: 21px;
      font-weight: 400;
      color: ${colors.green};
      margin: 28px 0 15px;
    }

    @media (max-width: 800px) {
      .projekte-container {
        padding-left: 7%;
        padding-right: 7%;
      }

      .projekte-intro,
      .projekte-detail {
        padding-top: 30px;
      }

      .projekte-research {
        padding: 40px 7%;
      }

      .projekte-description,
      .projekte-article-body,
      .projekte-research-text {
        font-size: 16px;
      }

      .projekte-grid {
        gap: 18px;
      }

      .projekte-card-image {
        height: 220px;
      }

      .projekte-archive-title {
        font-size: 20px;
      }

      .projekte-read-more {
        font-size: 12px;
      }
    }
  `;

  // PROJECT DETAIL PAGE
  if (selectedProject) {
    const isArchive = selectedProject.type === "archive";

    return (
      <main
        style={{
          background: colors.background,
          color: colors.green,
          fontFamily: "Georgia, serif",
        }}
      >
        <article className="projekte-container projekte-detail">
          <button
            className="projekte-back"
            type="button"
            onClick={closeProject}
          >
            ← Zurück zu Projekte
          </button>

          <p className="projekte-eyebrow">
            {isArchive
              ? formatDate(selectedProject.date)
              : selectedProject.technique}
          </p>

          <h1 className="projekte-detail-title">
            {selectedProject.title}
          </h1>

          {(isArchive
            ? selectedProject.description
            : selectedProject.subtitle) && (
            <h2 className="projekte-detail-subtitle">
              {isArchive
                ? selectedProject.description
                : selectedProject.subtitle}
            </h2>
          )}

          {selectedProject.image && (
            <img
              className="projekte-detail-image"
              src={getImagePath(selectedProject.image)}
              alt={selectedProject.title}
            />
          )}

          {isArchive ? (
            <ArticleBody body={selectedProject.body} />
          ) : (
            <div className="projekte-article-body">
              <h2>Über das Projekt</h2>
              <p>{selectedProject.description}</p>
            </div>
          )}
        </article>

        <style>{sharedStyles}</style>
      </main>
    );
  }

  // MAIN PROJECTS PAGE
  return (
    <main
      style={{
        background: colors.background,
        color: colors.green,
        fontFamily: "Georgia, serif",
      }}
    >
      {/* INTRODUCTION */}
      <section className="projekte-container projekte-intro">
        <p className="projekte-eyebrow">
          KREATION · ILLUSTRATION · TECHNOLOGIE
        </p>

        <h1 className="projekte-heading">
          Geschichten auf unterschiedliche Weise gestalten
        </h1>

        <p className="projekte-description">
          In meinen Kinderbuchprojekten beschäftige ich mich
          mit unterschiedlichen Möglichkeiten der visuellen
          Gestaltung – von der traditionellen Aquarellmalerei
          über digitale Illustration bis hin zum Einsatz
          künstlicher Intelligenz.
        </p>
      </section>

      {/* EXISTING PROJECTS */}
      <section className="projekte-container projekte-grid-section">
        <div className="projekte-grid">
          {projects.map((project, index) => (
            <article
              className="projekte-card"
              key={project.id || project.title || index}
            >
              <button
                className="projekte-card-button"
                type="button"
                onClick={() => openProject(project, "featured")}
              >
                <img
                  className="projekte-card-image"
                  src={getImagePath(project.image)}
                  alt={`Illustration aus ${project.title}`}
                />

                <div className="projekte-card-content">
                  <p className="projekte-card-technique">
                    {project.technique}
                  </p>

                  <h2 className="projekte-card-title">
                    {project.title}
                  </h2>

                  <p className="projekte-card-subtitle">
                    {project.subtitle}
                  </p>

                  <p className="projekte-card-description">
                    {project.description}
                  </p>
                </div>
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* PROJECT ARCHIVE */}
      <section className="projekte-container projekte-archive">
        <p className="projekte-eyebrow">
          NEUE BEITRÄGE · DOKUMENTATION
        </p>

        <h2 className="projekte-section-title">
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
                className="projekte-archive-item"
                type="button"
                key={post.id}
                onClick={() => openProject(post, "archive")}
              >
                <div className="projekte-archive-info">
                  <p className="projekte-archive-date">
                    {formatDate(post.date)}
                  </p>

                  <h3 className="projekte-archive-title">
                    {post.title}
                  </h3>

                  <p className="projekte-archive-description">
                    {post.description}
                  </p>
                </div>

                <span className="projekte-read-more">
                  Weiterlesen →
                </span>
              </button>
            ))}
          </div>
        )}
      </section>

      {/* RESEARCH CONNECTION */}
      <section className="projekte-research">
        <div className="projekte-research-inner">
          <p className="projekte-eyebrow">
            KREATIVE ENTWICKLUNG
          </p>

          <h2 className="projekte-section-title">
            Von der Illustration zur Forschungsfrage
          </h2>

          <p className="projekte-research-text">
            Die Arbeit mit unterschiedlichen Gestaltungsmethoden
            bildet einen Ausgangspunkt für mein Interesse an
            KI-gestützten kreativen Prozessen. Besonders
            interessiert mich, wie sich die Rolle der Autorin
            durch den Einsatz neuer Technologien verändert.
          </p>
        </div>
      </section>

      <style>{sharedStyles}</style>
    </main>
  );
}
