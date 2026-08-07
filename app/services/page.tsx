import type { Metadata } from "next";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { services } from "./service-data";

export const metadata: Metadata = {
  title: "Spray Foam Insulation Services | Belleville Spray Foam",
  description: "Explore attic, garage, basement, crawl space, new construction, closed-cell, and open-cell spray foam insulation services in Belleville and Quinte.",
};

export default function AllServicesPage() {
  return (
    <main>
      <SiteHeader />
      <section className="services-index-hero">
        <p className="eyebrow dark"><span /> Belleville & the Quinte region</p>
        <h1>All <em>Services</em></h1>
        <p>Spray foam solutions for the spaces, assemblies, and project stages that shape a more comfortable building.</p>
      </section>
      <section className="services-index section">
        <div className="services-index-grid">
          {services.map((service) => (
            <a className="service-index-card" href={`/services/${service.slug}`} key={service.slug}>
              <figure><img src={service.image} alt={service.imageAlt} loading="lazy" /></figure>
              <div><span>{service.number}</span><h2>{service.title}</h2><p>{service.intro}</p><strong>Explore service ↗</strong></div>
            </a>
          ))}
        </div>
      </section>
      <section className="service-cta">
        <p className="eyebrow"><span /> Not sure where to start?</p>
        <h2>Tell us about<br />your space.</h2>
        <p>We’ll look at the building, the problem you’re solving, and the assembly before recommending a product or approach.</p>
        <a className="button" href="/#quote">Request an estimate <span>↗</span></a>
      </section>
      <SiteFooter />
    </main>
  );
}
