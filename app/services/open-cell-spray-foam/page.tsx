import type { Metadata } from "next";
import ServicePage from "../ServicePage";
import { getService } from "../service-data";

const service = getService("open-cell-spray-foam");
export const metadata: Metadata = { title: "Open-Cell Spray Foam | Belleville Spray Foam", description: service.intro };
export default function Page() { return <ServicePage service={service} />; }
