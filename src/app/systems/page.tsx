import type { Metadata } from "next";
import { profile } from "../../lib/content";
import Skills from "../../components/Skills";

export const metadata: Metadata = {
  title: `Systems · ${profile.name}`,
  description: "The electronics, mechanical design and tools Sahil Jambavalikar builds robots with.",
};

export default function SystemsPage() {
  return <Skills />;
}
