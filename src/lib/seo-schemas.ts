export const SITE_URL = "https://www.proathleticgyms.in";

export const gymSchema = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  "@id": `${SITE_URL}/#gym`,
  name: "Pro Athletic",
  alternateName: "Pro Athletic Gyms Zirakpur",
  description:
    "Punjab's premier athletic gym and performance center in Zirakpur. 7+ certified coaches, 18-hour access, CrossFit, Strength Training, Yoga, Bodybuilding and premium amenities.",
  image: `${SITE_URL}/og-image.jpg`,
  logo: `${SITE_URL}/favicon.png`,
  url: SITE_URL,
  telephone: "+91-98200-44120",
  email: "train@proathletic.fit",
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, Credit Card, UPI",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hollywood Plaza, SCO 9-10, VIP Rd",
    addressLocality: "Zirakpur",
    addressRegion: "Punjab",
    postalCode: "140603",
    addressCountry: "IN",
  },
  areaServed: [
    { "@type": "City", name: "Zirakpur" },
    { "@type": "AdministrativeArea", name: "VIP Road Zirakpur" },
    { "@type": "AdministrativeArea", name: "Dhakoli" },
    { "@type": "AdministrativeArea", name: "Baltana" },
    { "@type": "AdministrativeArea", name: "Pabhat" },
    { "@type": "AdministrativeArea", name: "Peer Muchalla" },
    { "@type": "City", name: "Panchkula" },
    { "@type": "City", name: "Mohali" },
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: 30.6435,
    longitude: 76.8177,
  },
  hasMap: `${SITE_URL}/contact`,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "06:00",
      closes: "23:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/pro_athletic_gyms/",
    "https://www.facebook.com/proathleticgymsviproadzirakpur/",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "80",
    bestRating: "5",
    worstRating: "1",
  },
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are Pro Athletic's gym operating hours?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pro Athletic is staffed from 6 AM to 11 PM, 7 days a week. Members with 24/7 access plans can use the facility at any hour.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Pro Athletic gym located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pro Athletic is located at Hollywood Plaza, SCO 9-10, VIP Road, Zirakpur, Punjab 140603.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a gym membership at Pro Athletic cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Memberships start at ₹5,000 for 3 months (Starter), ₹7,500 for 6 months (Premium), and ₹10,000 for 12 months (Elite). All plans include a free onboarding session.",
      },
    },
    {
      "@type": "Question",
      name: "Does Pro Athletic offer personal training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Pro Athletic has 7+ certified personal trainers specializing in Strength, CrossFit, Yoga, Bodybuilding, and Weight Loss. Personal training is included in Premium and Elite membership plans.",
      },
    },
    {
      "@type": "Question",
      name: "Can I try the gym before joining?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! Pro Athletic offers a completely free trial session. Book through the contact form on the website or call +91-98200-44120.",
      },
    },
  ],
};

export function createBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Pro Athletic",
  description:
    "Learn about Pro Athletic in Zirakpur — Punjab's premier performance fitness gym with 7+ certified trainers and 18-hour access.",
  url: `${SITE_URL}/about`,
  mainEntity: {
    "@id": `${SITE_URL}/#gym`,
  },
};

export const programsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Pro Athletic Training Programs",
  description: "Specialized fitness and training programs offered at Pro Athletic Gym in Zirakpur.",
  url: `${SITE_URL}/programs`,
  itemListElement: [
    {
      "@type": "Service",
      position: 1,
      name: "Strength Training",
      description: "Progressive barbell blocks for raw power and athletic strength.",
      provider: { "@id": `${SITE_URL}/#gym` },
    },
    {
      "@type": "Service",
      position: 2,
      name: "Weight Loss",
      description: "Targeted conditioning and nutrition protocols to shed fat fast.",
      provider: { "@id": `${SITE_URL}/#gym` },
    },
    {
      "@type": "Service",
      position: 3,
      name: "Functional Fitness",
      description: "Sled, battle rope, kettlebell, and real-world athletic movement patterns.",
      provider: { "@id": `${SITE_URL}/#gym` },
    },
    {
      "@type": "Service",
      position: 4,
      name: "CrossFit",
      description: "High-intensity WODs coached in small supportive groups.",
      provider: { "@id": `${SITE_URL}/#gym` },
    },
    {
      "@type": "Service",
      position: 5,
      name: "Bodybuilding",
      description: "Hypertrophy programming for stage-ready aesthetics and muscle definition.",
      provider: { "@id": `${SITE_URL}/#gym` },
    },
    {
      "@type": "Service",
      position: 6,
      name: "Cardio",
      description: "Zone-based cardiovascular endurance on premium machines.",
      provider: { "@id": `${SITE_URL}/#gym` },
    },
    {
      "@type": "Service",
      position: 7,
      name: "HIIT",
      description: "High intensity interval training blocks designed to burn maximum calories.",
      provider: { "@id": `${SITE_URL}/#gym` },
    },
    {
      "@type": "Service",
      position: 8,
      name: "Yoga & Flexibility",
      description: "Mobility, mindful breathing, and recovery flows.",
      provider: { "@id": `${SITE_URL}/#gym` },
    },
    {
      "@type": "Service",
      position: 9,
      name: "Powerlifting",
      description: "Squat, bench press, and deadlift technique and competition prep.",
      provider: { "@id": `${SITE_URL}/#gym` },
    },
  ],
};

export const membershipSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Pro Athletic Gym Memberships",
  url: `${SITE_URL}/membership`,
  numberOfItems: 3,
  itemListElement: [
    {
      "@type": "Offer",
      name: "Starter Membership",
      price: "5000",
      priceCurrency: "INR",
      description:
        "3 Months access with full floor access, free onboarding, locker and shower facilities.",
      availability: "https://schema.org/InStock",
      seller: { "@id": `${SITE_URL}/#gym` },
    },
    {
      "@type": "Offer",
      name: "Premium Membership",
      price: "7500",
      priceCurrency: "INR",
      description:
        "6 Months access including personal trainer consultation, group classes, and nutrition blueprint.",
      availability: "https://schema.org/InStock",
      seller: { "@id": `${SITE_URL}/#gym` },
    },
    {
      "@type": "Offer",
      name: "Elite Membership",
      price: "10000",
      priceCurrency: "INR",
      description:
        "12 Months VIP access including 1-on-1 personal coaching, priority booking, and guest passes.",
      availability: "https://schema.org/InStock",
      seller: { "@id": `${SITE_URL}/#gym` },
    },
  ],
};

export const trainersSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Pro Athletic Certified Trainers",
  url: `${SITE_URL}/trainers`,
  itemListElement: [
    {
      "@type": "Person",
      name: "Bhupesh",
      jobTitle: "Branch Manager & Fitness Consultant",
      worksFor: { "@id": `${SITE_URL}/#gym` },
    },
    {
      "@type": "Person",
      name: "Kishan",
      jobTitle: "Senior Fitness & Strength Coach",
      worksFor: { "@id": `${SITE_URL}/#gym` },
    },
    {
      "@type": "Person",
      name: "Yogesh",
      jobTitle: "Personal Trainer & Strength Specialist",
      worksFor: { "@id": `${SITE_URL}/#gym` },
    },
    {
      "@type": "Person",
      name: "Ankush",
      jobTitle: "Functional Trainer & Fat Loss Coach",
      worksFor: { "@id": `${SITE_URL}/#gym` },
    },
    {
      "@type": "Person",
      name: "Rohit",
      jobTitle: "Bodybuilding & Muscle Building Specialist",
      worksFor: { "@id": `${SITE_URL}/#gym` },
    },
    {
      "@type": "Person",
      name: "Manpreet",
      jobTitle: "Yoga & Aerobics Dance Instructor",
      worksFor: { "@id": `${SITE_URL}/#gym` },
    },
    {
      "@type": "Person",
      name: "Vasu",
      jobTitle: "Endurance & Conditioning Trainer",
      worksFor: { "@id": `${SITE_URL}/#gym` },
    },
  ],
};

export const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Pro Athletic Gym",
  url: `${SITE_URL}/contact`,
  mainEntity: {
    "@id": `${SITE_URL}/#gym`,
  },
};
