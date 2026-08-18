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
        <p>Explore Belleville spray foam insulation for attics, basements, crawl spaces, garages, new construction, and other assemblies. Every spray foam recommendation starts with the building and its insulation needs.</p>
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
        <h2>Tell us about your<br />insulation project.</h2>
        <p>We inspect the building and the problem you want to solve before recommending a spray foam insulation product, depth, or application plan.</p>
        <a className="button" href="/#quote">Request an estimate <span>↗</span></a>
      </section>
      <SiteFooter />
    </main>
  );
}
