import type { Metadata } from "next";
import { profile } from "../../lib/content";
import Timeline from "../../components/Timeline";

export const metadata: Metadata = {
  title: `Log · ${profile.name}`,
  description: "Achievements, competition wins and milestones, including back-to-back RowBoatics championships at IIT Bombay.",
};

export default function LogPage() {
  return <Timeline />;
}
