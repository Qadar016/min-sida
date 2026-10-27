import { useState } from "react";
import "./Kontak.css";

export default function Kontakt() {
  const [skickat, setSkickat] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    // Byt ut mot ditt eget anrop, till exempel fetch("/api/kontakt", { method: "POST", ... })
    console.log("Meddelande:", data);
    form.reset();
    setSkickat(true);
  };

  return (
    <section className="kt-sida">
      <div className="kt-info">
        <h1>Kontakta mig</h1>
        <p className="kt-ingress">Skriv några rader, så återkommer jag så snart jag kan.</p>

        <dl className="kt-lista">
          <div>
            <dt>E-post</dt>
            <dd>
              <a href="mailto:abdi@exempel.com">abdi@exempel.com</a>
            </dd>
          </div>
          <div>
            <dt>Telefon</dt>
            <dd>
              <a href="tel:0701234567">070-123 45 67</a>
            </dd>
          </div>
        </dl>
      </div>

      <div className="kt-panel">
        {skickat ? (
          <div className="kt-tack" role="status">
            <h2>Tack för ditt meddelande.</h2>
            <p>Jag hör av mig inom kort.</p>
            <button type="button" className="kt-knapp" onClick={() => setSkickat(false)}>
              Skriv ett nytt meddelande
            </button>
          </div>
        ) : (
          <form className="kt-form" onSubmit={handleSubmit}>
            <div className="kt-fält">
              <label htmlFor="namn">Namn</label>
              <input type="text" id="namn" name="namn" placeholder="Ditt namn" required />
            </div>

            <div className="kt-fält">
              <label htmlFor="epost">E-post</label>
              <input type="email" id="epost" name="epost" placeholder="namn@exempel.se" required />
            </div>

            <div className="kt-fält">
              <label htmlFor="meddelande">Meddelande</label>
              <textarea id="meddelande" name="meddelande" rows="5" required />
            </div>

            <button type="submit" className="kt-knapp">
              Skicka
            </button>
          </form>
        )}
      </div>
    </section>
  );
}