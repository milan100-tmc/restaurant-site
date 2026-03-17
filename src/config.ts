// ============================================================================
// Configuration File for Super Fast Food Restaurant Website
// ============================================================================

// Hero Section Configuration
export interface HeroConfig {
  subtitle: string;
  titleLine1: string;
  titleLine2: string;
  tagline: string;
  chocolateText: string;
  ctaText: string;
  heroImage: string;
  leafImages: [string, string];
}

export const heroConfig: HeroConfig = {
  subtitle: "07 44 87 89 82 · 09 56 67 62 69 · 9 Rue François Mitterrand, 63300 Thiers",
  titleLine1: "SUPER",
  titleLine2: "FAST FOOD",
  tagline: "Tacos · Naan · Burgers · Paninis · Gratine",
  chocolateText: "Livraison à domicile dès 40€",
  ctaText: "Voir le Menu",
  heroImage: "images/kebab_naan.jpg",
  leafImages: ["images/leaf_1.png", "images/leaf_2.png"],
};

// Story Section Configuration
export interface StoryStatConfig {
  value: string;
  label: string;
}

export interface StoryConfig {
  label: string;
  heading: string[];
  headingAccent: string;
  paragraphs: string[];
  stats: StoryStatConfig[];
  storyImage: string;
}

export const storyConfig: StoryConfig = {
  label: "Notre Histoire",
  heading: ["La saveur authentique"],
  headingAccent: "au cœur de Thiers",
  paragraphs: [
    "Super Fast Food vous propose une expérience culinaire unique avec nos spécialités de tacos, naan, burgers et gratine. Tous nos plats sont préparés avec des ingrédients frais et de qualité.",
    "Situé au 9 Rue François Mitterrand à Thiers, nous vous accueillons tous les jours pour déguster nos délicieuses créations. Notre équipe passionnée met tout son savoir-faire pour vous offrir le meilleur du fast food.",
    "Que vous préfériez manger sur place, à emporter ou vous faire livrer, nous sommes là pour satisfaire vos envies gourmandes !"
  ],
  stats: [
    { value: "4.7", label: "Note Google" },
    { value: "32+", label: "Avis clients" },
    { value: "Tous", label: "Jours ouverts" },
  ],
  storyImage: "images/sandwich.jpg",
};

// Product Section Configuration - Featured Menu Items
export interface ProductConfig {
  label: string;
  heading: string[];
  headingAccent: string;
  productTitle: string;
  description: string;
  features: string[];
  price: string;
  priceLabel: string;
  specs: string;
  specsLabel: string;
  ctaPrimary: string;
  ctaSecondary: string;
  productImage: string;
}

export const productConfig: ProductConfig = {
  label: "Nos Spécialités",
  heading: ["Découvrez"],
  headingAccent: "nos best-sellers",
  productTitle: "Naan Kebab",
  description: "Notre naan kebab est préparé avec du pain naan moelleux, de la viande kebab savoureuse, de la salade fraîche, des tomates, des oignons et du cheddar fondant. Un régal pour les papilles !",
  features: [
    "Pain naan frais",
    "Viande kebab de qualité",
    "Légumes frais du jour",
    "Fromage cheddar fondant",
    "Sauces au choix",
    "Préparé à la commande"
  ],
  price: "€8,50",
  priceLabel: "Prix",
  specs: "Menu complet",
  specsLabel: "Formule",
  ctaPrimary: "",
  ctaSecondary: "Voir le menu",
  productImage: "images/kebab_naan.jpg",
};

// Explore Section Configuration - Menu Categories
export interface HotspotConfig {
  id: string;
  x: number;
  y: number;
  title: string;
  description: string;
  iconType: "bird" | "pawprint" | "treepine" | "flower";
  image: string;
}

export interface ExploreConfig {
  label: string;
  heading: string[];
  headingAccent: string;
  description: string;
  hint: string;
  exploreImage: string;
  hotspots: HotspotConfig[];
}

export const exploreConfig: ExploreConfig = {
  label: "Notre Menu Complet",
  heading: ["Explorez"],
  headingAccent: "nos catégories",
  description: "Découvrez toutes nos spécialités : tacos, naan, burgers, paninis, gratine et bien plus encore. Cliquez sur les catégories pour explorer !",
  hint: "Cliquez pour découvrir",
  exploreImage: "images/french_tacos.jpg",
  hotspots: [
    {
      id: "naan",
      x: 15,
      y: 25,
      title: "Naan",
      description: "Naan Kebab – €8,50 | Naan Poulet Tandoori/Curry – €8,50 | Naan Américain – €9,50 | Naan Steak Tenders – €9,50 | Naan Steak – €8,00 | Naan Tenders – €8,00 | Crysty Naan Burger – €10,50 | Naan Burger – €10,50",
      iconType: "flower",
      image: "images/kebab_naan.jpg"
    },
    {
      id: "sandwich",
      x: 35,
      y: 20,
      title: "Sandwich",
      description: "Sandwich Kebab – €7,50 | Sandwich Tandoori – €7,50 | Sandwich Curry – €7,50 | Sandwich Tenders – €7,50 | Sandwich Steak + Tenders – €9,50 | Sandwich Américain – €9,50",
      iconType: "pawprint",
      image: "images/sandwich.jpg"
    },
    {
      id: "tacos",
      x: 55,
      y: 30,
      title: "Tacos",
      description: "Tacos 1 Viande – €7,00 | Tacos 2 Viandes – €8,50 | Tacos 3 Viandes – €10,00",
      iconType: "bird",
      image: "images/tacos.jpg"
    },
    {
      id: "gratine",
      x: 75,
      y: 25,
      title: "Gratine",
      description: "Gratine Simple – €8,00 | Gratine Double – €9,50 | Gratine Triple – €11,50 | Options : Mozzarella, Raclette, Cheddar, Chèvre Miel, Boursin",
      iconType: "treepine",
      image: "images/gratine.jpg"
    },
    {
      id: "burgers",
      x: 25,
      y: 55,
      title: "Burgers",
      description: "Cheese Burger – €7,50 | Double Cheese Burger – €8,50 | Crysty Burger – €8,50 | Burger Américain – €8,50 | Poulet Burger – €8,00",
      iconType: "bird",
      image: "images/burger.jpg"
    },
    {
      id: "paninis",
      x: 50,
      y: 60,
      title: "Paninis",
      description: "Panini 3 Fromages – €6,00 | Panini Nutella – €3,50 | Panini Kebab – €6,50 | Panini Viande Hachée – €7,00 | Panini Poulet Tandoori – €7,00 | Panini Poulet Curry – €7,00",
      iconType: "flower",
      image: "images/panini.jpg"
    },
    {
      id: "autres",
      x: 70,
      y: 55,
      title: "Bols, Assiettes & Plus",
      description: "Bols 1/2/3 Viandes – €8,00/€9,50/€10,50 | Assiettes 1/2/3 Viandes – €8,00/€9,50/€10,50 | Baguette Fourrée 1 Viande – €10,00 | Crousty – €10,00 | Menu Enfant – €6,90 | Frites + Boisson – €3,00",
      iconType: "pawprint",
      image: "images/food_spread.jpg"
    }
  ],
};

// Tasting Section Configuration - Complete Menu Display
export interface TastingCardConfig {
  iconType: "eye" | "wind" | "sparkles";
  title: string;
  description: string;
  notes: string[];
}

export interface FlavorBarConfig {
  label: string;
  value: number;
  color: string;
}

export interface TastingConfig {
  label: string;
  heading: string[];
  headingAccent: string;
  description: string;
  tastingCards: TastingCardConfig[];
  flavorWheel: {
    title: string;
    description: string;
    tags: string[];
    bars: FlavorBarConfig[];
  };
}

export const tastingConfig: TastingConfig = {
  label: "Menu Complet",
  heading: ["Toutes nos"],
  headingAccent: "spécialités",
  description: "Découvrez l'ensemble de notre carte avec les prix exacts. Tous nos plats sont préparés avec des ingrédients frais.",
  tastingCards: [
    {
      iconType: "eye",
      title: "Naan",
      description: "Pain naan garni au choix",
      notes: [
        "Naan Kebab – €8,50",
        "Naan Poulet Tandoori/Curry – €8,50",
        "Naan Américain – €9,50",
        "Naan Steak Tenders – €9,50",
        "Naan Steak – €8,00",
        "Naan Tenders – €8,00",
        "Crysty Naan Burger – €10,50",
        "Naan Burger – €10,50"
      ]
    },
    {
      iconType: "wind",
      title: "Sandwich",
      description: "Sandwichs frais et gourmands",
      notes: [
        "Sandwich Kebab – €7,50",
        "Sandwich Tandoori – €7,50",
        "Sandwich Curry – €7,50",
        "Sandwich Tenders – €7,50",
        "Sandwich Steak + Tenders – €9,50",
        "Sandwich Américain – €9,50"
      ]
    },
    {
      iconType: "sparkles",
      title: "Tacos",
      description: "Tacos français avec viandes au choix",
      notes: [
        "Tacos 1 Viande – €7,00",
        "Tacos 2 Viandes – €8,50",
        "Tacos 3 Viandes – €10,00"
      ]
    },
    {
      iconType: "eye",
      title: "Gratine",
      description: "Frites gratinées avec fromage",
      notes: [
        "Gratine Simple – €8,00",
        "Gratine Double – €9,50",
        "Gratine Triple – €11,50",
        "Options: Mozzarella, Raclette, Cheddar, Chèvre Miel, Boursin"
      ]
    },
    {
      iconType: "wind",
      title: "Burgers",
      description: "Burgers gourmands",
      notes: [
        "Cheese Burger – €7,50",
        "Double Cheese Burger – €8,50",
        "Crysty Burger – €8,50",
        "Burger Américain – €8,50",
        "Poulet Burger – €8,00"
      ]
    },
    {
      iconType: "sparkles",
      title: "Paninis",
      description: "Paninis grillés",
      notes: [
        "Panini 3 Fromages – €6,00",
        "Panini Nutella – €3,50",
        "Panini Kebab – €6,50",
        "Panini Viande Hachée – €7,00",
        "Panini Poulet Tandoori – €7,00",
        "Panini Poulet Curry – €7,00"
      ]
    }
  ],
  flavorWheel: {
    title: "Bols, Assiettes & Formules",
    description: "Complétez votre repas",
    tags: [
      "Bols 1 Viande €8,00",
      "Bols 2 Viandes €9,50",
      "Bols 3 Viandes €10,50",
      "Assiettes 1 Viande €8,00",
      "Assiettes 2 Viandes €9,50",
      "Assiettes 3 Viandes €10,50"
    ],
    bars: [
      { label: "Baguette Fourrée 1 Viande", value: 100, color: "#C9A227" },
      { label: "Crousty", value: 100, color: "#8FBC8F" },
      { label: "Menu Enfant", value: 69, color: "#C9A227" },
      { label: "Frites + Boisson", value: 60, color: "#8FBC8F" },
      { label: "Frite Petite", value: 60, color: "#C9A227" },
      { label: "Frite Grand", value: 90, color: "#8FBC8F" },
    ]
  },
};

// Footer Section Configuration
export interface SocialLinkConfig {
  platform: "instagram" | "facebook" | "twitter";
  href: string;
}

export interface NavLinkConfig {
  label: string;
  href: string;
}

export interface PolicyLinkConfig {
  label: string;
  href: string;
}

export interface FooterConfig {
  brandName: string;
  brandTagline: string;
  brandDescription: string;
  socialLinks: SocialLinkConfig[];
  navSectionTitle: string;
  navLinks: NavLinkConfig[];
  contactSectionTitle: string;
  contactAddress: string;
  contactPhone: string;
  contactEmail: string;
  newsletterTitle: string;
  newsletterDescription: string;
  newsletterPlaceholder: string;
  newsletterButton: string;
  copyright: string;
  policyLinks: PolicyLinkConfig[];
}

export const footerConfig: FooterConfig = {
  brandName: "SUPER FAST FOOD",
  brandTagline: "Le goût authentique à Thiers",
  brandDescription: "Tacos, Sandwichs, Naan, Burgers avec viande, fromage, légumes et gratin au choix. Paninis, Assiettes, Bowls, Frites & Menu Enfants.",
  socialLinks: [
    { platform: "instagram", href: "#" },
    { platform: "facebook", href: "#" },
  ],
  navSectionTitle: "Navigation",
  navLinks: [
    { label: "Accueil", href: "#" },
    { label: "Menu", href: "#" },
    { label: "Contact", href: "#" },
  ],
  contactSectionTitle: "Contact & Horaires",
  contactAddress: "9 Rue François Mitterrand\n63300 Thiers, France",
  contactPhone: "07 44 87 89 82\n09 56 67 62 69",
  contactEmail: "Ouvert tous les jours\nSur place et à emporter\nLivraison à domicile dès 40€",
  newsletterTitle: "",
  newsletterDescription: "",
  newsletterPlaceholder: "",
  newsletterButton: "",
  copyright: "© 2026 Super Fast Food. Tous droits réservés.",
  policyLinks: [
    { label: "Mentions légales", href: "#" },
    { label: "Politique de confidentialité", href: "#" },
  ],
};

// Site Metadata
export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "Super Fast Food - Restaurant à Thiers",
  description: "Super Fast Food à Thiers : Tacos, Naan, Burgers, Paninis, Gratine. Livraison à domicile dès 40€. 9 Rue François Mitterrand, 63300 Thiers. Tél: 07 44 87 89 82 / 09 56 67 62 69",
  language: "fr",
};
