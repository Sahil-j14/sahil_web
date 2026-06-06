import type { Metadata } from "next";
import { profile } from "../../lib/content";
import Contact from "../../components/Contact";

export const metadata: Metadata = {
  title: `Contact · ${profile.name}`,
  description: `Get in touch with Sahil Jambavalikar. Email ${profile.email}.`,
};

export default function ContactPage() {
  return <Contact />;
}
