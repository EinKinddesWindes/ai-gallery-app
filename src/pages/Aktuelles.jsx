
import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";

import { db } from "../firebase";
import { cmsPosts } from "../data/cmsPosts";
import { deletePost } from "../postService";
import PostEditor from "../components/PostEditor";

const BASE = import.meta.env.BASE_URL;

const cmsArticles = cmsPosts
  .filter((post) => post.category === "aktuelles")
  .map((post) => ({
    ...post,
    id: `cms-${post.id}`,
  }));

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

function isVideo(item) {
  const url = item.url || item.image || "";

  return (
    item.resourceType === "video" ||
    /\/video\/upload\//.test(url) ||
    /\.(mp4|webm|mov)(\?|$)/i.test(url)
  );
}

export default function Aktuelles({ admin = false }) {
  const [firebasePosts, setFirebasePosts] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [editingPost, setEditingPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "posts"),
      (snapshot) => {
        const articles = snapshot.docs
          .map((document) => {
            const data = document.data();

            if (data.category !== "aktuelles") {
              return null;
            }

            const createdAt = data.createdAt?.toDate?.();

            return {
              ...data,
              id: `firebase-${document.id}`,
              date: createdAt
                ? createdAt.toISOString().slice(0, 10)
                : data.date || "",
              sortTime: createdAt
                ? createdAt.getTime()
                : data.date
                  ? new Date(data.date).getTime()
                  : 0,
            };
          })
          .filter(Boolean);

        setFirebasePosts(articles);
        setLoadError("");
        setLoading(false);
      },
      (error) => {
        console.error("Firestore:", error);
        setLoadError(
          "Beiträge konnten nicht geladen werden."
        );
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const posts = [
    ...firebasePosts,
    ...cmsArticles.map((post) => ({
      ...post,
      sortTime: post.date
        ? new Date(`${post.date}T12:00:00`).getTime()
        : 0,
    })),
  ].sort((a, b) => b.sortTime - a.sortTime);

  const selected =
    posts.find((post) => post.id === selectedId) ||
    posts[0];

  const otherPosts = posts.filter(
    (post) => post.id !== selected?.id
  );

  function selectPost(id) {
    setSelectedId(id);
    setEditingPost(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function handlePublished(id) {
    setSelectedId(`firebase-${id}`);
    setEditingPost(null);
  }

  async function handleDelete(post) {
    if (!admin || !post.id.startsWith("firebase-")) {
      return;
    }

    const confirmed = window.confirm(
      `Möchtest du den Beitrag "${post.title}" wirklich löschen?`
    );

    if (!confirmed) return;

    try {
      const firestoreId = post.id.replace(
        /^firebase-/,
        ""
      );

      await deletePost(firestoreId);

      if (selectedId === post.id) {
        setSelectedId(null);
      }

      if (editingPost?.id === post.id) {
        setEditingPost(null);
      }
    } catch (error) {
      console.error("Fehler beim Löschen:", error);

      window.alert(
        "Der Beitrag konnte nicht gelöscht werden."
      );
    }
  }

  function handleEdit(post) {
    setEditingPost(post);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function getMediaList(post) {
    if (
      Array.isArray(post.media) &&
      post.media.length > 0
    ) {
      return post.media;
    }

    if (post.image) {
      return [
        {
          url: post.image,
          resourceType: isVideo(post)
            ? "video"
            : "image",
        },
      ];
    }

    return [];
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
      <div className="aktuelles-container">
        {/* ADMIN EDITOR */}
        {admin && (
          <div className="aktuelles-admin">
            <PostEditor
              category="aktuelles"
              editingPost={editingPost}
              onPublished={handlePublished}
              onCancelEdit={() => setEditingPost(null)}
            />
          </div>
        )}

        {loadError && (
          <p style={{ color: "#a33" }}>
            {loadError}
          </p>
        )}

        {/* SELECTED ARTICLE */}
        <article className="aktuelles-article">
          {selected ? (
            <>
              <p className="aktuelles-date">
                {formatDate(selected.date)}
              </p>

              <h1 className="aktuelles-title">
                {selected.title}
              </h1>

              {/* ADMIN ACTIONS */}
              {admin &&
                selected.id.startsWith("firebase-") && (
                  <div className="aktuelles-actions">
                    <button
                      type="button"
                      onClick={() => handleEdit(selected)}
                    >
                      Bearbeiten
                    </button>

                    <button
                      type="button"
                      className="aktuelles-delete"
                      onClick={() => handleDelete(selected)}
                    >
                      Löschen
                    </button>
                  </div>
                )}

              {selected.description && (
                <p className="aktuelles-description">
                  {selected.description}
                </p>
              )}

              {/* PHOTOS AND VIDEOS */}
              <div className="aktuelles-media">
                {getMediaList(selected).map((item, index) => {
                  const url =
                    typeof item === "string"
                      ? item
                      : item.url;

                  if (!url) return null;

                  const mediaItem =
                    typeof item === "string"
                      ? { url }
                      : item;

                  return (
                    <div
                      key={`${url}-${index}`}
                      className="aktuelles-media-item"
                    >
                      {isVideo(mediaItem) ? (
                        <video
                          src={imagePath(url)}
                          controls
                          playsInline
                        />
                      ) : (
                        <img
                          src={imagePath(url)}
                          alt={`${selected.title} – ${index + 1}`}
                        />
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="aktuelles-body">
                {selected.body}
              </div>
            </>
          ) : (
            <div className="aktuelles-empty">
              {loading
                ? "Beiträge werden geladen..."
                : "Hier erscheinen künftig meine neuesten Beiträge."}
            </div>
          )}
        </article>

        {/* ARTICLE ARCHIVE */}
        <section className="aktuelles-archive">
          <h2>Weitere Beiträge</h2>

          {otherPosts.length === 0 ? (
            <p className="aktuelles-no-posts">
              Noch keine weiteren Beiträge vorhanden.
            </p>
          ) : (
            otherPosts.map((post) => (
              <button
                key={post.id}
                type="button"
                className="aktuelles-archive-item"
                onClick={() => selectPost(post.id)}
              >
                <span className="aktuelles-archive-info">
                  <span className="aktuelles-archive-date">
                    {formatDate(post.date)}
                  </span>

                  <span className="aktuelles-archive-title">
                    {post.title}
                  </span>
                </span>

                <span
                  className="aktuelles-arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </button>
            ))
          )}
        </section>
      </div>

      <style>{`
        .aktuelles-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 35px 9% 90px;
          box-sizing: border-box;
        }

        .aktuelles-admin {
          max-width: 800px;
          margin: 0 auto 20px;
          display: flex;
          justify-content: flex-end;
        }

        .aktuelles-admin > section {
          width: 100%;
          margin-bottom: 0 !important;
        }

        .aktuelles-admin > section > button {
          display: block;
          margin-left: auto;
        }

        .aktuelles-article {
          max-width: 800px;
          margin: 0 auto 55px;
          min-height: 180px;
          overflow-wrap: anywhere;
        }

        .aktuelles-date {
          font-family: Arial, sans-serif;
          font-size: 12px;
          letter-spacing: 1.5px;
          color: #827d72;
          margin: 0 0 15px;
        }

        .aktuelles-title {
          font-size: clamp(24px, 3vw, 32px);
          font-weight: 400;
          line-height: 1.4;
          margin: 0 0 22px;
          color: #244b3c;
        }

        .aktuelles-description {
          font-size: 17px;
          line-height: 1.8;
          color: #666;
          margin: 0 0 25px;
        }

        .aktuelles-actions {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          margin: 0 0 22px;
        }

        .aktuelles-actions button {
          background: transparent;
          border: 1px solid #d7dbd1;
          border-radius: 0;
          padding: 9px 16px;
          color: #244b3c;
          font-family: Arial, sans-serif;
          font-size: 13px;
          cursor: pointer;
        }

        .aktuelles-actions .aktuelles-delete {
          color: #a33;
        }

        .aktuelles-media-item {
          margin: 25px 0;
          text-align: center;
        }

        .aktuelles-media-item img,
        .aktuelles-media-item video {
          display: block;
          width: 100%;
          max-width: 100%;
          max-height: 420px;
          object-fit: contain;
          margin: 0 auto;
        }

        .aktuelles-body {
          font-size: 17px;
          line-height: 1.8;
          color: #555;
          white-space: pre-wrap;
          overflow-wrap: anywhere;
        }

        .aktuelles-empty {
          text-align: center;
          padding: 65px 0;
          font-size: 18px;
          color: #827d72;
        }

        .aktuelles-archive {
          max-width: 800px;
          margin: 0 auto;
          border-top: 1px solid #d7dbd1;
          padding-top: 30px;
        }

        .aktuelles-archive h2 {
          font-size: 28px;
          font-weight: 400;
          margin: 0 0 25px;
        }

        .aktuelles-no-posts {
          font-size: 15px;
          color: #827d72;
        }

        .aktuelles-archive-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          width: 100%;
          padding: 20px 0;
          border: none;
          border-bottom: 1px solid #d7dbd1;
          background: transparent;
          color: #244b3c;
          text-align: left;
          cursor: pointer;
          font-family: Georgia, serif;
        }

        .aktuelles-archive-info {
          min-width: 0;
        }

        .aktuelles-archive-date {
          display: block;
          font-family: Arial, sans-serif;
          font-size: 12px;
          color: #827d72;
          margin-bottom: 8px;
        }

        .aktuelles-archive-title {
          display: block;
          font-size: 19px;
          line-height: 1.5;
        }

        .aktuelles-arrow {
          font-size: 22px;
          flex-shrink: 0;
        }

        @media (max-width: 800px) {
          .aktuelles-container {
            padding: 30px 7% 65px;
          }

          .aktuelles-title {
            font-size: 26px;
          }

          .aktuelles-description,
          .aktuelles-body {
            font-size: 16px;
          }

          .aktuelles-archive-title {
            font-size: 17px;
          }

          .aktuelles-media-item img,
          .aktuelles-media-item video {
            max-height: 300px;
          }
        }
      `}</style>
    </main>
  );
}
