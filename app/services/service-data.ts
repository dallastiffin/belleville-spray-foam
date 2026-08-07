export type Service = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  image: string;
  imageAlt: string;
  intro: string;
  overview: string;
  benefits: { title: string; text: string }[];
  idealFor: string[];
  processNote: string;
  related: string[];
};

export const services: Service[] = [
  {
    slug: "attic-insulation",
    number: "01",
    title: "Attic Insulation",
    shortTitle: "Attics",
    eyebrow: "Comfort starts at the roofline",
    image: "/projects/attic-installation.webp",
    imageAlt: "Installer applying spray foam insulation to an attic roofline",
    intro: "Turn a draft-prone attic into a continuous, insulated part of the building envelope.",
    overview: "Attics are one of the biggest opportunities to improve year-round comfort. Spray foam can follow the roof deck, reach irregular framing, and seal the small gaps that conventional insulation may leave behind. We assess the roof assembly, ventilation strategy, access, and existing insulation before recommending an approach.",
    benefits: [
      { title: "Continuous coverage", text: "Foam expands around rafters, corners, and penetrations to reduce unwanted air movement." },
      { title: "More consistent rooms", text: "A tighter roofline can help upper floors hold a steadier temperature through seasonal swings." },
      { title: "Useful attic space", text: "Roofline insulation can help bring mechanical equipment and storage areas inside the conditioned envelope." },
    ],
    idealFor: ["Sloped roof decks", "Knee walls and bonus rooms", "Attic retrofits", "New roof assemblies"],
    processNote: "We review the roof deck, soffits, vents, wiring, and any mechanical equipment before defining the spray area and required preparation.",
    related: ["open-cell-spray-foam", "closed-cell-spray-foam", "new-construction"],
  },
  {
    slug: "garage-insulation",
    number: "02",
    title: "Garage Insulation",
    shortTitle: "Garages",
    eyebrow: "Comfort beyond the main house",
    image: "/projects/garage-wall.webp",
    imageAlt: "Completed spray foam insulation on garage walls",
    intro: "Create a cleaner thermal boundary for attached garages, workshops, and detached buildings.",
    overview: "Garage walls and rooflines often contain wide bays, metal framing, overhead doors, and transitions to living space. Spray foam can form a continuous layer across these details. We tailor the recommendation to how the garage is used, whether it is heated, and what sits above or beside it.",
    benefits: [
      { title: "Better temperature control", text: "Reduce the rapid heat loss and gain that makes garages uncomfortable to use." },
      { title: "Detailed air sealing", text: "Seal around framing changes, service penetrations, and wall-to-roof transitions." },
      { title: "Flexible applications", text: "Suitable approaches are available for wood framing, metal buildings, shops, and additions." },
    ],
    idealFor: ["Attached garages", "Detached workshops", "Garage ceilings", "Metal building rooflines"],
    processNote: "We identify the intended thermal boundary, protect doors and equipment, and coordinate ignition or thermal barrier requirements with the finished use of the space.",
    related: ["closed-cell-spray-foam", "new-construction", "attic-insulation"],
  },
  {
    slug: "basement-insulation",
    number: "03",
    title: "Basement Insulation",
    shortTitle: "Basements",
    eyebrow: "A warmer foundation level",
    image: "/projects/basement-walls.webp",
    imageAlt: "Basement walls and ceiling insulated with spray foam",
    intro: "Seal foundation walls and rim areas to make lower levels feel more connected to the rest of the home.",
    overview: "Basements can lose comfort through concrete walls, rim joists, and the many penetrations at the top of the foundation. Spray foam conforms to these surfaces and helps create a continuous air-control layer. Existing water entry and foundation concerns should be addressed before insulation is installed.",
    benefits: [
      { title: "Warmer surfaces", text: "Insulated foundation walls can feel less cold and improve comfort throughout the lower level." },
      { title: "Sealed rim joists", text: "Close off one of the most common draft paths where framing meets the foundation." },
      { title: "Renovation ready", text: "Create a more consistent enclosure before framing and finishing a basement." },
    ],
    idealFor: ["Foundation walls", "Rim and band joists", "Basement renovations", "Utility and mechanical rooms"],
    processNote: "We check wall condition, access, existing finishes, visible moisture, and the rim-joist area before recommending coverage and preparation.",
    related: ["crawl-space-insulation", "closed-cell-spray-foam", "new-construction"],
  },
  {
    slug: "crawl-space-insulation",
    number: "04",
    title: "Crawl Space Insulation",
    shortTitle: "Crawl spaces",
    eyebrow: "Seal the space beneath your floors",
    image: "/projects/crawlspace-installation.webp",
    imageAlt: "Installer applying spray foam to a crawlspace foundation wall",
    intro: "Build a more controlled boundary beneath the home with targeted wall, rim, and subfloor insulation.",
    overview: "Crawl spaces connect directly to the floors above and can contribute to drafts, cold surfaces, and humid air movement. The correct approach depends on whether the crawl space will be vented or enclosed, its drainage, ground conditions, and mechanical systems. We review the whole space before spraying.",
    benefits: [
      { title: "Warmer floors", text: "Reduce air movement and temperature transfer beneath living areas." },
      { title: "Hard-to-reach sealing", text: "Foam reaches irregular foundation surfaces, rim joists, and tight framing transitions." },
      { title: "Coordinated moisture control", text: "Insulation can be planned alongside drainage, ground-cover, and ventilation strategies." },
    ],
    idealFor: ["Crawlspace perimeter walls", "Rim joists", "Subfloor applications", "Additions over shallow foundations"],
    processNote: "We confirm safe access, drainage conditions, exposed soil coverage, vents, pipes, and equipment before selecting a crawlspace assembly.",
    related: ["basement-insulation", "closed-cell-spray-foam", "garage-insulation"],
  },
  {
    slug: "new-construction",
    number: "05",
    title: "New Construction",
    shortTitle: "New construction",
    eyebrow: "Plan the envelope from day one",
    image: "/projects/great-room.webp",
    imageAlt: "Spray foam insulation being installed in a two-storey new construction great room",
    intro: "Coordinate insulation with framing and trades for clean coverage before the walls close in.",
    overview: "New construction gives the insulation team access to the full building envelope. That makes it possible to plan transitions, penetrations, rooflines, and special assemblies before finishes are installed. We coordinate timing with the builder so the site is ready and the work fits the inspection schedule.",
    benefits: [
      { title: "Whole-building planning", text: "Treat walls, rooflines, rims, and transitions as one connected enclosure." },
      { title: "Cleaner installation", text: "Open framing gives installers direct access and allows finished foam to be trimmed where required." },
      { title: "Trade coordination", text: "Sequence insulation after rough-ins and before drywall to reduce rework." },
    ],
    idealFor: ["Custom homes", "Home additions", "Shops and outbuildings", "Complex roof and wall assemblies"],
    processNote: "We review plans, assembly targets, inspection requirements, mechanical locations, and the construction schedule with the builder before installation.",
    related: ["attic-insulation", "open-cell-spray-foam", "closed-cell-spray-foam"],
  },
  {
    slug: "closed-cell-spray-foam",
    number: "06",
    title: "Closed-Cell Spray Foam",
    shortTitle: "Closed-cell foam",
    eyebrow: "Dense coverage for demanding assemblies",
    image: "/projects/spray-closeup.webp",
    imageAlt: "Close-up of spray foam being applied between wall studs",
    intro: "A dense, rigid foam option that combines insulation with strong resistance to air and vapour movement.",
    overview: "Closed-cell spray foam delivers high thermal resistance in a compact depth and cures to a firm surface. It is often considered for foundations, rim joists, metal buildings, compact roof assemblies, and areas where lower vapour permeance is part of the design. The substrate and assembly must be suitable before installation.",
    benefits: [
      { title: "High performance per inch", text: "Useful where framing depth or available installation space is limited." },
      { title: "Firm, durable finish", text: "Cures into a rigid layer that adheres to properly prepared substrates." },
      { title: "Air and vapour control", text: "Can support enclosure strategies that call for both air sealing and lower vapour permeance." },
    ],
    idealFor: ["Foundation and rim areas", "Metal buildings", "Compact rooflines", "Garages and workshops"],
    processNote: "We confirm substrate condition, temperature, required thickness, adjacent materials, and the overall moisture strategy before recommending closed-cell foam.",
    related: ["open-cell-spray-foam", "basement-insulation", "garage-insulation"],
  },
  {
    slug: "open-cell-spray-foam",
    number: "07",
    title: "Open-Cell Spray Foam",
    shortTitle: "Open-cell foam",
    eyebrow: "Expansive coverage for interior assemblies",
    image: "/projects/wall-studs.webp",
    imageAlt: "Open framing with spray foam filling tall wall cavities",
    intro: "A light, expanding foam option that fills deep cavities and supports comfortable interior spaces.",
    overview: "Open-cell spray foam expands significantly during installation, helping it fill wall and roof cavities around irregular details. It is commonly considered for above-grade interior assemblies where sufficient cavity depth is available. Its vapour permeability and assembly location must fit the building design.",
    benefits: [
      { title: "Cavity filling", text: "Expands to reach corners and irregular framing throughout deep wall and roof bays." },
      { title: "Sound absorption", text: "Its softer cellular structure can help reduce sound transfer through interior assemblies." },
      { title: "Efficient coverage", text: "Well suited to larger above-grade areas when the assembly provides adequate depth." },
    ],
    idealFor: ["Above-grade walls", "Roof decks and attics", "Interior sound control", "Deep framed cavities"],
    processNote: "We verify the assembly location, available depth, vapour-control strategy, roof design, and required protective finishes before recommending open-cell foam.",
    related: ["closed-cell-spray-foam", "attic-insulation", "new-construction"],
  },
];

export function getService(slug: string) {
  const service = services.find((item) => item.slug === slug);
  if (!service) throw new Error(`Unknown service: ${slug}`);
  return service;
}
