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

export interface PackageTier {
  name: string;
  icon: string;
  warranty: string;
  features: string[];
}

export interface Service {
  id: string;
  i: LucideIcon;
  t: string;
  d: string;
  long: string;
  features: string[];
  packagesIntro?: string;
  packages?: PackageTier[];
}

export const SERVICES: Service[] = [
  {
    id: "marble-natural-stones",
    i: Gem,
    t: "Marble & Natural Stones",
    d: "Repolishing, honing, grinding, resurfacing, repairs and protective coating.",
    long: "Expert restoration and protective finishing for marble, limestone, travertine and all natural stone surfaces — from essential repolishing to full resurfacing programmes.",
    features: [
      "Repolishing & Honing",
      "Diamond Grinding",
      "Surface Resurfacing",
      "Crack & Chip Repairs",
      "Protective Coating",
    ],
    packagesIntro: "All four tiers include a protective coating finish. Higher tiers add grit progression depth, structural repair and full epoxy support for the most demanding restorations.",
    packages: [
      {
        name: "Copper",
        icon: "🥉",
        warranty: "6-Month Warranty",
        features: ["Repolishing", "Polishing powder finish", "Water-resistant coating"],
      },
      {
        name: "Silver",
        icon: "🥈",
        warranty: "12-Month Warranty",
        features: ["Honing and polishing: 400, 800 and 1500 grit progression", "Polishing powder finish", "Water-resistant coating"],
      },
      {
        name: "Gold",
        icon: "🥇",
        warranty: "12-Month Warranty",
        features: ["Grinding, honing and polishing", "Spot repair", "Water- and oil-resistant coating"],
      },
      {
        name: "Platinum",
        icon: "💎",
        warranty: "36-Month Warranty",
        features: ["Resurfacing, grinding, honing and repair", "Full polishing programme", "Full epoxy support system", "Water- and oil-resistant coating"],
      },
    ],
  },
  {
    id: "new-concrete-polishing",
    i: Layers,
    t: "New Concrete Polishing",
    d: "Cream polish, decorative aggregate exposure, densification and refined polished concrete.",
    long: "From cream-polished residential slabs to fully refined aggregate-exposed floors — NKE's concrete polishing programmes deliver controlled, durable and visually striking results.",
    features: [
      "Cream Polish Finish",
      "Decorative Aggregate Exposure",
      "Surface Densification",
      "Refined Polished Concrete",
      "Long-lasting Durability",
    ],
    packagesIntro: "New concrete polishing transforms freshly laid slabs into polished surfaces with defined aggregate exposure levels. Each tier adds greater metal preparation passes and finish refinement for a progressively richer result. All Silver, Gold and Platinum tiers include densifier treatment and protective coating as standard.",
    packages: [
      {
        name: "Copper",
        icon: "🥉",
        warranty: "6-Month Warranty",
        features: ["Cream polishing", "Densifier and protective treatment"],
      },
      {
        name: "Silver",
        icon: "🥈",
        warranty: "12-Month Warranty",
        features: ["Salt-and-pepper finish", "120 metal preparation", "Polishing sequence", "Densifier and water-resistant coating"],
      },
      {
        name: "Gold",
        icon: "🥇",
        warranty: "12-Month Warranty",
        features: ["Medium exposure finish", "60/120 metal preparation", "Advanced polishing", "Densifier and water- and oil-resistant coating"],
      },
      {
        name: "Platinum",
        icon: "💎",
        warranty: "36-Month Warranty",
        features: ["Fully refined finish", "16/30/60/120 metal preparation", "Advanced polishing", "Densifier and water- and oil-resistant coating"],
      },
    ],
  },
  {
    id: "industrial-concrete-finishing",
    i: Wrench,
    t: "Industrial Concrete Finishing",
    d: "Heavy-duty grinding, polishing, densification and protective systems.",
    long: "Heavy-duty grinding, polishing and protective systems engineered for the demands of manufacturing, logistics, warehouse and commercial industrial environments.",
    features: [
      "Heavy-duty Grinding",
      "Industrial Polishing",
      "Concrete Densification",
      "Protective Systems",
      "Spill & Stain Resistance",
    ],
    packagesIntro: "Designed for high-traffic, heavy-load environments where surface durability and chemical resistance are paramount. Higher tiers deliver progressively finer surface preparation and enhanced protection.",
    packages: [
      {
        name: "Copper",
        icon: "🥉",
        warranty: "6-Month Warranty",
        features: ["50/100 grit preparation", "Densification and burnishing"],
      },
      {
        name: "Silver",
        icon: "🥈",
        warranty: "12-Month Warranty",
        features: ["Salt-and-pepper finish", "120 metal preparation", "Polishing sequence", "Densifier and water-resistant coating"],
      },
      {
        name: "Gold",
        icon: "🥇",
        warranty: "12-Month Warranty",
        features: ["Medium exposure finish", "60/120 metal preparation", "Advanced polishing", "Densifier and water- and oil-resistant coating"],
      },
      {
        name: "Platinum",
        icon: "💎",
        warranty: "36-Month Warranty",
        features: ["Fully refined finish", "16/30/60/120 metal preparation", "Advanced polishing", "Densifier and water- and oil-resistant coating"],
      },
    ],
  },
  {
    id: "industrial-floor-renewal",
    i: Building2,
    t: "Industrial Floor Renewal",
    d: "Spot repair, colour coating, self-levelling screed and restoration for worn floors.",
    long: "We breathe new life into worn and damaged industrial floors through targeted repairs and robust resurfacing systems.",
    features: [
      "Spot Repair & Patching",
      "Colour Coating",
      "Self-levelling Screed",
      "Worn Floor Restoration",
      "Enhanced Safety Profiles",
    ],
    packagesIntro: "For worn, damaged or deteriorated industrial floors requiring repair and restoration before a new surface programme. All tiers include spot repair as a foundation step.",
    packages: [
      {
        name: "Copper",
        icon: "🥉",
        warranty: "6-Month Warranty",
        features: ["Spot repair", "Basic restoration", "Densification and burnishing"],
      },
      {
        name: "Silver",
        icon: "🥈",
        warranty: "12-Month Warranty",
        features: ["Spot repair", "Salt-and-pepper finish", "120 metal preparation", "Polishing sequence", "Densifier and water-resistant coating"],
      },
      {
        name: "Gold",
        icon: "🥇",
        warranty: "12-Month Warranty",
        features: ["Spot repair", "Medium exposure finish", "60/120 metal preparation", "Advanced polishing", "Densifier and water- and oil-resistant coating"],
      },
      {
        name: "Platinum",
        icon: "💎",
        warranty: "36-Month Warranty",
        features: ["Spot repair", "20 mm self-levelling screed", "Colour coating", "Advanced polishing", "Densifier and water- and oil-resistant coating"],
      },
    ],
  },
  {
    id: "tiled-floors",
    i: Grid3x3,
    t: "Tiled Floors (Interior & Exterior)",
    d: "Deep cleaning, grout repair, regrouting, top coating and slip-resistant treatment.",
    long: "Comprehensive floorcare for interior and exterior tiled surfaces across residential, commercial and industrial settings — from deep cleaning through to full regrouting and slip-resistant treatment.",
    features: [
      "Intensive Deep Cleaning",
      "Grout Repair & Regrouting",
      "Top Coating Application",
      "Slip-resistant Treatment",
      "Weather Protection (Exterior)",
    ],
    packagesIntro: "Tiled floor packages scale from essential deep cleaning at Copper level through to full regrouting and safety-rated slip-resistant treatment at Platinum. Each tier builds on the previous, ensuring a progressively more thorough and durable outcome.",
    packages: [
      {
        name: "Copper",
        icon: "🥉",
        warranty: "6-Month Warranty",
        features: ["Deep cleaning of tile and grout surfaces"],
      },
      {
        name: "Silver",
        icon: "🥈",
        warranty: "12-Month Warranty",
        features: ["Deep cleaning and targeted grout repair"],
      },
      {
        name: "Gold",
        icon: "🥇",
        warranty: "12-Month Warranty",
        features: ["Deep cleaning", "Full regrouting", "Top-coat enhancement"],
      },
      {
        name: "Platinum",
        icon: "💎",
        warranty: "36-Month Warranty",
        features: ["Deep cleaning", "Full regrouting", "Slip-resistant treatment"],
      },
    ],
  },
  {
    id: "epoxy-vinyl-floors",
    i: Droplets,
    t: "Epoxy & Vinyl Floors",
    d: "Surface preparation, coating maintenance, buffing, scratch removal and Coval UTC upgrade systems.",
    long: "Specialist surface maintenance, coating and upgrade programmes for epoxy and vinyl floor systems in industrial, pharmaceutical and high-specification commercial environments.",
    features: [
      "Surface Preparation",
      "Coating Maintenance",
      "Buffing & Scratch Removal",
      "Coval UTC Upgrade Systems",
      "Restored Gloss & Durability",
    ],
    packagesIntro: "From essential surface preparation through to Coval UTC abrasion-resistant coating upgrades, NKE's epoxy and vinyl packages keep high-performance floors in peak condition.",
    packages: [
      {
        name: "Copper",
        icon: "🥉",
        warranty: "6-Month Warranty",
        features: ["Surface preparation for application of epoxy and vinyl floor systems"],
      },
      {
        name: "Silver",
        icon: "🥈",
        warranty: "12-Month Warranty",
        features: ["Cleaning of epoxy and vinyl floors to restore surface condition and hygiene standards"],
      },
      {
        name: "Gold",
        icon: "🥇",
        warranty: "12-Month Warranty",
        features: ["Cleaning", "Surface coating application and buffing for a refreshed and protected finish"],
      },
      {
        name: "Platinum",
        icon: "💎",
        warranty: "36-Month Warranty",
        features: ["Scratch removal", "Coval UTC coating with abrasion-resistant burnishable protection"],
      },
    ],
  },
];
