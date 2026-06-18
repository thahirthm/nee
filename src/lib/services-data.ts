import {
  Gem,
  Mountain,
  Grid3x3,
  Layers,
  Sparkles,
  Droplets,
  Wrench,
  Sun,
  Building2,
  LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  i: LucideIcon;
  t: string;
  d: string;
  long: string;
  features: string[];
}

export const SERVICES: Service[] = [
  {
    id: "marble-polishing",
    i: Gem,
    t: "Marble Polishing",
    d: "Mirror-grade polishing that restores natural luster and depth to marble surfaces.",
    long: "Our premium marble polishing service brings out the natural beauty and elegance of marble surfaces. Using specialized techniques and imported equipment, we achieve a mirror-grade finish that enhances any space.",
    features: [
      "Mirror-grade reflective finish",
      "Dust-controlled restoration",
      "Long-lasting protection",
      "Scratch removal",
      "Color enhancement",
    ],
  },
  {
    id: "granite-polishing",
    i: Mountain,
    t: "Granite Polishing",
    d: "Precision grinding and polishing for high-traffic granite floors and counters.",
    long: "Granite is one of the hardest natural stones, requiring specialized expertise. We provide precision grinding and polishing that leaves your granite surfaces gleaming.",
    features: [
      "Precision grinding",
      "Polish to any gloss level",
      "Stain removal",
      "Chip repair",
      "Long-term durability",
    ],
  },
  {
    id: "terrazzo-restoration",
    i: Grid3x3,
    t: "Terrazzo Restoration",
    d: "Specialist restoration techniques that revive vintage and modern terrazzo.",
    long: "Terrazzo floors are prized for their beauty and durability. Our specialist restoration techniques revive terrazzo to its original splendor.",
    features: [
      "Vintage restoration",
      "Color revival",
      "Chip and crack repair",
      "Grout restoration",
      "Protective sealing",
    ],
  },
  {
    id: "concrete-polishing",
    i: Layers,
    t: "Concrete Polishing",
    d: "Diamond-polished concrete for sleek, durable industrial-grade surfaces.",
    long: "Polished concrete offers a modern, industrial-chic aesthetic. Our diamond polishing process creates a seamless, low-maintenance surface.",
    features: [
      "Diamond polish finish",
      "Dust suppression",
      "Stain resistance",
      "Industrial durability",
      "Modern aesthetic",
    ],
  },
  {
    id: "mosaic-restoration",
    i: Sparkles,
    t: "Mosaic Floor Restoration",
    d: "Delicate craftsmanship to preserve intricate mosaic detailing and grout.",
    long: "Mosaic floors require delicate, specialized care. We preserve the intricate details while restoring beauty and functionality.",
    features: [
      "Detail preservation",
      "Grout restoration",
      "Color matching",
      "Crack repair",
      "Protective finish",
    ],
  },
  {
    id: "stone-sealing",
    i: Droplets,
    t: "Stone Sealing",
    d: "Premium impregnators and sealers that protect against stains and moisture.",
    long: "Proper sealing extends the life of natural stone surfaces and provides lasting protection against stains and moisture.",
    features: [
      "Premium impregnators",
      "Stain protection",
      "Moisture resistance",
      "UV protection",
      "Long-lasting formula",
    ],
  },
  {
    id: "floor-restoration",
    i: Wrench,
    t: "Full Floor Restoration",
    d: "Full-cycle restoration: repair, level, polish and protect — handled end to end.",
    long: "Our comprehensive restoration service addresses every aspect of floor rehabilitation, from initial assessment to final protection.",
    features: [
      "Complete assessment",
      "Repair work",
      "Leveling",
      "Polishing",
      "Sealing & protection",
    ],
  },
  {
    id: "surface-enhancement",
    i: Sun,
    t: "Surface Enhancement",
    d: "Crystallisation and densification for enhanced gloss and longevity.",
    long: "Advanced treatment techniques enhance the surface properties of natural stone for improved durability and appearance.",
    features: [
      "Crystallization",
      "Densification",
      "Enhanced gloss",
      "Improved durability",
      "Long-term protection",
    ],
  },
  {
    id: "maintenance-programs",
    i: Building2,
    t: "Commercial Maintenance",
    d: "Scheduled maintenance programs for hotels, malls and corporate campuses.",
    long: "Keep your commercial floors looking pristine with our customized maintenance programs designed for high-traffic properties.",
    features: [
      "Scheduled maintenance",
      "Preventive care",
      "Emergency response",
      "Customized programs",
      "Professional staff",
    ],
  },
];
