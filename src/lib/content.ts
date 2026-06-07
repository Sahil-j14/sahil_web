export type MediaItem = {
  type: "video" | "image";
  src: string;
  title: string;
  caption: string;
  poster?: string;
};

export type Project = {
  id: string;
  name: string;
  year: string;
  status: "Active" | "Shipped" | "Prototype";
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  media?: MediaItem;
};

export const profile = {
  name: "Sahil Jambavalikar",
  initials: "SJ",
  role: "Robotics & Mechatronics Engineer",

  headline: "I build robots that move, sense and think.",

  intro:
    "I'm a mechatronics engineer who designs robots end to end, from the mechanism and the printed parts to the firmware that brings them to life. Robotic arms, a humanoid that walks, a hand that grips. If it has motors and a brain, I love building it.",
  location: "Mumbai, Maharashtra, India",

  linkedin: "https://www.linkedin.com/in/sahil-jambavalikar",
  resumeUrl: "/docs/resume.pdf",
  available: true,

  heroVideo: "/media/arm-recaptcha.mp4",

  web3formsKey: "38d689ef-1891-4af8-a53b-4f1f3b6cb3eb",
};

export const stats = [
  { value: "6", label: "DOF Robotic Arm", sub: "with motion recording" },
  { value: "2x", label: "IIT Bombay Champion", sub: "RowBoatics '24 & '25" },
  { value: "4+", label: "Robots Built", sub: "arm, hand, biped, IoT" },
  { value: "100%", label: "Built In House", sub: "design, print, code" },
];

export const projects: Project[] = [
  {
    id: "robotic-arm",
    name: "6-DOF Wireless Robotic Arm",
    year: "2025",
    status: "Active",
    tagline: "A 6-axis arm you can teach, then watch repeat itself",
    description:
      "A six-axis robotic arm I designed and built from scratch. It has a motion sequencer that records a path you guide it through, then plays it back on its own. The control panel runs straight off the microcontroller, so you can drive the arm in real time from any browser on the network.",
    highlights: [
      "Records and replays complex motion paths on its own",
      "Live control panel served right from the board, over WebSockets",
      "Next up: glove-style gesture control over ESP-NOW for near-instant response",
    ],
    stack: ["Embedded C++", "WebSockets", "ESP32", "ESP-NOW", "Fusion 360", "3D Printed"],
    media: {
      type: "video",
      src: "/media/arm-recaptcha.mp4",
      title: "Proving it is not a robot",
      caption: "The arm picks up a pen and ticks the 'I'm not a robot' box. Yes, really.",
    },
  },
  {
    id: "robotic-hand",
    name: "Tendon-Driven Robotic Hand",
    year: "2025",
    status: "Prototype",
    tagline: "A five-finger hand with the muscles tucked in the forearm",
    description:
      "A robotic hand and forearm where every finger is pulled by tendons, just like a real hand. The servos and electronics all live inside the forearm and route through a cable bundle up to the joints, which keeps the fingers light and fast. It is my deep dive into how human hands actually work.",
    highlights: [
      "Five articulated fingers driven by tendon cables",
      "Servos and wiring packed cleanly into the forearm",
      "Designed and printed part by part for easy repairs",
    ],
    stack: ["Servo Control", "Mechanism Design", "Fusion 360", "3D Printed"],
    media: {
      type: "video",
      src: "/media/robotic-hand.mp4",
      title: "Hand flexing through finger poses",
      caption: "Each finger curls and opens on its own set of tendons.",
    },
  },
  {
    id: "bipedal-robot",
    name: "Interactive Bipedal Robot",
    year: "2025",
    status: "Prototype",
    tagline: "A little biped that walks, dodges and pulls faces",
    description:
      "A two-legged robot that keeps its balance while walking and steers around obstacles in its way. It has a small screen for a face that reacts to touch and to what is happening around it, so it actually feels a bit alive.",
    highlights: [
      "Balances and walks on two legs",
      "Reads its surroundings and avoids obstacles",
      "Expressive face on a TFT screen that responds to touch",
    ],
    stack: ["Servo Kinematics", "Sensor Fusion", "Signal Processing", "3D Printed"],
    media: {
      type: "image",
      src: "/media/biped-eyes.jpg",
      title: "Bipedal robot",
      caption: "The screen face showing its default look.",
    },
  },
  {
    id: "smart-helmet",
    name: "IoT Smart Helmet",
    year: "2023",
    status: "Shipped",
    tagline: "A helmet that calls for help when you can't",
    description:
      "A wearable safety device built into a helmet. It watches for the hard jolt of a crash, and if it senses one, it automatically sends an SOS with your exact location so help can find you fast. Light on power, so it lasts the whole ride.",
    highlights: [
      "Detects high-impact crashes from accelerometer data",
      "Auto-sends an SOS with GPS location over the mobile network",
      "Low-power design built to last a full day of wear",
    ],
    stack: ["IoT", "GPS & GSM", "Low-Power Embedded", "Sensors"],
  },
];

export const skillGroups = [
  {
    label: "Electronics & Firmware",
    items: ["ESP32 / Arduino", "Real-time firmware", "I2C, SPI, UART", "ESP-NOW & MQTT", "Sensor interfacing"],
  },
  {
    label: "Mechanical & Design",
    items: ["CAD modeling", "PCB prototyping", "Design for manufacturing", "3D printing (FDM / SLA)", "Mechanism design"],
  },
  {
    label: "Tools & Languages",
    items: ["Embedded C / C++", "Python", "Fusion 360", "SolidWorks", "KiCad"],
  },
];

export const achievements = [
  { year: "2025", title: "1st Place, RowBoatics at Techfest, IIT Bombay", note: "Won it two years running with a custom high-efficiency boat." },
  { year: "2025", title: "Finalist, VES-IT Hackathon (Innovation Round)", note: "Built an automated coin-sorting machine." },
  { year: "2024", title: "1st Place, RowBoatics at Techfest, IIT Bombay", note: "The first championship title." },
  { year: "2024", title: "Started my own product-design studio", note: "Rapid prototyping and custom mechanical parts for clients." },
  { year: "2023", title: "5th Place, Cosmo-Clench at Techfest, IIT Bombay", note: "A precision pick-and-place robotic system." },
];

export const certifications = [
  "Industrial Training in Robotics & AI, Robo-AI",
  "IBM Professional Skills & IT Fundamentals",
  "Raspberry Pi & Embedded Computing Workshop",
  "Intermediate Robotics, Asier Solutions",
];

export const gallery: MediaItem[] = [
  {
    type: "video",
    src: "/media/arm-recaptcha.mp4",
    title: "Arm vs reCAPTCHA",
    caption: "The 6-DOF arm picks up a pen and ticks 'I'm not a robot'.",
  },
  {
    type: "video",
    src: "/media/robotic-hand.mp4",
    title: "Robotic hand",
    caption: "Tendon-driven fingers running through their poses.",
  },
  {
    type: "image",
    src: "/media/hand-detail.jpg",
    title: "Hand and forearm",
    caption: "All the servos and wiring packed into the forearm.",
  },
  {
    type: "image",
    src: "/media/arm-front.jpg",
    title: "6-DOF arm, front",
    caption: "The arm at rest on the workbench.",
  },
  {
    type: "image",
    src: "/media/arm-angle.jpg",
    title: "6-DOF arm, reaching",
    caption: "Mid-pose, showing off the joints.",
  },
  {
    type: "image",
    src: "/media/biped-eyes.jpg",
    title: "Bipedal robot",
    caption: "The little walking robot with its screen face.",
  },
  {
    type: "video",
    src: "/media/rowboatics-run.mp4",
    title: "RowBoatics winning run",
    caption: "The boat threading the course at Techfest, IIT Bombay.",
  },
  {
    type: "image",
    src: "/media/rowboatics-build.jpg",
    title: "RowBoatics 2025 build",
    caption: "The controller, the boat and the final build for the win.",
  },
  {
    type: "image",
    src: "/media/rowboatics-arena.jpg",
    title: "Race day",
    caption: "Boats lined up in the arena at IIT Bombay.",
  },
  {
    type: "image",
    src: "/media/team.jpg",
    title: "The crew",
    caption: "Team photo after a competition run.",
  },

];

export const languages = ["English", "Hindi", "Marathi"];
