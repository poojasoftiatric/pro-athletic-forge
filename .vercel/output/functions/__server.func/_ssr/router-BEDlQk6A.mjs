import { K as require_jsx_runtime, _ as createFileRoute, b as useRouter, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, v as createRootRoute, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BEDlQk6A.js
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-C9dSchvP.css";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$9 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				name: "author",
				content: "Pro Athletic"
			},
			{
				name: "theme-color",
				content: "#0a0a0a"
			},
			{
				property: "og:site_name",
				content: "Pro Athletic"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:locale",
				content: "en_IN"
			},
			{
				name: "geo.region",
				content: "IN-PB"
			},
			{
				name: "geo.placename",
				content: "Zirakpur, Punjab, India"
			},
			{
				name: "geo.position",
				content: "30.6435;76.8177"
			},
			{
				name: "ICBM",
				content: "30.6435, 76.8177"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@proathletic"
			},
			{
				name: "format-detection",
				content: "telephone=no"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preload",
				href: "/fonts/bebas-neue-regular.woff2",
				as: "font",
				type: "font/woff2",
				crossOrigin: "anonymous"
			},
			{
				rel: "preload",
				href: "/fonts/poppins-400.woff2",
				as: "font",
				type: "font/woff2",
				crossOrigin: "anonymous"
			},
			{
				rel: "preload",
				href: "/fonts/poppins-600.woff2",
				as: "font",
				type: "font/woff2",
				crossOrigin: "anonymous"
			},
			{
				rel: "manifest",
				href: "/site.webmanifest"
			},
			{
				rel: "icon",
				href: "/favicon.png?v=2",
				type: "image/png"
			},
			{
				rel: "icon",
				href: "/favicon.ico?v=2",
				type: "image/x-icon"
			},
			{
				rel: "apple-touch-icon",
				href: "/favicon.png?v=2"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en-IN",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
}
var SITE_URL = "https://www.proathleticgyms.in";
var gymSchema = {
	"@context": "https://schema.org",
	"@type": "ExerciseGym",
	"@id": `${SITE_URL}/#gym`,
	name: "Pro Athletic",
	alternateName: "Pro Athletic Gyms Zirakpur",
	description: "Punjab's premier athletic gym and performance center in Zirakpur. 7+ certified coaches, 18-hour access, CrossFit, Strength Training, Yoga, Bodybuilding and premium amenities.",
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
		addressCountry: "IN"
	},
	geo: {
		"@type": "GeoCoordinates",
		latitude: 30.6435,
		longitude: 76.8177
	},
	hasMap: `${SITE_URL}/contact`,
	openingHoursSpecification: [{
		"@type": "OpeningHoursSpecification",
		dayOfWeek: [
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
			"Sunday"
		],
		opens: "06:00",
		closes: "23:00"
	}],
	sameAs: ["https://www.instagram.com/pro_athletic_gyms/", "https://www.facebook.com/proathleticgymsviproadzirakpur/"],
	aggregateRating: {
		"@type": "AggregateRating",
		ratingValue: "5",
		reviewCount: "80",
		bestRating: "5",
		worstRating: "1"
	}
};
var faqSchema = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: [
		{
			"@type": "Question",
			name: "What are Pro Athletic's gym operating hours?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "Pro Athletic is staffed from 6 AM to 11 PM, 7 days a week. Members with 24/7 access plans can use the facility at any hour."
			}
		},
		{
			"@type": "Question",
			name: "Where is Pro Athletic gym located?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "Pro Athletic is located at Hollywood Plaza, SCO 9-10, VIP Road, Zirakpur, Punjab 140603."
			}
		},
		{
			"@type": "Question",
			name: "How much does a gym membership at Pro Athletic cost?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "Memberships start at ₹5,000 for 3 months (Starter), ₹7,500 for 6 months (Premium), and ₹10,000 for 12 months (Elite). All plans include a free onboarding session."
			}
		},
		{
			"@type": "Question",
			name: "Does Pro Athletic offer personal training?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "Yes! Pro Athletic has 7+ certified personal trainers specializing in Strength, CrossFit, Yoga, Bodybuilding, and Weight Loss. Personal training is included in Premium and Elite membership plans."
			}
		},
		{
			"@type": "Question",
			name: "Can I try the gym before joining?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "Absolutely! Pro Athletic offers a completely free trial session. Book through the contact form on the website or call +91-98200-44120."
			}
		}
	]
};
function createBreadcrumbSchema(items) {
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: items.map((item, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: item.name,
			item: item.url
		}))
	};
}
var aboutSchema = {
	"@context": "https://schema.org",
	"@type": "AboutPage",
	name: "About Pro Athletic",
	description: "Learn about Pro Athletic in Zirakpur — Punjab's premier performance fitness gym with 7+ certified trainers and 18-hour access.",
	url: `${SITE_URL}/about`,
	mainEntity: { "@id": `${SITE_URL}/#gym` }
};
var programsSchema = {
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
			provider: { "@id": `${SITE_URL}/#gym` }
		},
		{
			"@type": "Service",
			position: 2,
			name: "Weight Loss",
			description: "Targeted conditioning and nutrition protocols to shed fat fast.",
			provider: { "@id": `${SITE_URL}/#gym` }
		},
		{
			"@type": "Service",
			position: 3,
			name: "Functional Fitness",
			description: "Sled, battle rope, kettlebell, and real-world athletic movement patterns.",
			provider: { "@id": `${SITE_URL}/#gym` }
		},
		{
			"@type": "Service",
			position: 4,
			name: "CrossFit",
			description: "High-intensity WODs coached in small supportive groups.",
			provider: { "@id": `${SITE_URL}/#gym` }
		},
		{
			"@type": "Service",
			position: 5,
			name: "Bodybuilding",
			description: "Hypertrophy programming for stage-ready aesthetics and muscle definition.",
			provider: { "@id": `${SITE_URL}/#gym` }
		},
		{
			"@type": "Service",
			position: 6,
			name: "Cardio",
			description: "Zone-based cardiovascular endurance on premium machines.",
			provider: { "@id": `${SITE_URL}/#gym` }
		},
		{
			"@type": "Service",
			position: 7,
			name: "HIIT",
			description: "High intensity interval training blocks designed to burn maximum calories.",
			provider: { "@id": `${SITE_URL}/#gym` }
		},
		{
			"@type": "Service",
			position: 8,
			name: "Yoga & Flexibility",
			description: "Mobility, mindful breathing, and recovery flows.",
			provider: { "@id": `${SITE_URL}/#gym` }
		},
		{
			"@type": "Service",
			position: 9,
			name: "Powerlifting",
			description: "Squat, bench press, and deadlift technique and competition prep.",
			provider: { "@id": `${SITE_URL}/#gym` }
		}
	]
};
var membershipSchema = {
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
			description: "3 Months access with full floor access, free onboarding, locker and shower facilities.",
			availability: "https://schema.org/InStock",
			seller: { "@id": `${SITE_URL}/#gym` }
		},
		{
			"@type": "Offer",
			name: "Premium Membership",
			price: "7500",
			priceCurrency: "INR",
			description: "6 Months access including personal trainer consultation, group classes, and nutrition blueprint.",
			availability: "https://schema.org/InStock",
			seller: { "@id": `${SITE_URL}/#gym` }
		},
		{
			"@type": "Offer",
			name: "Elite Membership",
			price: "10000",
			priceCurrency: "INR",
			description: "12 Months VIP access including 1-on-1 personal coaching, priority booking, and guest passes.",
			availability: "https://schema.org/InStock",
			seller: { "@id": `${SITE_URL}/#gym` }
		}
	]
};
var trainersSchema = {
	"@context": "https://schema.org",
	"@type": "ItemList",
	name: "Pro Athletic Certified Trainers",
	url: `${SITE_URL}/trainers`,
	itemListElement: [
		{
			"@type": "Person",
			name: "Bhupesh",
			jobTitle: "Branch Manager & Fitness Consultant",
			worksFor: { "@id": `${SITE_URL}/#gym` }
		},
		{
			"@type": "Person",
			name: "Kishan",
			jobTitle: "Senior Fitness & Strength Coach",
			worksFor: { "@id": `${SITE_URL}/#gym` }
		},
		{
			"@type": "Person",
			name: "Yogesh",
			jobTitle: "Personal Trainer & Strength Specialist",
			worksFor: { "@id": `${SITE_URL}/#gym` }
		},
		{
			"@type": "Person",
			name: "Ankush",
			jobTitle: "Functional Trainer & Fat Loss Coach",
			worksFor: { "@id": `${SITE_URL}/#gym` }
		},
		{
			"@type": "Person",
			name: "Rohit",
			jobTitle: "Bodybuilding & Muscle Building Specialist",
			worksFor: { "@id": `${SITE_URL}/#gym` }
		},
		{
			"@type": "Person",
			name: "Manpreet",
			jobTitle: "Yoga & Aerobics Dance Instructor",
			worksFor: { "@id": `${SITE_URL}/#gym` }
		},
		{
			"@type": "Person",
			name: "Vasu",
			jobTitle: "Endurance & Conditioning Trainer",
			worksFor: { "@id": `${SITE_URL}/#gym` }
		}
	]
};
var contactSchema = {
	"@context": "https://schema.org",
	"@type": "ContactPage",
	name: "Contact Pro Athletic Gym",
	url: `${SITE_URL}/contact`,
	mainEntity: { "@id": `${SITE_URL}/#gym` }
};
var $$splitComponentImporter$8 = () => import("./routes-0cVQ59V4.mjs");
var title$8 = "Pro Athletic | Best Gym in Zirakpur — VIP Road Fitness Center";
var description$8 = "Join Pro Athletic, Punjab's premier gym in Zirakpur on VIP Road. 7+ certified trainers, 18-hr access, CrossFit, Strength Training & Yoga. Book your free trial!";
var Route$8 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: title$8 },
			{
				name: "description",
				content: description$8
			},
			{
				name: "keywords",
				content: "gym in zirakpur, best gym zirakpur, fitness center zirakpur, personal trainer zirakpur, gym near VIP road, strength training zirakpur, crossfit zirakpur, yoga zirakpur, 24 hour gym punjab, pro athletic gym"
			},
			{
				property: "og:title",
				content: title$8
			},
			{
				property: "og:description",
				content: description$8
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: `${SITE_URL}/`
			},
			{
				property: "og:image",
				content: `${SITE_URL}/og-image.jpg`
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				property: "og:image:alt",
				content: "Pro Athletic — Premium Gym in Zirakpur, Punjab"
			},
			{
				property: "og:locale",
				content: "en_IN"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: title$8
			},
			{
				name: "twitter:description",
				content: description$8
			},
			{
				name: "twitter:image",
				content: `${SITE_URL}/og-image.jpg`
			},
			{
				name: "twitter:image:alt",
				content: "Pro Athletic — Premium Gym in Zirakpur, Punjab"
			},
			{
				name: "robots",
				content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			}
		],
		links: [{
			rel: "canonical",
			href: `${SITE_URL}/`
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(gymSchema)
		}, {
			type: "application/ld+json",
			children: JSON.stringify(faqSchema)
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./about-DjbzHILv.mjs");
var title$7 = "About Us | Pro Athletic Gym in Zirakpur, Punjab";
var description$7 = "Discover Pro Athletic in Zirakpur. Explore our 18-hour facility, Olympic equipment, certified personal trainers, and performance fitness community on VIP Road.";
var breadcrumb$6 = createBreadcrumbSchema([{
	name: "Home",
	url: `${SITE_URL}/`
}, {
	name: "About Us",
	url: `${SITE_URL}/about`
}]);
var Route$7 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: title$7 },
			{
				name: "description",
				content: description$7
			},
			{
				name: "keywords",
				content: "about pro athletic, gym in zirakpur, best fitness center zirakpur, gym trainers zirakpur, fitness facility VIP road"
			},
			{
				property: "og:title",
				content: title$7
			},
			{
				property: "og:description",
				content: description$7
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: `${SITE_URL}/about`
			},
			{
				property: "og:image",
				content: `${SITE_URL}/og-image.jpg`
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				property: "og:image:alt",
				content: "About Pro Athletic Gym in Zirakpur"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: title$7
			},
			{
				name: "twitter:description",
				content: description$7
			},
			{
				name: "twitter:image",
				content: `${SITE_URL}/og-image.jpg`
			},
			{
				name: "robots",
				content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			}
		],
		links: [{
			rel: "canonical",
			href: `${SITE_URL}/about`
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(aboutSchema)
		}, {
			type: "application/ld+json",
			children: JSON.stringify(breadcrumb$6)
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./contact-C0c_YVXf.mjs");
var title$6 = "Contact & Book Free Trial Pass | Pro Athletic Gym Zirakpur";
var description$6 = "Contact Pro Athletic Gym at Hollywood Plaza, VIP Road, Zirakpur. Call +91-98200-44120 or book your 100% free workout session online today!";
var breadcrumb$5 = createBreadcrumbSchema([{
	name: "Home",
	url: `${SITE_URL}/`
}, {
	name: "Contact",
	url: `${SITE_URL}/contact`
}]);
var Route$6 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: title$6 },
			{
				name: "description",
				content: description$6
			},
			{
				name: "keywords",
				content: "contact pro athletic, gym free trial zirakpur, gym address VIP road zirakpur, gym phone number zirakpur"
			},
			{
				property: "og:title",
				content: title$6
			},
			{
				property: "og:description",
				content: description$6
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: `${SITE_URL}/contact`
			},
			{
				property: "og:image",
				content: `${SITE_URL}/og-image.jpg`
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				property: "og:image:alt",
				content: "Contact Pro Athletic Gym in Zirakpur"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: title$6
			},
			{
				name: "twitter:description",
				content: description$6
			},
			{
				name: "twitter:image",
				content: `${SITE_URL}/og-image.jpg`
			},
			{
				name: "robots",
				content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			}
		],
		links: [{
			rel: "canonical",
			href: `${SITE_URL}/contact`
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(contactSchema)
		}, {
			type: "application/ld+json",
			children: JSON.stringify(breadcrumb$5)
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./gallery-BdjhqI6m.mjs");
var title$5 = "Gym Photos & Facilities Tour | Pro Athletic Zirakpur";
var description$5 = "Take a virtual photo tour of Pro Athletic Gym in Zirakpur. View our Olympic weightlifting stations, cardio theater, CrossFit turf, and luxury recovery zones.";
var breadcrumb$4 = createBreadcrumbSchema([{
	name: "Home",
	url: `${SITE_URL}/`
}, {
	name: "Gallery",
	url: `${SITE_URL}/gallery`
}]);
var gallerySchema = {
	"@context": "https://schema.org",
	"@type": "ImageGallery",
	name: "Pro Athletic Gym Facilities Gallery",
	description: "Photo gallery showcasing workout zones, equipment, locker rooms, and athletic performance facilities at Pro Athletic Zirakpur.",
	url: `${SITE_URL}/gallery`
};
var Route$5 = createFileRoute("/gallery")({
	head: () => ({
		meta: [
			{ title: title$5 },
			{
				name: "description",
				content: description$5
			},
			{
				name: "keywords",
				content: "pro athletic gym photos, gym interior zirakpur, workout equipment zirakpur, fitness center images Punjab"
			},
			{
				property: "og:title",
				content: title$5
			},
			{
				property: "og:description",
				content: description$5
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: `${SITE_URL}/gallery`
			},
			{
				property: "og:image",
				content: `${SITE_URL}/og-image.jpg`
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				property: "og:image:alt",
				content: "Pro Athletic Gym Gallery"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: title$5
			},
			{
				name: "twitter:description",
				content: description$5
			},
			{
				name: "twitter:image",
				content: `${SITE_URL}/og-image.jpg`
			},
			{
				name: "robots",
				content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			}
		],
		links: [{
			rel: "canonical",
			href: `${SITE_URL}/gallery`
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(gallerySchema)
		}, {
			type: "application/ld+json",
			children: JSON.stringify(breadcrumb$4)
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./home-DawCQVMX.mjs");
var title$4 = "Pro Athletic | Best Gym in Zirakpur — VIP Road Fitness Center";
var description$4 = "Join Pro Athletic, Punjab's premier gym in Zirakpur on VIP Road. 7+ certified trainers, 18-hr access, CrossFit, Strength Training & Yoga. Book your free trial!";
var Route$4 = createFileRoute("/home")({
	head: () => ({
		meta: [
			{ title: title$4 },
			{
				name: "description",
				content: description$4
			},
			{
				name: "keywords",
				content: "gym in zirakpur, best gym zirakpur, fitness center zirakpur, personal trainer zirakpur, gym near VIP road, strength training zirakpur, crossfit zirakpur, yoga zirakpur, 24 hour gym punjab, pro athletic gym"
			},
			{
				property: "og:title",
				content: title$4
			},
			{
				property: "og:description",
				content: description$4
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: `${SITE_URL}/`
			},
			{
				property: "og:image",
				content: `${SITE_URL}/og-image.jpg`
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				property: "og:image:alt",
				content: "Pro Athletic — Premium Gym in Zirakpur, Punjab"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: title$4
			},
			{
				name: "twitter:description",
				content: description$4
			},
			{
				name: "twitter:image",
				content: `${SITE_URL}/og-image.jpg`
			},
			{
				name: "robots",
				content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			}
		],
		links: [{
			rel: "canonical",
			href: `${SITE_URL}/`
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(gymSchema)
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./membership-jiy1KcY2.mjs");
var title$3 = "Gym Membership & Pricing | Pro Athletic Gyms Zirakpur";
var description$3 = "Transparent gym membership plans in Zirakpur starting at ₹5,000. Includes 18-hour access, certified coaches, sauna & steam bath. Claim your free trial session!";
var breadcrumb$3 = createBreadcrumbSchema([{
	name: "Home",
	url: `${SITE_URL}/`
}, {
	name: "Membership",
	url: `${SITE_URL}/membership`
}]);
var Route$3 = createFileRoute("/membership")({
	head: () => ({
		meta: [
			{ title: title$3 },
			{
				name: "description",
				content: description$3
			},
			{
				name: "keywords",
				content: "gym membership zirakpur, gym fees zirakpur, pro athletic pricing, affordable luxury gym zirakpur, gym subscription VIP road"
			},
			{
				property: "og:title",
				content: title$3
			},
			{
				property: "og:description",
				content: description$3
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: `${SITE_URL}/membership`
			},
			{
				property: "og:image",
				content: `${SITE_URL}/og-image.jpg`
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				property: "og:image:alt",
				content: "Pro Athletic Membership Plans and Pricing"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: title$3
			},
			{
				name: "twitter:description",
				content: description$3
			},
			{
				name: "twitter:image",
				content: `${SITE_URL}/og-image.jpg`
			},
			{
				name: "robots",
				content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			}
		],
		links: [{
			rel: "canonical",
			href: `${SITE_URL}/membership`
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(membershipSchema)
		}, {
			type: "application/ld+json",
			children: JSON.stringify(breadcrumb$3)
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./programs-BD1Il6Qt.mjs");
var title$2 = "Training Programs & Classes | Pro Athletic Gym Zirakpur";
var description$2 = "Explore 9 expert-coached fitness programs at Pro Athletic Zirakpur: Strength Training, CrossFit, Weight Loss, Bodybuilding, Yoga & HIIT. Start training today!";
var breadcrumb$2 = createBreadcrumbSchema([{
	name: "Home",
	url: `${SITE_URL}/`
}, {
	name: "Programs",
	url: `${SITE_URL}/programs`
}]);
var Route$2 = createFileRoute("/programs")({
	head: () => ({
		meta: [
			{ title: title$2 },
			{
				name: "description",
				content: description$2
			},
			{
				name: "keywords",
				content: "crossfit zirakpur, strength training punjab, bodybuilding gym zirakpur, yoga classes zirakpur, weight loss training zirakpur"
			},
			{
				property: "og:title",
				content: title$2
			},
			{
				property: "og:description",
				content: description$2
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: `${SITE_URL}/programs`
			},
			{
				property: "og:image",
				content: `${SITE_URL}/og-image.jpg`
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				property: "og:image:alt",
				content: "Pro Athletic Training Programs"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: title$2
			},
			{
				name: "twitter:description",
				content: description$2
			},
			{
				name: "twitter:image",
				content: `${SITE_URL}/og-image.jpg`
			},
			{
				name: "robots",
				content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			}
		],
		links: [{
			rel: "canonical",
			href: `${SITE_URL}/programs`
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(programsSchema)
		}, {
			type: "application/ld+json",
			children: JSON.stringify(breadcrumb$2)
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./testimonials-CaXAJdYD.mjs");
var title$1 = "Member Reviews & Success Stories | Pro Athletic Zirakpur";
var description$1 = "Read real member reviews and body transformation stories from Pro Athletic Gym in Zirakpur. Rated 5/5 stars on Google by 80+ happy fitness athletes.";
var breadcrumb$1 = createBreadcrumbSchema([{
	name: "Home",
	url: `${SITE_URL}/`
}, {
	name: "Testimonials",
	url: `${SITE_URL}/testimonials`
}]);
var reviewsSchema = {
	"@context": "https://schema.org",
	"@type": "ExerciseGym",
	"@id": `${SITE_URL}/#gym`,
	name: "Pro Athletic",
	aggregateRating: gymSchema.aggregateRating
};
var Route$1 = createFileRoute("/testimonials")({
	head: () => ({
		meta: [
			{ title: title$1 },
			{
				name: "description",
				content: description$1
			},
			{
				name: "keywords",
				content: "pro athletic reviews, gym reviews zirakpur, best gym in zirakpur reviews, gym member transformations punjab"
			},
			{
				property: "og:title",
				content: title$1
			},
			{
				property: "og:description",
				content: description$1
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: `${SITE_URL}/testimonials`
			},
			{
				property: "og:image",
				content: `${SITE_URL}/og-image.jpg`
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				property: "og:image:alt",
				content: "Pro Athletic Member Reviews and Testimonials"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: title$1
			},
			{
				name: "twitter:description",
				content: description$1
			},
			{
				name: "twitter:image",
				content: `${SITE_URL}/og-image.jpg`
			},
			{
				name: "robots",
				content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			}
		],
		links: [{
			rel: "canonical",
			href: `${SITE_URL}/testimonials`
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(reviewsSchema)
		}, {
			type: "application/ld+json",
			children: JSON.stringify(breadcrumb$1)
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./trainers-CJiBhtyV.mjs");
var title = "Certified Personal Trainers in Zirakpur | Pro Athletic";
var description = "Meet 7+ certified personal coaches at Pro Athletic Zirakpur with 5-11 years of experience in strength training, bodybuilding, fat loss, yoga, and conditioning.";
var breadcrumb = createBreadcrumbSchema([{
	name: "Home",
	url: `${SITE_URL}/`
}, {
	name: "Trainers",
	url: `${SITE_URL}/trainers`
}]);
var Route = createFileRoute("/trainers")({
	head: () => ({
		meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				name: "keywords",
				content: "personal trainer zirakpur, certified fitness coach zirakpur, gym trainers punjab, body transformation trainer zirakpur"
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: `${SITE_URL}/trainers`
			},
			{
				property: "og:image",
				content: `${SITE_URL}/og-image.jpg`
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				property: "og:image:alt",
				content: "Pro Athletic Certified Fitness Trainers"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: title
			},
			{
				name: "twitter:description",
				content: description
			},
			{
				name: "twitter:image",
				content: `${SITE_URL}/og-image.jpg`
			},
			{
				name: "robots",
				content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			}
		],
		links: [{
			rel: "canonical",
			href: `${SITE_URL}/trainers`
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(trainersSchema)
		}, {
			type: "application/ld+json",
			children: JSON.stringify(breadcrumb)
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$8.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$9
	}),
	AboutRoute: Route$7.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$9
	}),
	ContactRoute: Route$6.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$9
	}),
	GalleryRoute: Route$5.update({
		id: "/gallery",
		path: "/gallery",
		getParentRoute: () => Route$9
	}),
	HomeRoute: Route$4.update({
		id: "/home",
		path: "/home",
		getParentRoute: () => Route$9
	}),
	MembershipRoute: Route$3.update({
		id: "/membership",
		path: "/membership",
		getParentRoute: () => Route$9
	}),
	ProgramsRoute: Route$2.update({
		id: "/programs",
		path: "/programs",
		getParentRoute: () => Route$9
	}),
	TestimonialsRoute: Route$1.update({
		id: "/testimonials",
		path: "/testimonials",
		getParentRoute: () => Route$9
	}),
	TrainersRoute: Route.update({
		id: "/trainers",
		path: "/trainers",
		getParentRoute: () => Route$9
	})
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		scrollRestoration: false,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
