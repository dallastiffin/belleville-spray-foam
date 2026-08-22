import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { getService, Service, services } from "./service-data";

export default function ServicePage({ service }: { service: Service }) {
  const related = service.related.map(getService);

  return (
    <main>
      <SiteHeader />
      <section className="service-hero">
        <div className="service-hero-copy">
          <p className="service-breadcrumb"><a href="/">Home</a><span>/</span><a href="/services">Services</a></p>
          <p className="eyebrow dark"><span /> {service.eyebrow}</p>
          <h1>{service.title}</h1>
          <p>{service.intro}</p>
          <div className="cta-actions">
            <a className="button" href="/#quote">Request an estimate <span>↗</span></a>
            <a className="button button-secondary" href="tel:+16139127508"><span aria-hidden="true">☎</span> Call Now</a>
          </div>
        </div>
        <figure className="service-hero-image">
          <img src={service.image} alt={service.imageAlt} />
          <figcaption><span>{service.number}</span> Belleville & Quinte region</figcaption>
        </figure>
      </section>

      <nav className="service-nav" aria-label="Service pages">
        <a href="/services">All services</a>
        {services.map((item) => <a className={item.slug === service.slug ? "active" : ""} href={`/services/${item.slug}`} key={item.slug}>{item.shortTitle}</a>)}
      </nav>

      <section className="service-overview section">
        <div>
          <p className="eyebrow dark"><span /> The application</p>
          <h2>Designed around<br />your building.</h2>
        </div>
        <p className="service-overview-copy">{service.overview}</p>
      </section>

      <section className="service-benefits section">
        <div className="section-heading compact">
          <p className="eyebrow"><span /> Why it works</p>
          <h2>Performance starts<br />with continuous coverage.</h2>
        </div>
        <div className="service-benefit-grid">
          {service.benefits.map((benefit, index) => (
            <article key={benefit.title}><span>0{index + 1}</span><h3>{benefit.title}</h3><p>{benefit.text}</p></article>
          ))}
        </div>
      </section>

      <section className="service-fit section">
        <div className="service-fit-list">
          <p className="eyebrow dark"><span /> A strong fit for</p>
          <h2>Where this<br />service applies.</h2>
          <ul>{service.idealFor.map((item) => <li key={item}><span>✓</span>{item}</li>)}</ul>
        </div>
        <div className="service-process-note">
          <span className="large-number">{service.number}</span>
          <p className="eyebrow"><span /> Our approach</p>
          <h3>Inspect first.<br />Specify second.</h3>
          <p>{service.processNote}</p>
          <a className="text-link light" href="/#process">See our process <span>↗</span></a>
        </div>
      </section>

      <section className="related-services section">
        <div className="section-heading compact">
          <p className="eyebrow dark"><span /> Keep exploring</p>
          <h2>Related services.</h2>
        </div>
        <div className="related-grid">
          {related.map((item) => (
            <a href={`/services/${item.slug}`} key={item.slug}>
              <img src={item.image} alt="" loading="lazy" />
              <span>{item.number}</span><h3>{item.title}</h3><strong>Learn more ↗</strong>
            </a>
          ))}
        </div>
      </section>

      <section className="service-cta">
        <p className="eyebrow"><span /> Free project estimate</p>
        <h2>Plan a tighter<br />building envelope.</h2>
        <p>Tell us about the space and we’ll recommend an approach suited to your assembly, comfort goals, and Belleville property.</p>
        <div className="cta-actions">
          <a className="button" href="/#quote">Plan your project <span>↗</span></a>
          <a className="button button-call-light" href="tel:+16139127508"><span aria-hidden="true">☎</span> Call (613) 912-7508</a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
