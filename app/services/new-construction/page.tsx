import type { Metadata } from "next";
import ServicePage from "../ServicePage";
import { getService } from "../service-data";

const service = getService("new-construction");
export const metadata: Metadata = { title: "New Construction Insulation | Belleville Spray Foam", description: service.intro };
export default function Page() { return <ServicePage service={service} />; }
