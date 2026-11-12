
import React, { useState } from "react";
import { cmsPosts } from "../data/cmsPosts";

const BASE = import.meta.env.BASE_URL;

const posts = cmsPosts
  .filter((post) => post.category === "aktuelles")
  .sort((a, b) => b.date.localeCompare(a.date));

function formatDate(date) {
  if (!date) return "";

  const value = new Date(`${date}T12:00:00`);

  if (Number.isNaN(value.getTime())) return date;

  return new Intl.DateTimeFormat("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(value);
}

function imagePath(image) {
  if (!image) return "";

  if (/^https?:\/\//.test(image)) return image;

  if (image.startsWith(BASE)) return image;

  return `${BASE}${image.replace(/^\/+/, "")}`;
}

export default function Aktuelles() {
  const [selectedId, setSelectedId] = useState(
    posts[0]?.id ?? null
  );

  const selected =
    posts.find((post) => post.id === selectedId) ||
    posts[0];

  return (
    <main
      style={{
        background: "#f7f5f0",
        color: "#244b3c",
        minHeight: "75vh",
        fontFamily: "Georgia, serif",
      }}
    >
      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "65px 7% 90px",
        }}
      >
        <p
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: 12,
            letterSpacing: 3,
            color: "#827d72",
          }}
        >
          NEUIGKEITEN · VERANSTALTUNGEN · EINBLICKE
        </p>

        <h1
          style={{
            fontSize: "clamp(42px, 6vw, 72px)",
            fontWeight: 400,
            margin: "25px 0",
          }}
        >
          Aktuelles
        </h1>

        <p
          style={{
            fontSize: 17,
            lineHeight: 1.9,
            color: "#666",
            maxWidth: 780,
            marginBottom: 50,
          }}
        >
          Neuigkeiten zu meinen Büchern, kreativen
          Projekten, Forschungsaktivitäten und
          Veranstaltungen.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            gap: 35,
            alignItems: "start",
          }}
        >
          {/* LEFT: ARTICLE LIST */}
          <aside
            style={{
              borderTop: "1px solid #d7dbd1",
            }}
          >
            <h2
              style={{
                fontSize: 23,
                fontWeight: 400,
                padding: "20px 0",
                margin: 0,
              }}
            >
              Beiträge
            </h2>

            {posts.length === 0 ? (
              <p
                style={{
                  color: "#777",
                  lineHeight: 1.8,
                }}
              >
                Noch keine Beiträge vorhanden.
              </p>
            ) : (
              posts.map((post) => (
                <button
                  key={post.id}
                  onClick={() => setSelectedId(post.id)}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    padding: "20px 16px",
                    border: "none",
                    borderBottom: "1px solid #d7dbd1",
                    background:
                      selected?.id === post.id
                        ? "#eaece6"
                        : "transparent",
                    cursor: "pointer",
                    color: "#244b3c",
                    fontFamily: "Georgia, serif",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      fontFamily: "Arial, sans-serif",
                      fontSize: 12,
                      color: "#827d72",
                      marginBottom: 9,
                    }}
                  >
                    {formatDate(post.date)}
                  </span>

                  <span
                    style={{
                      fontSize: 19,
                      lineHeight: 1.5,
                    }}
                  >
                    {post.title}
                  </span>
                </button>
              ))
            )}
          </aside>

          {/* RIGHT: SELECTED ARTICLE */}
          <article
            style={{
              borderTop: "1px solid #d7dbd1",
              paddingTop: 22,
              minHeight: 300,
              overflowWrap: "anywhere",
            }}
          >
            {selected ? (
              <>
                <p
                  style={{
                    fontFamily: "Arial, sans-serif",
                    fontSize: 12,
                    letterSpacing: 1,
                    color: "#827d72",
                  }}
                >
                  {formatDate(selected.date)}
                </p>

                <h2
                  style={{
                    fontSize: "clamp(28px, 3vw, 40px)",
                    fontWeight: 400,
                    lineHeight: 1.3,
                    margin: "18px 0 25px",
                  }}
                >
                  {selected.title}
                </h2>

                {selected.description && (
                  <p
                    style={{
                      fontSize: 18,
                      lineHeight: 1.8,
                      color: "#666",
                    }}
                  >
                    {selected.description}
                  </p>
                )}

                {selected.image && (
                  <img
                    src={imagePath(selected.image)}
                    alt={selected.title}
                    style={{
                      display: "block",
                      width: "100%",
                      maxHeight: 450,
                      objectFit: "contain",
                      margin: "30px 0",
                    }}
                  />
                )}

                <div
                  style={{
                    fontSize: 17,
                    lineHeight: 1.9,
                    color: "#555",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {selected.body}
                </div>
              </>
            ) : (
              <p
                style={{
                  color: "#777",
                  lineHeight: 1.8,
                }}
              >
                Hier erscheinen künftig meine
                neuesten Beiträge.
              </p>
            )}
          </article>
        </div>
      </section>
    </main>
  );
}
