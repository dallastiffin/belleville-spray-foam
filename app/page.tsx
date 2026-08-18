"use client";

import { FormEvent, useState } from "react";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import { projectGroups } from "./projects/project-data";

const services = [
  {
    number: "01",
    title: "Attics & rooflines",
    href: "/services/attic-insulation",
    text: "Attic spray foam insulation seals roof decks, slopes, knee walls, and hard-to-reach gaps where heat escapes.",
    image: "/projects/finished-attic.webp",
    alt: "Finished attic insulated with spray foam along the roofline",
  },
  {
    number: "02",
    title: "Basements & crawlspaces",
    href: "/services/basement-insulation",
    text: "Basement spray foam insulation controls drafts and supports moisture management with a continuous below-grade air barrier.",
    image: "/projects/crawlspace-installation.webp",
    alt: "Installer applying spray foam to a crawlspace foundation wall",
  },
  {
    number: "03",
    title: "New builds & additions",
    href: "/services/new-construction",
    text: "Plan spray foam insulation for consistent coverage in custom homes, renovations, shops, garages, and agricultural buildings.",
    image: "/projects/great-room.webp",
    alt: "Spray foam being installed in a two-storey great room",
  },
];

const steps = [
  ["Insulation walkthrough", "We inspect the spray foam area, access, existing insulation, and sources of discomfort."],
  ["Clear spray foam quote", "You receive a clear insulation scope with the recommended spray foam type and depth."],
  ["Professional installation", "We protect the area, install spray foam insulation, inspect the coverage, and leave the site clean."],
];

export default function Home() {
  const [sent, setSent] = useState(false);

  function submitQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main>
      <SiteHeader />

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Serving Belleville & the Quinte region</p>
          <h1>Belleville<br />Spray Foam<br /><em>Insulation</em></h1>
          <p className="hero-lede">
            Professional spray foam insulation for quieter, more comfortable Belleville homes and buildings. Our local crew matches spray foam and insulation depth to each assembly.
          </p>
          <div className="hero-actions">
            <a className="button" href="#quote">Plan your project <span>↗</span></a>
            <a className="text-link" href="#why-foam">See how it works <span>↓</span></a>
          </div>
        </div>
        <div className="hero-art">
          <img src="/projects/attic-installation.webp" alt="Installer applying spray foam insulation to an attic roofline" />
          <p className="art-note"><span>ATTIC ROOFLINE APPLICATION</span>A tighter building envelope.<br /><strong>A more comfortable space.</strong></p>
        </div>
      </section>

      <section className="trust-strip" aria-label="Key benefits">
        <p><strong>One installation.</strong><span>Year-round performance.</span></p>
        <div><strong>Air seals</strong><span>as it insulates</span></div>
        <div><strong>Hard-to-reach</strong><span>coverage</span></div>
        <div><strong>Residential</strong><span>& commercial</span></div>
      </section>

      <section className="services section" id="services">
        <div className="section-heading">
          <p className="eyebrow dark"><span /> What we insulate</p>
          <h2>Built for the spaces<br />that need it most.</h2>
          <p>From older homes to new construction, we match spray foam insulation to the building, using the appropriate foam type and insulation depth for each application.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <a className="service-card" href={service.href} key={service.number}>
              <span className="service-number">{service.number}</span>
              <figure className="service-photo">
                <img src={service.image} alt={service.alt} loading="lazy" />
              </figure>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <strong className="card-link">Explore service ↗</strong>
            </a>
          ))}
        </div>
        <div className="services-footer"><a className="text-link" href="/services">View all services <span>↗</span></a></div>
      </section>

      <section className="why section" id="why-foam">
        <div className="why-panel">
          <p className="eyebrow"><span /> Why spray foam</p>
          <h2>Insulation and<br />air sealing in one.</h2>
          <p>Traditional insulation can leave seams and gaps. Spray foam insulation expands in place, creating continuous insulation around framing, corners, and penetrations. One spray foam application can insulate and air seal difficult transitions.</p>
          <a className="text-link light" href="#quote">Talk through your space <span>↗</span></a>
        </div>
        <div className="benefit-list">
          <article><span>01</span><div><h3>Fewer drafts</h3><p>Spray foam insulation seals small openings that can make rooms cold in winter and difficult to cool in summer.</p></div></article>
          <article><span>02</span><div><h3>Moisture strategy</h3><p>Continuous spray foam air control helps reduce moisture-laden air movement through the insulation assembly.</p></div></article>
          <article><span>03</span><div><h3>Lasting comfort</h3><p>Consistent spray foam insulation helps the building maintain steadier indoor temperatures.</p></div></article>
        </div>
      </section>

      <section className="work section" id="work">
        <div className="section-heading work-heading">
          <p className="eyebrow dark"><span /> Our work</p>
          <h2>Spray foam<br />in real spaces.</h2>
          <p>See spray foam insulation installed across attics, foundations, garages, rooflines, and new construction. Each example shows how preparation supports reliable spray foam coverage.</p>
        </div>
        <div className="home-project-groups">
          {projectGroups.map((group, groupIndex) => (
            <section className="home-project-group" key={group.title}>
              <div className="project-group-heading">
                <div>
                  <p className="eyebrow dark"><span /> {group.eyebrow}</p>
                  <h2>{group.title}</h2>
                </div>
                <p>{group.intro}</p>
              </div>
              <div className="project-stories">
                {group.photos.map((photo, photoIndex) => (
                  <article className="project-story" id={`home-${photo.slug}`} key={photo.slug}>
                    <figure>
                      <img src={photo.image} alt={photo.alt} loading="lazy" />
                      <figcaption><span>{String(groupIndex + 1).padStart(2, "0")}.{String(photoIndex + 1).padStart(2, "0")}</span>{photo.label}</figcaption>
                    </figure>
                    <div className="project-story-copy">
                      <p className="eyebrow dark"><span /> Application details</p>
                      <h3>{photo.label}</h3>
                      <p>{photo.description}</p>
                      <a className="text-link" href="#quote">Ask about this application <span>↗</span></a>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
        <div className="services-footer"><a className="text-link" href="/projects">Open the dedicated gallery <span>↗</span></a></div>
      </section>

      <section className="process section" id="process">
        <div className="section-heading compact">
          <p className="eyebrow dark"><span /> Simple from start to finish</p>
          <h2>Better spray foam insulation,<br />without the runaround.</h2>
        </div>
        <div className="steps">
          {steps.map(([title, text], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="quote section" id="quote">
        <div className="quote-copy">
          <p className="eyebrow"><span /> Free project estimate</p>
          <h2>Tell us where you need<br />spray foam insulation.</h2>
          <p>Share your insulation goals and we’ll discuss the space, answer spray foam questions, and arrange a Belleville-area walkthrough.</p>
          <div className="service-area"><span>LOCALLY SERVING</span><strong>Belleville · Quinte West · Prince Edward County</strong></div>
        </div>
        {sent ? (
          <div className="success" role="status">
            <span>✓</span>
            <h3>Thanks — we have your project details.</h3>
            <p>We’ll follow up to talk through the space and the best next step.</p>
            <button className="text-link light" onClick={() => setSent(false)}>Send another request</button>
          </div>
        ) : (
          <form onSubmit={submitQuote}>
            <label>Name<input name="name" autoComplete="name" required placeholder="Your name" /></label>
            <label>Phone or email<input name="contact" required placeholder="How should we reach you?" /></label>
            <label>Project location<input name="location" autoComplete="postal-code" required placeholder="City or postal code" /></label>
            <label>What are you insulating?<textarea name="project" required rows={4} placeholder="Attic, basement, addition, shop…" /></label>
            <button className="button button-submit" type="submit">Request my estimate <span>↗</span></button>
            <small>No pressure. Just practical advice for your project.</small>
          </form>
        )}
      </section>

      <SiteFooter />
    </main>
  );
}
