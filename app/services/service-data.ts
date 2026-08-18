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
    intro: "Use attic spray foam insulation to turn a draft-prone roofline into a continuous part of the building envelope.",
    overview: "Attic insulation is one of the strongest opportunities to improve year-round comfort. Spray foam insulation follows the roof deck, reaches irregular framing, and seals small gaps that conventional insulation may leave behind. Our Belleville crew reviews the roof assembly, ventilation, access, and existing insulation before recommending open-cell or closed-cell spray foam. The right spray foam depth creates consistent insulation across slopes, corners, and roofline transitions.",
    benefits: [
      { title: "Continuous insulation", text: "Spray foam expands around rafters, corners, and penetrations, giving attic insulation fewer gaps." },
      { title: "Consistent rooms", text: "Spray foam insulation at the roofline helps upper floors hold steadier temperatures through seasonal swings." },
      { title: "Useful attic space", text: "Roofline spray foam can bring equipment and storage inside a better insulated, air-sealed envelope." },
    ],
    idealFor: ["Sloped roof decks", "Knee walls and bonus rooms", "Attic retrofits", "New roof assemblies"],
    processNote: "We review the roof deck, soffits, vents, wiring, and equipment before defining the spray foam area, insulation depth, and preparation.",
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
    intro: "Create a cleaner thermal boundary with garage spray foam insulation for attached garages, workshops, and detached buildings.",
    overview: "Garage insulation must handle wide bays, rooflines, metal framing, overhead doors, and transitions to living space. Spray foam insulation forms continuous coverage across these details and seals gaps while it insulates. We match the spray foam type and insulation depth to how the garage is used, whether it is heated, and what sits above or beside it. The result is garage insulation designed for the actual building.",
    benefits: [
      { title: "Temperature control", text: "Spray foam insulation reduces rapid heat loss and gain in working and storage areas." },
      { title: "Detailed air sealing", text: "Spray foam seals around framing, penetrations, and wall-to-roof insulation transitions." },
      { title: "Flexible insulation", text: "Spray foam options suit wood framing, metal buildings, shops, and garage additions." },
    ],
    idealFor: ["Attached garages", "Detached workshops", "Garage ceilings", "Metal building rooflines"],
    processNote: "We identify the insulation boundary, protect doors and equipment, then coordinate spray foam and protective-barrier requirements with the finished use.",
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
    intro: "Use basement spray foam insulation to seal foundation walls and rim areas for a more comfortable lower level.",
    overview: "Basement insulation must address concrete walls, rim joists, and penetrations at the top of the foundation. Spray foam insulation conforms to these surfaces and creates a continuous air-control and insulation layer. Before installing spray foam, we identify water entry or foundation concerns that need repair. Once the area is ready, the selected spray foam and insulation depth can reduce drafts and cold interior surfaces.",
    benefits: [
      { title: "Warmer surfaces", text: "Spray foam insulation helps foundation walls feel less cold and improves lower-level comfort." },
      { title: "Sealed rim joists", text: "Targeted spray foam closes a common insulation gap where framing meets the foundation." },
      { title: "Renovation ready", text: "Continuous insulation creates a more consistent enclosure before finishing a basement." },
    ],
    idealFor: ["Foundation walls", "Rim and band joists", "Basement renovations", "Utility and mechanical rooms"],
    processNote: "We check wall condition, access, finishes, moisture, and rim joists before recommending spray foam coverage and insulation preparation.",
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
    intro: "Build a controlled boundary beneath the home with crawl-space spray foam insulation for walls, rims, or subfloors.",
    overview: "Crawl-space insulation directly affects the floors above. Spray foam insulation can reduce drafts, cold surfaces, and humid air movement when it is part of a complete moisture strategy. The right spray foam approach depends on whether the space is vented or enclosed, along with drainage, ground conditions, and equipment. We inspect the entire crawl space before selecting insulation locations, spray foam type, and application depth.",
    benefits: [
      { title: "Warmer floors", text: "Spray foam insulation reduces air movement and temperature transfer beneath living areas." },
      { title: "Detailed sealing", text: "Spray foam reaches irregular foundations, rim joists, and tight insulation transitions." },
      { title: "Moisture planning", text: "Crawl-space insulation is coordinated with drainage, ground-cover, and ventilation strategies." },
    ],
    idealFor: ["Crawlspace perimeter walls", "Rim joists", "Subfloor applications", "Additions over shallow foundations"],
    processNote: "We confirm access, drainage, soil coverage, vents, pipes, and equipment before selecting the spray foam insulation assembly.",
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
    intro: "Coordinate new-construction spray foam insulation with framing and trades before the walls close in.",
    overview: "New construction gives the insulation crew access to the full building envelope. Spray foam insulation can connect walls, rooflines, rim joists, and penetrations before finishes are installed. We coordinate spray foam timing with the builder so rough-ins are complete, surfaces are ready, and insulation work fits the inspection schedule. Planning each spray foam transition early supports cleaner insulation coverage and reduces avoidable rework.",
    benefits: [
      { title: "Whole-building insulation", text: "Plan spray foam across walls, rooflines, rims, and transitions as one enclosure." },
      { title: "Cleaner installation", text: "Open framing gives spray foam installers direct access and makes insulation easy to inspect." },
      { title: "Trade coordination", text: "Sequence spray foam insulation after rough-ins and before drywall to reduce rework." },
    ],
    idealFor: ["Custom homes", "Home additions", "Shops and outbuildings", "Complex roof and wall assemblies"],
    processNote: "We review plans, insulation targets, inspections, equipment, and scheduling with the builder before spray foam installation.",
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
    intro: "Choose dense closed-cell spray foam insulation for compact assemblies that need strong air and vapour control.",
    overview: "Closed-cell spray foam insulation delivers high thermal resistance in a compact depth and cures to a firm surface. This spray foam is often selected for foundations, rim joists, metal buildings, and compact roof assemblies. Where lower vapour permeance is part of the design, closed-cell insulation can combine thermal, air, and vapour control. We verify that the substrate and assembly suit this spray foam before insulation begins.",
    benefits: [
      { title: "Performance per inch", text: "Closed-cell spray foam provides effective insulation where installation depth is limited." },
      { title: "Firm finish", text: "This spray foam insulation cures into a rigid layer on properly prepared substrates." },
      { title: "Air and vapour control", text: "Closed-cell insulation supports assemblies requiring spray foam air sealing and lower vapour permeance." },
    ],
    idealFor: ["Foundation and rim areas", "Metal buildings", "Compact rooflines", "Garages and workshops"],
    processNote: "We confirm substrate condition, temperature, insulation thickness, adjacent materials, and moisture strategy before applying closed-cell spray foam.",
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
    intro: "Choose light, expanding open-cell spray foam insulation to fill deep cavities in above-grade interior assemblies.",
    overview: "Open-cell spray foam insulation expands significantly during installation, filling wall and roof cavities around irregular details. This spray foam is commonly considered for above-grade insulation where sufficient cavity depth is available. Because open-cell insulation remains vapour permeable, its location and vapour-control strategy must fit the building design. We confirm those details before recommending this spray foam insulation for a Belleville project.",
    benefits: [
      { title: "Cavity filling", text: "Open-cell spray foam expands around corners and framing throughout deep insulation bays." },
      { title: "Sound absorption", text: "The softer spray foam structure can help insulation assemblies reduce sound transfer." },
      { title: "Efficient coverage", text: "Open-cell insulation suits larger above-grade areas where spray foam has adequate depth." },
    ],
    idealFor: ["Above-grade walls", "Roof decks and attics", "Interior sound control", "Deep framed cavities"],
    processNote: "We verify location, insulation depth, vapour control, roof design, and protective finishes before applying open-cell spray foam.",
    related: ["closed-cell-spray-foam", "attic-insulation", "new-construction"],
  },
];

export function getService(slug: string) {
  const service = services.find((item) => item.slug === slug);
  if (!service) throw new Error(`Unknown service: ${slug}`);
  return service;
}
