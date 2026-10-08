import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { A as Activity, C as CupSoda, D as Check, E as ChevronLeft, O as Car, S as Droplets, T as ChevronRight, _ as Instagram, a as Twitter, b as ExternalLink, c as Snowflake, d as Phone, f as Menu, g as LockKeyhole, h as Lock, i as Waves, k as ArrowUpRight, l as ShieldCheck, m as Mail, n as X, o as Star, p as MapPin, r as Wifi, s as Sparkles, t as Youtube, u as Salad, v as Flame, w as Clock, x as Dumbbell, y as Facebook } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-ylgzyxfs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Logo_PAG_default = "/assets/Logo_PAG-DxjghSFF.jpeg";
var links = [
	["Home", "#home"],
	["About", "#about"],
	["Programs", "#programs"],
	["Membership", "#membership"],
	["Trainers", "#trainers"],
	["Testimonials", "#testimonials"],
	["Gallery", "#gallery"],
	["Contact", "#contact"]
];
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/95 py-3 shadow-card backdrop-blur-xl" : "bg-transparent py-5"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			"aria-label": "Main",
			className: "mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#home",
					className: "flex items-center gap-2.5 display text-2xl tracking-widest",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: Logo_PAG_default,
						alt: "Pro Athletic Gyms Logo",
						className: "h-9 w-9 shrink-0 rounded-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["PRO", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary",
						children: "ATHLETIC"
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "hidden items-center gap-7 xl:flex",
					children: links.map(([label, href]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href,
						className: "relative text-sm font-medium text-muted-foreground transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:text-foreground hover:after:origin-bottom-left hover:after:scale-x-100",
						children: label
					}) }, label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#membership",
						className: "hidden rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:glow-red hover:brightness-110 sm:inline-flex",
						children: "Join Now"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": open ? "Close menu" : "Open menu",
						"aria-expanded": open,
						onClick: () => setOpen((v) => !v),
						className: "rounded-full border border-glass-border p-2.5 xl:hidden",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 18 })
					})]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 border-t border-glass-border bg-background/98 px-5 py-4 backdrop-blur-xl xl:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-1",
				children: links.map(([label, href]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href,
					onClick: () => setOpen(false),
					className: "block rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground",
					children: label
				}) }, label))
			})
		})]
	});
}
var hero_default = "/assets/hero-BDuIGdk_.jpg";
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var hidden = {
	up: "translate-y-10 opacity-0",
	left: "-translate-x-10 opacity-0",
	right: "translate-x-10 opacity-0",
	scale: "scale-95 opacity-0"
};
function Reveal({ children, direction = "up", delay = 0, className }) {
	const ref = (0, import_react.useRef)(null);
	const [shown, setShown] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver((entries) => {
			if (entries[0]?.isIntersecting) {
				setShown(true);
				io.disconnect();
			}
		}, { threshold: .15 });
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		style: { transitionDelay: `${delay}ms` },
		className: cn("transition-all duration-700 ease-out motion-reduce:transition-none", shown ? "translate-x-0 translate-y-0 scale-100 opacity-100" : hidden[direction], className),
		children
	});
}
function Counter({ to, suffix = "", duration = 1600 }) {
	const ref = (0, import_react.useRef)(null);
	const [value, setValue] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver((entries) => {
			if (!entries[0]?.isIntersecting) return;
			io.disconnect();
			const start = performance.now();
			const tick = (now) => {
				const p = Math.min((now - start) / duration, 1);
				setValue(Math.round(to * (1 - Math.pow(1 - p, 3))));
				if (p < 1) requestAnimationFrame(tick);
			};
			requestAnimationFrame(tick);
		});
		io.observe(el);
		return () => io.disconnect();
	}, [to, duration]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: [value.toLocaleString(), suffix]
	});
}
var stats = [
	{
		value: 4,
		suffix: "+ Years",
		label: "Running Successfully"
	},
	{
		value: 7,
		suffix: "+",
		label: "Certified Trainers"
	},
	{
		value: 18,
		suffix: " hrs",
		label: "Facility Access"
	}
];
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative flex min-h-screen items-center overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: hero_default,
				alt: "Athlete performing a heavy barbell deadlift at Pro Athletic",
				width: 1920,
				height: 1280,
				fetchPriority: "high",
				className: "absolute inset-0 h-full w-full object-cover object-center"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { background: "var(--gradient-hero)" },
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 opacity-70 mix-blend-multiply",
				style: { background: "radial-gradient(70% 60% at 15% 40%, color-mix(in oklab, var(--primary) 45%, transparent), transparent 70%)" },
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto w-full max-w-7xl px-5 pt-32 pb-20 lg:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						direction: "left",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }), "Premium Performance Center"]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						direction: "up",
						delay: 100,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "display mt-6 max-w-4xl text-6xl sm:text-7xl lg:text-8xl xl:text-9xl",
							children: [
								"UNLEASH YOUR",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent",
									children: "STRONGEST SELF"
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						direction: "up",
						delay: 200,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xl text-base text-muted-foreground sm:text-lg",
							children: "Train with elite coaches, world-class equipment, and a community built for champions."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						direction: "up",
						delay: 300,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-9 flex flex-wrap gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								className: "rounded-full px-8 py-4 text-sm font-bold tracking-wide uppercase text-primary-foreground transition-all duration-300 hover:glow-red hover:-translate-y-0.5",
								style: { background: "var(--gradient-red)" },
								children: "Start Today"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#membership",
								className: "rounded-full glass px-8 py-4 text-sm font-bold tracking-wide uppercase transition-all duration-300 hover:-translate-y-0.5 hover:border-primary",
								children: "View Membership"
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						direction: "up",
						delay: 400,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-14 flex flex-wrap items-center gap-x-10 gap-y-6 rounded-3xl glass px-7 py-6 lg:inline-flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-1 text-primary",
								"aria-label": "Rated 5 out of 5",
								children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
									size: 16,
									fill: "currentColor"
								}, i))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-xs text-muted-foreground",
								children: "Rated 5 by members"
							})] }), stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-28",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "display text-4xl text-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
										to: s.value,
										suffix: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-sans text-3xl",
											children: s.suffix
										})
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs tracking-wide text-muted-foreground uppercase",
									children: s.label
								})]
							}, s.label))]
						})
					})
				]
			})
		]
	});
}
function SectionHeading({ eyebrow, title, subtitle, align = "center" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			direction: "up",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-bold tracking-[0.3em] text-primary uppercase",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display mt-3 text-5xl sm:text-6xl",
					children: title
				}),
				subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground",
					children: subtitle
				})
			]
		})
	});
}
var features = [
	{
		icon: Dumbbell,
		title: "Elite Equipment",
		text: "Rogue racks, calibrated plates and performance machines maintained daily."
	},
	{
		icon: ShieldCheck,
		title: "Certified Trainers",
		text: "Coaches with national certifications and competitive athletic backgrounds."
	},
	{
		icon: Salad,
		title: "Nutrition Guidance",
		text: "Macro plans built around your body composition goals and daily routine."
	},
	{
		icon: Flame,
		title: "Personalized Training",
		text: "Programming that adapts every block based on your measured progress."
	}
];
function WhyUs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "relative py-8 lg:py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Why Pro Athletic",
				title: "BUILT FOR CHAMPIONS",
				subtitle: "Everything under one roof so nothing stands between you and your next personal record."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-6 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4",
				children: features.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					direction: "up",
					delay: i * 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group h-full rounded-3xl glass lift p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex h-12 w-12 items-center justify-center rounded-2xl text-primary-foreground",
								style: { background: "var(--gradient-red)" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { size: 22 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 text-lg font-bold tracking-wide uppercase",
								children: f.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2.5 text-sm leading-relaxed text-muted-foreground",
								children: f.text
							})
						]
					})
				}, f.title))
			})]
		})
	});
}
var plans = [
	{
		name: "Starter",
		price: "5000",
		duration: "3 Months",
		cta: "Join Starter",
		features: [
			"Gym Access",
			"Cardio Zone",
			"Locker"
		],
		highlight: false
	},
	{
		name: "Premium",
		price: "7500",
		duration: "6 Months",
		cta: "Become Premium",
		features: [
			"Everything in Starter",
			"Personal Training",
			"Nutrition Plan",
			"Group Classes"
		],
		highlight: true
	},
	{
		name: "Elite",
		price: "10000",
		duration: "12 Months",
		cta: "Go Elite",
		features: [
			"Unlimited Access",
			"Dedicated Coach",
			"Diet Consultation",
			"Body Analysis",
			"VIP Locker"
		],
		highlight: false
	}
];
function Membership() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "membership",
		className: "relative py-8 lg:py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Membership",
				title: "CHOOSE YOUR LEVEL",
				subtitle: "No hidden fees. Cancel anytime. Every plan includes a free onboarding session."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid items-stretch gap-6 lg:mt-10 lg:grid-cols-3",
				children: plans.map((plan, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					direction: "up",
					delay: i * 120,
					className: "h-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: `relative flex h-full flex-col rounded-3xl p-8 lift ${plan.highlight ? "border border-primary/50 bg-card glow-red" : "glass"}`,
						children: [
							plan.highlight && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -top-3 left-8 rounded-full px-4 py-1 text-[11px] font-bold tracking-widest text-primary-foreground uppercase",
								style: { background: "var(--gradient-red)" },
								children: "Most Popular"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-bold tracking-[0.25em] text-muted-foreground uppercase",
								children: plan.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 flex items-baseline gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "display text-6xl",
									children: ["₹", plan.price]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-sm text-muted-foreground",
									children: ["/ ", plan.duration]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-7 flex-1 space-y-3",
								children: plan.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-3 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
											size: 12,
											strokeWidth: 3
										})
									}), f]
								}, f))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								className: `mt-8 block w-full rounded-full py-3.5 text-center text-sm font-bold tracking-wide uppercase transition-all duration-300 hover:-translate-y-0.5 ${plan.highlight ? "text-primary-foreground hover:glow-red" : "border border-glass-border hover:border-primary"}`,
								style: plan.highlight ? { background: "var(--gradient-red)" } : void 0,
								children: plan.cta
							})
						]
					})
				}, plan.name))
			})]
		})
	});
}
var prog_strength_default = "/assets/prog-strength-C-Mp6ly1.jpg";
var prog_cardio_default = "/assets/prog-cardio-CzWs23r0.jpg";
var prog_functional_default = "/assets/prog-functional-BsbNVzUA.jpg";
var prog_crossfit_default = "/assets/prog-crossfit-BKpXFQWx.jpg";
var programs$1 = [
	{
		title: "Strength Training",
		desc: "Progressive barbell blocks for raw power.",
		img: prog_strength_default
	},
	{
		title: "Weight Loss",
		desc: "Conditioning and nutrition to shred fat fast.",
		img: prog_cardio_default
	},
	{
		title: "Functional Fitness",
		desc: "Move better with sled, rope and kettlebell work.",
		img: prog_functional_default
	},
	{
		title: "CrossFit",
		desc: "High-intensity WODs coached in small groups.",
		img: prog_crossfit_default
	},
	{
		title: "Bodybuilding",
		desc: "Hypertrophy programming for stage-ready shape.",
		img: "/assets/prog-bodybuilding-kFPgB8oh.jpg"
	},
	{
		title: "Cardio",
		desc: "Zone-based endurance on premium machines.",
		img: prog_cardio_default
	},
	{
		title: "HIIT",
		desc: "45-minute intervals that torch calories.",
		img: prog_crossfit_default
	},
	{
		title: "Yoga",
		desc: "Mobility, breath and recovery-focused flows.",
		img: "/assets/prog-yoga-HvQ7yFFI.jpg"
	},
	{
		title: "Powerlifting",
		desc: "Squat, bench and deadlift meet preparation.",
		img: prog_strength_default
	}
];
function Programs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "programs",
		className: "relative py-8 lg:py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Programs",
				title: "TRAIN YOUR WAY",
				subtitle: "Nine coached disciplines, one membership. Switch whenever your goals change."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-6 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3",
				children: programs$1.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					direction: "up",
					delay: i % 3 * 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group h-full overflow-hidden rounded-3xl glass lift",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[4/3] overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.img,
								alt: `${p.title} at Pro Athletic`,
								loading: "lazy",
								width: 800,
								height: 600,
								className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-bold tracking-wide uppercase",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: p.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#contact",
									className: "mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-transform duration-300 group-hover:translate-x-1",
									children: ["Learn More ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 16 })]
								})
							]
						})]
					})
				}, p.title))
			})]
		})
	});
}
var trainers = [
	{
		name: "Bhupesh",
		spec: "Branch Manager & Fitness Consultant",
		exp: "11 years",
		img: "/assets/Bhupesh-CAyR2HGb.png"
	},
	{
		name: "Kishan",
		spec: "Fitness Trainer",
		exp: "8 years",
		img: "/assets/Kishan%20Trainer-BivygXfs.jpeg"
	},
	{
		name: "Rohit",
		spec: "Fitness Trainer",
		exp: "5 years",
		img: "/assets/Rohit_trainer-Dmpm622p.png"
	},
	{
		name: "Vasu",
		spec: "Fitness Trainer",
		exp: "9 years",
		img: "/assets/Vasu%20Fitness%20Trainer-BuPvxKLB.png"
	},
	{
		name: "Ankush",
		spec: "Fitness Trainer",
		exp: "7 years",
		img: "/assets/Ankush-DfZc4gub.png"
	},
	{
		name: "Manpreet",
		spec: "Yoga & Dance Instructor",
		exp: "8 years",
		img: "/assets/Manpreet%20Yoga%20_%20Dance-DxLWe4H6.png"
	},
	{
		name: "Yogesh",
		spec: "Relationship Manager",
		exp: "10 years",
		img: "/assets/Yogesh-De95keAc.png"
	}
];
function Trainers() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "trainers",
		className: "relative py-8 lg:py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Trainers",
				title: "COACHED BY THE BEST",
				subtitle: "Every coach on the floor competes, studies and programs at a professional level."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 flex flex-wrap justify-center gap-6 lg:mt-10",
				children: trainers.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					direction: "up",
					delay: i * 100,
					className: "trainer-card-col shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group h-full overflow-hidden rounded-3xl glass lift",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[3/4] overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: t.img,
									alt: `${t.name}, ${t.spec} coach`,
									loading: "lazy",
									width: 700,
									height: 900,
									className: "h-full w-full object-contain object-top transition-transform duration-700 group-hover:scale-110"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-x-0 bottom-0 flex translate-y-4 justify-center gap-3 pb-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100",
									children: [
										Instagram,
										Twitter,
										Youtube
									].map((Icon, n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#trainers",
										"aria-label": `${t.name} social profile`,
										className: "rounded-full glass p-2.5 hover:text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 16 })
									}, n))
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-base font-bold tracking-wide uppercase",
									children: t.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-primary line-clamp-2 min-h-[2.5rem]",
									children: t.spec
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: [t.exp, " experience"]
								})
							]
						})]
					})
				}, t.name))
			})]
		})
	});
}
function statusFor(bmi) {
	if (bmi < 18.5) return {
		label: "Underweight",
		tip: "Focus on strength and a calorie surplus."
	};
	if (bmi < 25) return {
		label: "Healthy",
		tip: "Great base — build performance and muscle."
	};
	if (bmi < 30) return {
		label: "Overweight",
		tip: "Conditioning plus nutrition coaching works."
	};
	return {
		label: "Obese",
		tip: "Start with guided low-impact training."
	};
}
function BmiCalculator() {
	const [height, setHeight] = (0, import_react.useState)("");
	const [weight, setWeight] = (0, import_react.useState)("");
	const [bmi, setBmi] = (0, import_react.useState)(null);
	const gauge = (0, import_react.useMemo)(() => {
		return Math.max(0, Math.min(1, ((bmi ?? 0) - 10) / 30)) * 270;
	}, [bmi]);
	const calculate = () => {
		const h = parseFloat(height) / 100;
		const w = parseFloat(weight);
		if (!h || !w || h <= 0) {
			setBmi(null);
			return;
		}
		setBmi(Math.round(w / (h * h) * 10) / 10);
	};
	const status = bmi ? statusFor(bmi) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-8 lg:py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Know Your Numbers",
				title: "BMI CALCULATOR",
				subtitle: "Get an instant baseline, then let a coach turn it into a plan."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid items-center gap-8 rounded-[2rem] glass p-8 lg:mt-10 lg:grid-cols-2 lg:p-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					direction: "left",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "bmi-height",
								className: "text-xs font-semibold tracking-widest uppercase text-muted-foreground",
								children: "Height (cm)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "bmi-height",
								type: "number",
								inputMode: "decimal",
								value: height,
								onChange: (e) => setHeight(e.target.value),
								placeholder: "eg: 175",
								className: "mt-2 w-full rounded-2xl border border-glass-border bg-secondary/60 px-5 py-3.5 outline-none transition focus:border-primary"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "bmi-weight",
								className: "text-xs font-semibold tracking-widest uppercase text-muted-foreground",
								children: "Weight (kg)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "bmi-weight",
								type: "number",
								inputMode: "decimal",
								value: weight,
								onChange: (e) => setWeight(e.target.value),
								placeholder: "eg: 72",
								className: "mt-2 w-full rounded-2xl border border-glass-border bg-secondary/60 px-5 py-3.5 outline-none transition focus:border-primary"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: calculate,
								className: "w-full rounded-full py-4 text-sm font-bold tracking-wide uppercase text-primary-foreground transition-all duration-300 hover:glow-red hover:-translate-y-0.5",
								style: { background: "var(--gradient-red)" },
								children: "Calculate BMI"
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					direction: "right",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative h-56 w-56",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								viewBox: "0 0 200 200",
								className: "h-full w-full -rotate-[135deg]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "100",
									cy: "100",
									r: "82",
									fill: "none",
									stroke: "oklch(1 0 0 / 10%)",
									strokeWidth: "14",
									strokeLinecap: "round",
									strokeDasharray: `${1.5 * Math.PI * 82} ${2 * Math.PI * 82}`
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "100",
									cy: "100",
									r: "82",
									fill: "none",
									stroke: "var(--primary)",
									strokeWidth: "14",
									strokeLinecap: "round",
									strokeDasharray: `${gauge / 360 * 2 * Math.PI * 82} ${2 * Math.PI * 82}`,
									className: "transition-all duration-1000 ease-out"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-0 flex flex-col items-center justify-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "display text-6xl",
									children: bmi ?? "--"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs tracking-[0.25em] text-muted-foreground uppercase",
									children: "BMI Score"
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							"aria-live": "polite",
							className: "mt-5 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-lg font-bold tracking-wide text-primary uppercase",
								children: status?.label ?? "Enter your details"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-sm text-muted-foreground",
								children: status?.tip ?? "We'll show your health status instantly."
							})]
						})]
					})
				})]
			})]
		})
	});
}
var before_1_default = "/assets/before-1-DiJqBtj8.jpg";
var after_1_default = "/assets/after-1-CatvZzS7.jpg";
var results = [
	{
		name: "Rohit",
		detail: "-14 kg in 6 months"
	},
	{
		name: "Ayesha",
		detail: "-9 kg, +5 kg lean mass"
	},
	{
		name: "Karan",
		detail: "+11 kg lean mass in 8 months"
	}
];
function Transformations() {
	const [pos, setPos] = (0, import_react.useState)(50);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-8 lg:py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Transformations",
				title: "REAL RESULTS",
				subtitle: "Drag the slider to see what disciplined coaching looks like."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-10 lg:mt-10 lg:grid-cols-[1.1fr_1fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					direction: "left",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative overflow-hidden rounded-[2rem] glass",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative aspect-[4/5] sm:aspect-[4/3]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: after_1_default,
										alt: "Member after their Pro Athletic transformation",
										loading: "lazy",
										width: 800,
										height: 1e3,
										className: "absolute inset-0 h-full w-full object-cover object-center"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute inset-0 overflow-hidden",
										style: { width: `${pos}%` },
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: before_1_default,
											alt: "Member before their Pro Athletic transformation",
											loading: "lazy",
											width: 800,
											height: 1e3,
											className: "h-full w-full object-cover object-center",
											style: {
												width: `${100 / pos * 100}%`,
												maxWidth: "none"
											}
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "pointer-events-none absolute inset-y-0 w-0.5 bg-primary",
										style: { left: `${pos}%` },
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground",
											children: "↔"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute top-4 left-4 rounded-full glass px-3 py-1 text-[11px] font-bold tracking-widest uppercase",
										children: "Before"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute top-4 right-4 rounded-full glass px-3 py-1 text-[11px] font-bold tracking-widest uppercase",
										children: "After"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "compare",
								className: "sr-only",
								children: "Compare before and after"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "compare",
								type: "range",
								min: 2,
								max: 98,
								value: pos,
								onChange: (e) => setPos(Number(e.target.value)),
								className: "w-full accent-[oklch(0.556_0.245_28.5)] p-5"
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5",
					children: results.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						direction: "right",
						delay: i * 120,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl glass lift p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "display text-3xl",
								children: r.detail
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1.5 text-sm text-muted-foreground",
								children: [r.name, " — Premium member"]
							})]
						})
					}, r.name))
				})]
			})]
		})
	});
}
var GOOGLE_REVIEWS_URL = "https://www.google.com/search?sca_esv=e2130cf16db8d2a2&sxsrf=APpeQntzi5jLFHDqa4IWnNN5PKpXGsC_xw:1791453936095&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_8zkAoHjfzahqKW6hAfkAOgt5LDl5F_hb9GPlQSg7Whgxk7Z_9lYKiZSA5mfT2KzBkC5u52ZalmB3ISS2W3o4xcf8kWEPtjw7FrmywLO_XcYSrQY-Q%3D%3D&q=Pro+Athletic+Gyms+VIP+Road+Reviews&sa=X&ved=2ahUKEwiu4Pf7laqXAxX-yzgGHf0ZIqkQ0bkNegQILBAF&biw=1280&bih=585&dpr=1.5";
var reviews = [
	{
		name: "Param",
		rating: 5,
		time: "3 months ago",
		text: "The gym has a very positive aura and all the equipment are well maintained, also the staff is very cooperative and the gym trainer Mr. Rohit is also very helpful."
	},
	{
		name: "Jatin Kumar",
		rating: 5,
		time: "a year ago",
		text: "There’s a good variety of machines and free weights, and I never have to wait long to use anything. The group classes are also a great bonus—motivating and well-led by professional trainers. Overall, it’s a great place to stay fit and healthy. I would definitely recommend it to anyone looking for a quality gym!"
	},
	{
		name: "Ajay Kumar",
		rating: 5,
		time: "7 months ago",
		text: "Best gym of Zirakpur... Me and my wife are working out here from 3 years and we got amazing results. They have so many machines of each muscle group, ambience is so nice and prices are affordable for everyone."
	},
	{
		name: "Shubham Gauhar",
		rating: 5,
		time: "9 months ago",
		text: "Love this gym and ambience here! Having the best experience with the support of Kishan here. Suggest you to must visit."
	},
	{
		name: "Shailendra Jain",
		rating: 5,
		time: "8 months ago",
		text: "It was an excellent experience. All equipment are well maintained, machines are working properly, and very hygienic."
	},
	{
		name: "Hemant Kumar",
		rating: 5,
		time: "10 months ago",
		text: "This is the best gym in Zirakpur, the equipment is top brand and better is the gym trainer here. I'm feeling great. Thanks!"
	},
	{
		name: "Bhavna Notyal",
		rating: 5,
		time: "7 months ago",
		text: "Well equipped gym, good atmosphere and the staff is good. Trainer Kishan is very polite and gives the best guidance."
	},
	{
		name: "Saksham Sharma",
		rating: 5,
		time: "a year ago",
		text: "Best gym in this area! Very good equipment and well maintained. One of the best hours of my day is spent there."
	},
	{
		name: "Parvaiz Sajad",
		rating: 5,
		time: "9 months ago",
		text: "Pro Athletic Gyms is the best gym having a clean, motivating environment with good equipment, and trainer Rohit is knowledgeable, supportive, and ensures proper guidance throughout workouts."
	},
	{
		name: "Vishal Kumar",
		rating: 5,
		time: "7 months ago",
		text: "Best gym for athletes... as they have heavy duty equipment. I feel motivated and the training staff is very helpful. Even without personal training, they treat you very well."
	},
	{
		name: "Ajit Singh",
		rating: 5,
		time: "9 months ago",
		text: "Good gym, very nice environment, and best trainer Kishan Singh fully cooperates."
	},
	{
		name: "Shivali Verma",
		rating: 5,
		time: "4 weeks ago",
		text: "Great facility, modern equipment, and a very positive training atmosphere. Special shoutout to my trainer Rohit for his dedication and clear guidance. He keeps every workout session engaging and effective. 5 stars all the way"
	},
	{
		name: "Reeva Talwar",
		rating: 5,
		time: "a year ago",
		text: "Absolutely love this gym! I've been training here for a while now, and I can confidently say it's one of the best gyms in the area. The equipment is top-notch and always clean, and there's plenty of space, so I never feel cramped—even during peak hours. The staff is super friendly, knowledgeable, and always willing to help, whether it's with form correction, workout advice, or just a quick chat for motivation. The vibe here is really positive and welcoming, no matter your fitness level."
	},
	{
		name: "Vishesh Birla",
		rating: 5,
		time: "7 months ago",
		text: "I've been going to this gym for a few months now and I really love it. The equipment is modern and always clean, which is very important to me. The staff are friendly and always ready to help if you have a question. It has a great atmosphere that makes me feel motivated to work out. Highly recommended. Especially Rohit bhai, who helps really much and tells me the best technique to perform the exercises"
	},
	{
		name: "Amisha Tiwari",
		rating: 5,
		time: "2 months ago",
		text: "I've been working out here for a while, and it's been a great experience. The gym is clean, the equipment is well maintained, and the staff is friendly and supportive. Definitely a good place to stay consistent with your fitness goals✨"
	},
	{
		name: "Chandan Kumar Yadav",
		rating: 5,
		time: "a month ago",
		text: "It was best experience working out here... Must join if someone wants to transform without taking personal training... I am very happy with their equipment"
	},
	{
		name: "Srishti Sharma",
		rating: 5,
		time: "6 months ago",
		text: "A good gym. Trainers are amazing especially Rohit Sahota. He gives personal attention to all his clients and a very knowledgeable guy. Provides results. Must Join.."
	},
	{
		name: "Nehaa Sharma",
		rating: 5,
		time: "a month ago",
		text: "Clean, well-equipped, and professionally managed gym. The staff is friendly and the overall environment is very motivating. Great experience so far!"
	}
];
function GoogleIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className: "h-3.5 w-3.5 shrink-0",
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#4285F4",
				d: "M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#34A853",
				d: "M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#FBBC05",
				d: "M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.17 0 9.99 0 12s.45 3.83 1.25 5.42l4.03-3.15z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#EA4335",
				d: "M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
			})
		]
	});
}
function Testimonials() {
	const [index, setIndex] = (0, import_react.useState)(0);
	const move = (d) => setIndex((i) => (i + d + reviews.length) % reviews.length);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "testimonials",
		className: "relative py-8 lg:py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Testimonials",
					title: "MEMBER VOICES",
					subtitle: "Real reviews from our Google verified members."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 overflow-hidden lg:mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex transition-transform duration-700 ease-out",
						style: { transform: `translateX(-${index * 100}%)` },
						children: reviews.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
							className: "w-full shrink-0 px-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mx-auto max-w-2xl rounded-3xl glass p-6 sm:p-8 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center justify-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex h-12 w-12 items-center justify-center rounded-full text-base font-bold text-white shadow-md ring-2 ring-primary/60 bg-gradient-to-br from-primary to-primary/70",
											children: r.name.charAt(0)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-left",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
												className: "text-sm font-bold tracking-wide uppercase text-foreground",
												children: r.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-0.5 flex items-center gap-1.5 text-xs text-muted-foreground",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "inline-flex items-center gap-1 text-[11px] font-medium text-muted-foreground",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoogleIcon, {}), " Google Review"]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[11px]",
														children: r.time
													})
												]
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3 flex justify-center gap-1 text-primary",
										"aria-label": `${r.rating} out of 5`,
										children: Array.from({ length: r.rating }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
											size: 14,
											fill: "currentColor"
										}, i))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
										className: "mt-3.5 text-sm leading-relaxed text-foreground/90 sm:text-base",
										children: [
											"“",
											r.text,
											"”"
										]
									})
								]
							})
						}, `${r.name}-${i}`))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex items-center justify-center gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Previous testimonial",
							onClick: () => move(-1),
							className: "rounded-full glass p-2.5 transition hover:border-primary hover:text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { size: 16 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex max-w-md flex-wrap items-center justify-center gap-1.5",
							children: reviews.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": `Go to testimonial ${i + 1}`,
								onClick: () => setIndex(i),
								className: `h-2 rounded-full transition-all duration-300 ${i === index ? "w-6 bg-primary" : "w-2 bg-muted"}`
							}, `${r.name}-${i}`))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Next testimonial",
							onClick: () => move(1),
							className: "rounded-full glass p-2.5 transition hover:border-primary hover:text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 16 })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: GOOGLE_REVIEWS_URL,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "group inline-flex items-center gap-2.5 rounded-full border border-glass-border glass px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary/60 hover:text-primary hover:glow-red",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoogleIcon, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "See More Google Reviews" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
								size: 15,
								className: "text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-primary"
							})
						]
					})
				})
			]
		})
	});
}
var shots = [
	{
		img: "/assets/gal-weights-7h1X1qbM.jpg",
		label: "Weight Section",
		w: 900,
		h: 1200
	},
	{
		img: "/assets/gal-cardio-q7SaJd1H.jpg",
		label: "Cardio Zone",
		w: 900,
		h: 700
	},
	{
		img: "/assets/gal-functional-DLvgpnzZ.jpg",
		label: "Functional Zone",
		w: 900,
		h: 700
	},
	{
		img: "/assets/gal-locker-qIaDGkvj.jpg",
		label: "Locker Rooms",
		w: 900,
		h: 1200
	},
	{
		img: "/assets/gal-reception-CDgzqd2a.jpg",
		label: "Reception",
		w: 900,
		h: 700
	},
	{
		img: "/assets/gal-recovery-B3ZXHpcr.jpg",
		label: "Recovery Area",
		w: 900,
		h: 1100
	}
];
function Gallery() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "gallery",
		className: "relative py-8 lg:py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Gallery",
				title: "INSIDE THE FLOOR",
				subtitle: "Every zone engineered for focused, uninterrupted training."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 columns-1 gap-5 sm:columns-2 lg:mt-10 lg:columns-3 [&>*]:mb-5",
				children: shots.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					direction: "up",
					delay: i % 3 * 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "group relative overflow-hidden rounded-3xl glass break-inside-avoid",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: s.img,
							alt: `${s.label} at Pro Athletic`,
							loading: "lazy",
							width: s.w,
							height: s.h,
							className: "w-full object-cover transition-transform duration-700 group-hover:scale-110"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
							className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-background to-transparent p-5 text-sm font-bold tracking-widest uppercase opacity-0 transition-opacity duration-500 group-hover:opacity-100",
							children: s.label
						})]
					})
				}, s.label))
			})]
		})
	});
}
var facilities = [
	{
		icon: Waves,
		label: "Steam Bath"
	},
	{
		icon: Lock,
		label: "Locker"
	},
	{
		icon: Car,
		label: "Parking"
	},
	{
		icon: CupSoda,
		label: "Protein Bar"
	},
	{
		icon: Wifi,
		label: "WiFi"
	},
	{
		icon: Snowflake,
		label: "Air Conditioning"
	},
	{
		icon: LockKeyhole,
		label: "Personal Lockers"
	},
	{
		icon: Droplets,
		label: "Shower Rooms"
	},
	{
		icon: Activity,
		label: "Functional Zone"
	},
	{
		icon: Sparkles,
		label: "Recovery Area"
	}
];
function Facilities() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-8 lg:py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Facilities",
				title: "EVERY DETAIL COVERED",
				subtitle: "Amenities that make training the easiest part of your day."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-10 lg:grid-cols-5",
				children: facilities.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					direction: "scale",
					delay: i % 5 * 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex h-full flex-col items-center gap-3 rounded-3xl glass lift p-6 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, {
							size: 26,
							className: "text-primary"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-semibold tracking-wide",
							children: f.label
						})]
					})
				}, f.label))
			})]
		})
	});
}
var info = [
	{
		icon: Phone,
		label: "Phone",
		value: "+91 98200 44120"
	},
	{
		icon: Mail,
		label: "Email",
		value: "train@proathletic.fit"
	},
	{
		icon: MapPin,
		label: "Address",
		value: "Hollywood Plaza, SCO 9-10, VIP Rd, Zirakpur, Punjab 140603"
	},
	{
		icon: Clock,
		label: "Working Hours",
		value: "Open 24/7 · Staffed 6am – 11pm"
	}
];
function Contact() {
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const [resultMessage, setResultMessage] = (0, import_react.useState)("");
	const [isSuccess, setIsSuccess] = (0, import_react.useState)(false);
	const onSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setResultMessage("Sending message...");
		setIsSuccess(false);
		const form = e.currentTarget;
		const formData = new FormData(form);
		try {
			const data = await (await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				body: formData
			})).json();
			if (data.success) {
				setIsSuccess(true);
				setResultMessage("Thanks! Our team will call you within 24 hours.");
				form.reset();
			} else {
				setIsSuccess(false);
				setResultMessage(data.message || "Something went wrong. Please try again.");
			}
		} catch (error) {
			setIsSuccess(false);
			setResultMessage("Something went wrong. Please check your internet connection.");
		} finally {
			setIsSubmitting(false);
		}
	};
	const field = "mt-2 w-full rounded-2xl border border-glass-border bg-secondary/60 px-5 py-3.5 text-sm outline-none transition focus:border-primary";
	const labelCls = "text-xs font-semibold tracking-widest uppercase text-muted-foreground";
	const accessKey = {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/",
		"VITE_WEB3FORMS_ACCESS_KEY": "91cbcb58-076c-4178-aa1a-dfc835738b99"
	}["VITE_WEB3FORMS_ACCESS_KEY"];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "relative py-8 lg:py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Contact",
				title: "BOOK A FREE TRIAL",
				subtitle: "One session on us. Bring your goals, we'll bring the plan."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-6 lg:mt-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					direction: "left",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "h-full overflow-hidden rounded-[2rem] glass",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: "Pro Athletic location map",
							src: "https://maps.google.com/maps?q=Pro%20Athletic%20Gyms%20VIP%20Road%20Zirakpur&t=&z=16&ie=UTF8&iwloc=&output=embed",
							loading: "lazy",
							className: "h-72 w-full border-0 lg:h-80"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "grid gap-4 p-7 sm:grid-cols-2",
							children: info.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
									size: 18,
									className: "mt-0.5 shrink-0 text-primary"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] tracking-widest uppercase text-muted-foreground",
									children: item.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm",
									children: item.value
								})] })]
							}, item.label))
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					direction: "right",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit,
						className: "rounded-[2rem] glass p-8 lg:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "hidden",
								name: "access_key",
								value: accessKey
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "hidden",
								name: "subject",
								value: "New Free Trial Booking - Pro Athletic Gym"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "hidden",
								name: "from_name",
								value: "Pro Athletic Website"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-5 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "name",
									className: labelCls,
									children: "Name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "name",
									name: "name",
									required: true,
									className: field,
									placeholder: "Your name"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "email",
									className: labelCls,
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "email",
									name: "email",
									type: "email",
									required: true,
									className: field,
									placeholder: "you@email.com"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "phone",
									className: labelCls,
									children: "Phone"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "phone",
									name: "phone",
									type: "tel",
									required: true,
									className: field,
									placeholder: "+91"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "message",
									className: labelCls,
									children: "Message"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									id: "message",
									name: "message",
									rows: 4,
									className: field,
									placeholder: "What are you training for?"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: isSubmitting,
								className: "mt-7 w-full rounded-full py-4 text-sm font-bold tracking-wide uppercase text-primary-foreground transition-all duration-300 hover:glow-red hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed",
								style: { background: "var(--gradient-red)" },
								children: isSubmitting ? "Sending..." : "Book Free Trial"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								"aria-live": "polite",
								className: `mt-4 min-h-5 text-center text-sm ${isSuccess ? "text-primary" : "text-red-400"}`,
								children: resultMessage
							})
						]
					})
				})]
			})]
		})
	});
}
var quick = [
	"Home",
	"About",
	"Programs",
	"Membership",
	"Trainers",
	"Contact"
];
var programs = [
	"Strength Training",
	"Weight Loss",
	"CrossFit",
	"Bodybuilding",
	"Yoga"
];
function Footer() {
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const [resultMessage, setResultMessage] = (0, import_react.useState)("");
	const [isSuccess, setIsSuccess] = (0, import_react.useState)(false);
	const accessKey = {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/",
		"VITE_WEB3FORMS_ACCESS_KEY": "91cbcb58-076c-4178-aa1a-dfc835738b99"
	}["VITE_WEB3FORMS_ACCESS_KEY"];
	const onSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setResultMessage("Subscribing...");
		setIsSuccess(false);
		const form = e.currentTarget;
		const formData = new FormData(form);
		try {
			const data = await (await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				body: formData
			})).json();
			if (data.success) {
				setIsSuccess(true);
				setResultMessage("Thanks! You're subscribed.");
				form.reset();
			} else {
				setIsSuccess(false);
				setResultMessage(data.message || "Something went wrong. Please try again.");
			}
		} catch {
			setIsSuccess(false);
			setResultMessage("Something went wrong. Please check your internet connection.");
		} finally {
			setIsSubmitting(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-glass-border bg-surface/60",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-5 py-8 lg:grid-cols-4 lg:px-8 lg:py-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#home",
						className: "flex items-center gap-2.5 display text-2xl tracking-widest",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: Logo_PAG_default,
							alt: "Pro Athletic Gyms Logo",
							className: "h-9 w-9 shrink-0 rounded-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["PRO", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "ATHLETIC"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-muted-foreground",
						children: "A premium athletic performance center built for people who take training seriously."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 flex gap-3",
						children: [
							{
								icon: Instagram,
								href: "https://www.instagram.com/pro_athletic_gyms/",
								label: "Instagram"
							},
							{
								icon: Facebook,
								href: "https://www.facebook.com/proathleticgymsviproadzirakpur/",
								label: "Facebook"
							},
							{
								icon: Twitter,
								href: "https://twitter.com/",
								label: "Twitter"
							},
							{
								icon: Youtube,
								href: "https://youtube.com/",
								label: "YouTube"
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: s.href,
							target: "_blank",
							rel: "noopener noreferrer",
							"aria-label": `Pro Athletic ${s.label}`,
							className: "rounded-full glass p-2.5 transition hover:border-primary hover:text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { size: 16 })
						}, s.label))
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					"aria-label": "Quick links",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-bold tracking-widest uppercase",
						children: "Quick Links"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2.5",
						children: quick.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `#${l.toLowerCase()}`,
							className: "text-sm text-muted-foreground transition hover:text-primary",
							children: l
						}) }, l))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					"aria-label": "Programs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-bold tracking-widest uppercase",
						children: "Programs"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2.5",
						children: programs.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#programs",
							className: "text-sm text-muted-foreground transition hover:text-primary",
							children: p
						}) }, p))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-bold tracking-widest uppercase",
						children: "Newsletter"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-muted-foreground",
						children: "Training tips and member offers, once a month."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit,
						className: "mt-4 flex gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "hidden",
								name: "access_key",
								value: accessKey
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "hidden",
								name: "subject",
								value: "New Newsletter Subscriber - Pro Athletic Gyms"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "hidden",
								name: "from_name",
								value: "Pro Athletic Website"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "newsletter",
								className: "sr-only",
								children: "Email address"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "newsletter",
								name: "email",
								type: "email",
								required: true,
								placeholder: "you@email.com",
								className: "w-full rounded-full border border-glass-border bg-secondary/60 px-4 py-2.5 text-sm outline-none focus:border-primary"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: isSubmitting,
								className: "rounded-full px-5 py-2.5 text-sm font-bold text-primary-foreground transition hover:glow-red disabled:cursor-not-allowed disabled:opacity-50",
								style: { background: "var(--gradient-red)" },
								children: isSubmitting ? "..." : "Join"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						"aria-live": "polite",
						className: `mt-2 min-h-4 text-xs ${isSuccess ? "text-primary" : "text-red-400"}`,
						children: resultMessage
					})
				] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-glass-border py-6 text-center text-xs text-muted-foreground",
			children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Pro Athletic Gyms. All rights reserved."
			]
		})]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyUs, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Programs, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Membership, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trainers, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BmiCalculator, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Transformations, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facilities, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
