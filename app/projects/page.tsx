import type { Metadata } from "next";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { projectGroups } from "./project-data";

export const metadata: Metadata = {
  title: "Our Spray Foam Work | Belleville Spray Foam Insulation",
  description: "Explore labeled spray foam insulation photos from attic, basement, crawlspace, garage, wall, roof, subfloor, and new construction applications.",
};

export default function ProjectsPage() {
  const count = projectGroups.reduce((total, group) => total + group.photos.length, 0);

  return (
    <main>
      <SiteHeader />
      <section className="projects-hero">
        <p className="service-breadcrumb"><a href="/">Home</a><span>/</span><strong>Our work</strong></p>
        <p className="eyebrow dark"><span /> Labeled application gallery</p>
        <h1>Real work.<br /><em>Explained.</em></h1>
        <div className="projects-hero-copy">
          <p>See {count} spray foam insulation applications across attics, foundations, garages, walls, and new construction. Each example explains spray foam preparation, insulation details, and building-envelope goals.</p>
          <a className="button" href="#attics-rooflines">Explore the gallery <span>↓</span></a>
        </div>
      </section>

      <nav className="project-category-nav" aria-label="Project photo categories">
        {projectGroups.map((group) => (
          <a href={`#${group.title.toLowerCase().replaceAll(" & ", "-").replaceAll(" ", "-")}`} key={group.title}>{group.title}</a>
        ))}
      </nav>

      <section className="project-library">
        {projectGroups.map((group, groupIndex) => {
          const groupId = group.title.toLowerCase().replaceAll(" & ", "-").replaceAll(" ", "-");
          return (
            <section className="project-group section" id={groupId} key={group.title}>
              <div className="project-group-heading">
                <div>
                  <p className="eyebrow dark"><span /> {group.eyebrow}</p>
                  <h2>{group.title}</h2>
                </div>
                <p>{group.intro}</p>
              </div>
              <div className="project-stories">
                {group.photos.map((photo, photoIndex) => (
                  <article className="project-story" id={photo.slug} key={photo.slug}>
                    <figure>
                      <img src={photo.image} alt={photo.alt} loading={groupIndex === 0 && photoIndex === 0 ? "eager" : "lazy"} />
                      <figcaption><span>{String(groupIndex + 1).padStart(2, "0")}.{String(photoIndex + 1).padStart(2, "0")}</span>{photo.label}</figcaption>
                    </figure>
                    <div className="project-story-copy">
                      <p className="eyebrow dark"><span /> Photo details</p>
                      <h3>{photo.label}</h3>
                      <p>{photo.description}</p>
                      <a className="text-link" href="/#quote">Ask about this application <span>↗</span></a>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </section>

      <section className="service-cta">
        <p className="eyebrow"><span /> Your space is different</p>
        <h2>Let’s plan the right spray foam insulation.</h2>
        <p>Share what you are insulating and we’ll explain the preparation, spray foam type, insulation depth, and next steps that fit your building.</p>
        <a className="button" href="/#quote">Request a free estimate <span>↗</span></a>
      </section>
      <SiteFooter />
    </main>
  );
}
