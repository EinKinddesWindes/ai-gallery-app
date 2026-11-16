import { useEffect, useState } from "react";

import { createPost, updatePost } from "../postService";
import { uploadMedia } from "../mediaUpload";


export default function PostEditor({
  category,
  onPublished,
  editingPost = null,
  onCancelEdit,
}) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [mediaFiles, setMediaFiles] = useState([]);
  const [existingMedia, setExistingMedia] = useState([]);
  
useEffect(() => {
  if (!editingPost) return;

  setTitle(editingPost.title || "");
  setDescription(editingPost.description || "");
  setBody(editingPost.body || "");

  const savedMedia =
    Array.isArray(editingPost.media) &&
    editingPost.media.length > 0
      ? editingPost.media
      : editingPost.image
        ? [{
            url: editingPost.image,
            resourceType: "image",
          }]
        : [];

  setExistingMedia(savedMedia);
  setMediaFiles([]);
  setImage("");
  setError("");
  setOpen(true);
}, [editingPost]);

  
const [uploading, setUploading] = useState(false);
  
const [previewUrls, setPreviewUrls] = useState([]);

useEffect(() => {
const previews = mediaFiles.map((file) => ({
  file,
  url: URL.createObjectURL(file),
}));

setPreviewUrls(previews);

return () => {
  previews.forEach((preview) => {
    URL.revokeObjectURL(preview.url);
  });
};
}, [mediaFiles]);


  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim() || !body.trim()) {
      setError("Bitte Titel und Inhalt eingeben.");
      return;
    }

    setSaving(true);
    setError("");

    try {
      

const uploadedMedia = [];

if (mediaFiles.length > 0) {
  setUploading(true);

  try {
    for (const file of mediaFiles) {
      const uploaded = await uploadMedia(file);

      uploadedMedia.push({
        url: uploaded.url,
        publicId: uploaded.publicId,
        resourceType: uploaded.resourceType,
      });
    }
  } finally {
    setUploading(false);
  }
}

// 기존 이미지 URL도 유지
if (image.trim()) {
  uploadedMedia.push({
    url: image.trim(),
    resourceType: "image",
  });
}


const allMedia = editingPost
  ? [...existingMedia, ...uploadedMedia]
  : uploadedMedia;

const postData = {
  title: title.trim(),
  description: description.trim(),
  body: body.trim(),
  image: allMedia[0]?.url || "",
  media: allMedia,
  category,
};

let id;

if (editingPost) {
  const firestoreId = editingPost.id.replace(/^firebase-/, "");
  await updatePost(firestoreId, postData);
  id = firestoreId;
} else {
  id = await createPost(postData);
}



      setTitle("");
      setDescription("");
      setBody("");
      setImage("");
      setMediaFiles([]);
      setOpen(false);

      if (onPublished) onPublished(id);
    } catch (err) {
      console.error(err);
      setError("Der Beitrag konnte nicht gespeichert werden.");
    } finally {
      setSaving(false);
    }
  }

  const fieldStyle = {
    width: "100%",
    padding: 12,
    border: "1px solid #d7dbd1",
    borderRadius: 0,
    background: "#fff",
    color: "#244b3c",
    fontSize: 15,
    boxSizing: "border-box",
    marginBottom: 18,
  };

  return (
    <section style={{ marginBottom: 50 }}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        style={{
          padding: "12px 20px",
          background: "#244b3c",
          color: "#fff",
          border: "none",
          borderRadius: 0,
          cursor: "pointer",
        }}
      >
        {open ? "Schließen" : "+ Beitrag schreiben"}
      </button>

      {open && (
        <form
          onSubmit={handleSubmit}
          style={{
            marginTop: 25,
            padding: 25,
            border: "1px solid #d7dbd1",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <input
            style={fieldStyle}
            placeholder="Titel"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <textarea
            style={fieldStyle}
            placeholder="Kurzbeschreibung"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
          />

          <textarea
            style={fieldStyle}
            placeholder="Inhalt"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={12}
            required
          />


<div style={{ marginBottom: 20 }}>
  <label
    htmlFor="media-upload"
    style={{
      display: "block",
      marginBottom: 10,
      color: "#244b3c",
      fontSize: 15,
    }}
  >
    Foto oder Video hochladen
  </label>

    
<input
  id="media-upload"
  type="file"
  accept="image/*,video/*"
  multiple
  onChange={(e) => {
    const files = Array.from(e.target.files || []);

    setMediaFiles((previous) => [
      ...previous,
      ...files,
    ]);

    e.target.value = "";
  }}
  style={{
    ...fieldStyle,
    marginBottom: 8,
  }}
/>


{existingMedia.length > 0 && (
  <div style={{ marginTop: 15, marginBottom: 25 }}>
    <p style={{ fontSize: 14, color: "#244b3c" }}>
      Bereits hochgeladene Dateien ({existingMedia.length})
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fill, minmax(160px, 1fr))",
        gap: 15,
      }}
    >
      {existingMedia.map((item, index) => (
        <div
          key={`${item.url}-${index}`}
          style={{
            border: "1px solid #d7dbd1",
            padding: 10,
            position: "relative",
          }}
        >
          {item.resourceType === "video" ||
          /\/video\/upload\//.test(item.url) ? (
            <video
              src={item.url}
              controls
              style={{
                width: "100%",
                height: 150,
              }}
            />
          ) : (
            <img
              src={item.url}
              alt={`Bild ${index + 1}`}
              style={{
                width: "100%",
                height: 150,
                objectFit: "contain",
              }}
            />
          )}

          
<button
  type="button"
  aria-label="Datei entfernen"
  title="Datei entfernen"
  onClick={() =>
    setExistingMedia((previous) =>
      previous.filter((_, i) => i !== index)
    )
  }
  style={{
    position: "absolute",
    top: 6,
    right: 6,
    width: 28,
    height: 28,
    background: "#ffffff",
    border: "1px solid #d7dbd1",
    borderRadius: 0,
    color: "#a33",
    fontSize: 20,
    lineHeight: 1,
    cursor: "pointer",
  }}
>
  X
</button>

        </div>
      ))}
    </div>
  </div>
)}


{previewUrls.length > 0 && (
  <div style={{ marginTop: 15, marginBottom: 20 }}>
    <p style={{ fontSize: 14, color: "#244b3c" }}>
      Ausgewählte Dateien ({previewUrls.length})
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fill, minmax(160px, 1fr))",
        gap: 15,
      }}
    >
      {previewUrls.map((preview, index) => (
        <div
          key={preview.url}
          style={{
            border: "1px solid #d7dbd1",
            padding: 10,
            minWidth: 0,
          }}
        >
          {preview.file.type.startsWith("image/") ? (
            <img
              src={preview.url}
              alt={`Vorschau ${index + 1}`}
              style={{
                width: "100%",
                height: 150,
                objectFit: "contain",
              }}
            />
          ) : (
            <video
              src={preview.url}
              controls
              style={{
                width: "100%",
                height: 150,
              }}
            />
          )}

          <p
            style={{
              fontSize: 12,
              color: "#666",
              overflowWrap: "anywhere",
            }}
          >
            {preview.file.name}
          </p>

          <button
            type="button"
            onClick={() =>
              setMediaFiles((previous) =>
                previous.filter((_, i) => i !== index)
              )
            }
            style={{
              background: "transparent",
              border: "none",
              color: "#a33",
              cursor: "pointer",
              padding: "5px 0",
              fontSize: 12,
            }}
          >
            Entfernen
          </button>
        </div>
      ))}
    </div>
  </div>
)}


</div>

          <input
            style={fieldStyle}
            placeholder="Bild-URL (optional)"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          {error && (
            <p style={{ color: "#a33" }}>{error}</p>
          )}

          <button
            type="submit"
            disabled={saving || uploading}
            style={{
              padding: "12px 24px",
              background: "#244b3c",
              color: "white",
              border: "none",
              cursor: saving ? "wait" : "pointer",
              opacity: saving ? 0.6 : 1,
            }}
          >
            {uploading
              ? "Medien werden hochgeladen..."
              : saving
              ? "Speichern..."
              : "Veröffentlichen"}
          </button>
        </form>
      )}
    </section>
  );
}
