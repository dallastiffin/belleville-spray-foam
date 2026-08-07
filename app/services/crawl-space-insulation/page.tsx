import type { Metadata } from "next";
import ServicePage from "../ServicePage";
import { getService } from "../service-data";

const service = getService("crawl-space-insulation");
export const metadata: Metadata = { title: "Crawl Space Insulation | Belleville Spray Foam", description: service.intro };
export default function Page() { return <ServicePage service={service} />; }
