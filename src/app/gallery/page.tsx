import type { Metadata } from "next";
import { profile } from "../../lib/content";
import Gallery from "../../components/Gallery";

export const metadata: Metadata = {
  title: `Gallery · ${profile.name}`,
  description: "Photos and videos of Sahil Jambavalikar's robotics builds.",
};

export default function GalleryPage() {
  return <Gallery />;
}
