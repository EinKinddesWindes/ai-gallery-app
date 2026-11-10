
const BASE = import.meta.env.BASE_URL;

export const projects = [
  {
    id: "adilia",
    title: "Adilia",
    technique: "AQUARELL",
    subtitle: "Traditionelle Aquarellillustration",
    description:
      "Die Illustrationen zu Adilia entstanden mit Aquarellfarben. Die traditionelle Maltechnik ermöglicht weiche Farbübergänge, lebendige Strukturen und eine individuelle Bildsprache.",
    image: `${BASE}images/adilia-01.jpg`,
  },
  {
    id: "knoedel-prinzessin",
    title: "Knödel Prinzessin",
    technique: "DIGITALE ILLUSTRATION",
    subtitle: "Illustration mit dem iPad",
    description:
      "Für Knödel Prinzessin nutzte ich das iPad als digitales Zeichenwerkzeug. Farben, Formen und Bildkompositionen entstanden in einem digitalen Gestaltungsprozess.",
    image: `${BASE}images/knoedel-01.jpg`,
  },
  {
    id: "ein-kind-des-windes",
    title: "Ein Kind des Windes",
    technique: "KI-GESTÜTZTE ILLUSTRATION",
    subtitle: "Bildgestaltung mit künstlicher Intelligenz",
    description:
      "Bei Ein Kind des Windes setzte ich künstliche Intelligenz zur Erstellung der Illustrationen ein. Das Projekt bildet einen Ausgangspunkt für meine Auseinandersetzung mit KI und kreativen Prozessen.",
    image: `${BASE}images/wind-01.jpg`,
  },
];
