export default function SiteFooter() {
  return (
    <footer>
      <div style={{ width: "100%", maxWidth: 1200, margin: "0 auto 28px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d34874.348702365955!2d-77.40729470964779!3d44.17647276555885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sca!4v1786327832965!5m2!1sen!2sca"
          width="600"
          height="450"
          style={{ border: 0, width: "100%", display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Belleville Spray Foam Insulation service area map"
        />
      </div>
      <a className="brand" href="/"><span className="brand-mark">B</span><span>Belleville<br />Spray Foam</span></a>
      <p>Local spray foam insulation. Lasting comfort.</p>
      <p>© 2026 Belleville Spray Foam Insulation</p>
    </footer>
  );
}
