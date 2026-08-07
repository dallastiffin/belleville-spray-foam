const serviceLinks = [
  ["All Services", "/services"],
  ["Attic Insulation", "/services/attic-insulation"],
  ["Garage Insulation", "/services/garage-insulation"],
  ["Basement Insulation", "/services/basement-insulation"],
  ["Crawl Space Insulation", "/services/crawl-space-insulation"],
  ["New Construction", "/services/new-construction"],
  ["Closed-Cell Spray Foam", "/services/closed-cell-spray-foam"],
  ["Open-Cell Spray Foam", "/services/open-cell-spray-foam"],
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Belleville Spray Foam home">
        <span className="brand-mark">B</span>
        <span>Belleville<br />Spray Foam</span>
      </a>
      <nav aria-label="Main navigation">
        <details className="services-menu">
          <summary>Services <span aria-hidden="true">⌄</span></summary>
          <div className="services-menu-panel">
            <p>Insulation services</p>
            {serviceLinks.map(([label, href]) => <a href={href} key={href}>{label}<span aria-hidden="true">↗</span></a>)}
          </div>
        </details>
        <a href="/projects">Our work</a>
        <a href="/#why-foam">Why spray foam</a>
        <a href="/#process">Process</a>
      </nav>
      <a className="button button-small" href="/#quote">Get a free quote</a>
    </header>
  );
}
