import type { Metadata } from "next";
import { profile } from "../../lib/content";
import About from "../../components/About";

export const metadata: Metadata = {
  title: `About · ${profile.name}`,
  description: profile.intro,
};

export default function AboutPage() {
  return <About />;
}
