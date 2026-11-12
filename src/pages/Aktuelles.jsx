
import React, { useState } from "react";
import { cmsPosts } from "../data/cmsPosts";

const BASE = import.meta.env.BASE_URL;

const posts = cmsPosts
  .filter((post) => post.category === "aktuelles")
  .sort((a, b) => (b.date || "").localeCompare(a.date || ""));

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

  function selectPost(id) {
    setSelectedId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main
      style={{
        background: "#f7f5f0",
        color: "#244b3c",
        minHeight: "75vh",
        fontFamily: "Georgia, serif",
      }}
    >
      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          padding: "55px 7% 90px",
        }}
      >
        {/* SELECTED ARTICLE */}
        <article
          style={{
            maxWidth: 800,
            margin: "0 auto 80px",
            minHeight: 200,
            overflowWrap: "anywhere",
          }}
        >
          {selected ? (
            <>
              <p
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: 12,
                  letterSpacing: 1.5,
                  color: "#827d72",
                  marginBottom: 20,
                }}
              >
                {formatDate(selected.date)}
              </p>

              <h1
                style={{
                  fontSize: "clamp(30px, 4vw, 48px)",
                  fontWeight: 400,
                  lineHeight: 1.3,
                  margin: "0 0 30px",
                }}
              >
                {selected.title}
              </h1>

              {selected.description && (
                <p
                  style={{
                    fontSize: 19,
                    lineHeight: 1.8,
                    color: "#666",
                    marginBottom: 30,
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
                    maxHeight: 520,
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
            <div
              style={{
                textAlign: "center",
                padding: "75px 0",
              }}
            >
              <p
                style={{
                  fontSize: 20,
                  color: "#827d72",
                  fontWeight: 400,
                }}
              >
                Hier erscheinen künftig meine
                neuesten Beiträge.
              </p>
            </div>
          )}
        </article>

        {/* ARTICLE ARCHIVE */}
        <section
          style={{
            maxWidth: 800,
            margin: "0 auto",
            borderTop: "1px solid #d7dbd1",
            paddingTop: 35,
          }}
        >
          <h2
            style={{
              fontSize: 28,
              fontWeight: 400,
              margin: "0 0 30px",
            }}
          >
            Weitere Beiträge
          </h2>

          {posts.length === 0 ? (
            <p
              style={{
                fontSize: 15,
                color: "#827d72",
              }}
            >
              Noch keine Beiträge vorhanden.
            </p>
          ) : (
            posts.map((post) => (
              <button
                key={post.id}
                onClick={() => selectPost(post.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 20,
                  width: "100%",
                  padding: "22px 0",
                  border: "none",
                  borderBottom: "1px solid #d7dbd1",
                  background: "transparent",
                  color: "#244b3c",
                  textAlign: "left",
                  cursor: "pointer",
                  fontFamily: "Georgia, serif",
                }}
              >
                <span>
                  <span
                    style={{
                      display: "block",
                      fontFamily: "Arial, sans-serif",
                      fontSize: 12,
                      color: "#827d72",
                      marginBottom: 10,
                    }}
                  >
                    {formatDate(post.date)}
                  </span>

                  <span
                    style={{
                      display: "block",
                      fontSize: 20,
                      lineHeight: 1.5,
                    }}
                  >
                    {post.title}
                  </span>
                </span>

                <span
                  aria-hidden="true"
                  style={{
                    fontSize: 22,
                    flexShrink: 0,
                  }}
                >
                  ↗
                </span>
              </button>
            ))
          )}
        </section>
      </div>
    </main>
  );
}
