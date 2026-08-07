import type { Metadata } from "next";
import ServicePage from "../ServicePage";
import { getService } from "../service-data";

const service = getService("closed-cell-spray-foam");
export const metadata: Metadata = { title: "Closed-Cell Spray Foam | Belleville Spray Foam", description: service.intro };
export default function Page() { return <ServicePage service={service} />; }
