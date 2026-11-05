
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Wird gesendet...");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(
        "https://formspree.io/f/moeerwrl",
        {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        }
      );

      if (!response.ok) throw new Error("Sendefehler");

      setStatus("Vielen Dank! Ihre Nachricht wurde gesendet.");
      form.reset();
    } catch {
      setStatus("Die Nachricht konnte nicht gesendet werden.");
    }
  }

  return (
    <section id="contact" style={{
      maxWidth: 650,
      margin: "30px auto",
      padding: 30,
      background: "#f8f5f0",
      borderRadius: 20
    }}>
      <h2>Kontakt</h2>
      <p>
        Haben Sie Fragen zu meinen Projekten oder Interesse
        an einer Zusammenarbeit? Schreiben Sie mir gerne.
      </p>

      <form onSubmit={handleSubmit} style={{
        display: "grid",
        gap: 15
      }}>
        <input
          name="name"
          placeholder="Ihr Name"
          required
          style={{ padding: 14, borderRadius: 8 }}
        />
        <input
          type="email"
          name="email"
          placeholder="Ihre E-Mail-Adresse"
          required
          style={{ padding: 14, borderRadius: 8 }}
        />
        <textarea
          name="message"
          placeholder="Ihre Nachricht"
          rows={6}
          required
          style={{ padding: 14, borderRadius: 8 }}
        />
        <button type="submit" style={{
          padding: 15,
          background: "#344e41",
          color: "white",
          border: "none",
          borderRadius: 10,
          cursor: "pointer"
        }}>
          Nachricht senden
        </button>
        <p role="status" aria-live="polite">{status}</p>
      </form>
    </section>
  );
}
