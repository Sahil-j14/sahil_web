import type { Metadata } from "next";
import { profile } from "../../lib/content";
import Projects from "../../components/Projects";

export const metadata: Metadata = {
  title: `Work · ${profile.name}`,
  description: "Robotics projects by Sahil Jambavalikar: a 6-DOF arm, a tendon-driven hand, a bipedal robot and more.",
};

export default function WorkPage() {
  return <Projects />;
}
