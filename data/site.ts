export type Project = {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  thumbClass: string;
  stack: string[];
  live: string;
  github: string;
  overview: string;
  techDetail: string;
  challenges: string[];
  improvements: string[];
  meta: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "planmywedding",
    name: "PlanMyWedding",
    tagline:
      "An AI-powered wedding planning platform connecting couples with vendors: listings, bookings, reviews, and a live AI assistant for recommendations.",
    image: "/img/projects/planmywedding.jpg",
    thumbClass: "thumb-wedding",
    stack: [
      "Express.js",
      "TypeScript",
      "MongoDB (Mongoose)",
      "JWT",
      "Google OAuth",
      "Zod",
      "OpenAI API",
    ],
    live: "https://planmywedding-client-et7k-eta.vercel.app",
    github: "https://github.com/mndbobby61-blip/planmywedding-client",
    overview:
      "PlanMyWedding brings vendor discovery, bookings and reviews into one platform for couples planning a wedding. The backend is a single consolidated Express + TypeScript service, with MongoDB via Mongoose handling vendors, bookings and user data behind a clean REST API.",
    techDetail:
      "Express.js and TypeScript power the API layer with a single consolidated entry point. MongoDB with Mongoose models the vendor, booking and review data. Authentication combines JWT with Google OAuth, and every incoming request is validated with Zod schemas before it touches the database. Passwords are hashed with bcryptjs. On top of that, the OpenAI API powers a recommendation engine and a live streaming chat assistant that helps couples find the right vendor.",
    challenges: [
      "Merging two authentication flows, Google OAuth and traditional JWT login, into one consistent user session without duplicating account logic.",
      "Streaming OpenAI responses to the client in real time while keeping the connection stable and handling partial or failed completions gracefully.",
      "Designing Zod validation schemas detailed enough to catch bad vendor or booking data without becoming a maintenance burden.",
    ],
    improvements: [
      "Add a vendor-side dashboard for managing availability and responding to bookings directly.",
      "Introduce payment integration for deposit-based booking confirmation.",
      "Expand the AI assistant with budget-aware recommendations based on guest count and location.",
    ],
    meta: [
      { label: "Type", value: "Full Stack" },
      { label: "Backend", value: "Express + TS" },
      { label: "Database", value: "MongoDB" },
      { label: "Auth", value: "JWT + OAuth" },
      { label: "AI", value: "OpenAI API" },
    ],
  },
  {
    slug: "property-rental",
    name: "Property Rental",
    tagline:
      "A property listing and booking platform with search, filters, and a complete reservation flow, fully responsive across mobile, tablet and desktop.",
    image: "/img/projects/property-rental.jpg",
    thumbClass: "thumb-property",
    stack: ["Next.js", "TypeScript", "Express.js", "MongoDB", "Tailwind CSS"],
    live: "https://property-rental-b918.vercel.app",
    github: "https://github.com/mndbobby61-blip/property-rental",
    overview:
      "Property Rental lets users browse listings, filter by location, price and availability, and carry a booking through to confirmation. The Next.js frontend talks to a dedicated Express API, with MongoDB storing listings, availability windows and reservations.",
    techDetail:
      "The client is built with Next.js and TypeScript, styled with Tailwind CSS for a mobile-first responsive layout. The backend is a separate Express.js service exposing REST endpoints for listings, search and filter queries, and booking creation, backed by MongoDB collections for properties and reservations.",
    challenges: [
      "Keeping search and filter queries fast as the number of listing fields, location, price range, amenities, grew.",
      "Preventing double-booking by validating availability windows against existing reservations before confirming a new one.",
      "Getting the responsive layout to hold up across very different card densities on mobile vs. desktop grids.",
    ],
    improvements: [
      "Add an interactive map view for browsing listings by location.",
      "Build an owner dashboard for managing listings and viewing booking history.",
      "Add image upload and gallery support for each property.",
    ],
    meta: [
      { label: "Type", value: "Full Stack" },
      { label: "Frontend", value: "Next.js" },
      { label: "Backend", value: "Express.js" },
      { label: "Database", value: "MongoDB" },
    ],
  },
  {
    slug: "cars-bd",
    name: "Cars BD",
    tagline:
      "A modern car dealership platform with inventory browsing, vehicle details, and an intuitive user interface.",
    image: "/img/projects/cars-bd.png",
    thumbClass: "thumb-cars",
    stack: ["React", "JavaScript", "Tailwind CSS", "MongoDB", "Express.js"],
    live: "https://cars-bd-client.vercel.app/",
    github: "https://github.com/mndbobby61-blip/cars-bd-client",
    overview:
      "Cars BD provides a seamless experience for browsing and exploring vehicle inventory. It features a responsive design, clean UI/UX, and robust performance.",
    techDetail:
      "Built as a single-page application with modern web technologies, connected to a scalable backend database for inventory management.",
    challenges: [
      "Creating an engaging and responsive UI that highlights vehicle images and details effectively.",
      "Implementing efficient data fetching for the car listings.",
    ],
    improvements: [
      "Add advanced filtering for makes, models, and price ranges.",
      "Integrate a user review system for vehicles.",
    ],
    meta: [
      { label: "Type", value: "Frontend / Full Stack" },
      { label: "Platform", value: "Web" },
    ],
  },
  {
    slug: "docappoint",
    name: "DocAppoint",
    tagline:
      "A doctor appointment booking system with scheduling, profile management and role-based protected routes for patients and doctors.",
    image: "/img/projects/docappoint.jpg",
    thumbClass: "thumb-doctor",
    stack: ["Next.js", "Express.js", "MongoDB", "JWT"],
    live: "https://docappoint-client-6gz9.vercel.app",
    github: "https://github.com/mndbobby61-blip/Doctor-appointment-",
    overview:
      "DocAppoint connects patients with doctors for scheduling appointments. It handles two distinct user roles, patients and doctors, each with their own profile views, permissions and dashboard, backed by a JWT-secured Express API and MongoDB.",
    techDetail:
      "The frontend is built with Next.js, communicating with an Express.js REST API. MongoDB stores users, doctor profiles and appointment slots. JWT authentication issues and verifies tokens on every protected request, with role-based access control separating what patients and doctors can see and do.",
    challenges: [
      "Designing role-based protected routes so patients and doctors land on the correct dashboard and can't access each other's actions.",
      "Handling appointment slot conflicts, making sure two patients can't book the same doctor at the same time.",
      "Keeping the JWT refresh and session flow smooth so users aren't logged out mid-booking.",
    ],
    improvements: [
      "Add email and SMS reminders for upcoming appointments.",
      "Introduce a calendar view for doctors to manage their weekly availability.",
      "Support video consultation links for remote appointments.",
    ],
    meta: [
      { label: "Type", value: "Full Stack" },
      { label: "Frontend", value: "Next.js" },
      { label: "Backend", value: "Express.js" },
      { label: "Auth", value: "JWT + RBAC" },
    ],
  },
  {
    slug: "summer-store",
    name: "Summer Store",
    tagline:
      "An e-commerce storefront with product catalog, cart and checkout flow, backed by a native MongoDB driver for a lightweight, direct data layer.",
    image: "/img/projects/summer-store-icon.png",
    thumbClass: "thumb-store",
    stack: ["Next.js", "Tailwind CSS", "Express.js", "MongoDB (Native Driver)"],
    live: "https://assignment-8th-z9i6.vercel.app",
    github: "https://github.com/mndbobby61-blip/Summer-Stores-",
    overview:
      "Summer Store is a full e-commerce storefront: product catalog browsing, a persistent cart, and a checkout flow, wrapped in a clean, responsive Next.js UI styled with Tailwind CSS.",
    techDetail:
      "The frontend uses Next.js and Tailwind CSS. Rather than reaching for Mongoose, the Express.js backend talks to MongoDB through the native driver directly, giving finer control over queries and a lighter dependency footprint for a store with a fairly simple data model of products, cart and orders.",
    challenges: [
      "Managing cart state consistently between client-side interactions and the server, without an ORM to lean on for schema safety.",
      "Writing MongoDB queries by hand with the native driver, which meant more careful validation before data hit the database.",
      "Keeping the checkout flow simple and fast while still handling stock and quantity edge cases correctly.",
    ],
    improvements: [
      "Integrate a real payment gateway for end-to-end checkout.",
      "Add product reviews and ratings.",
      "Build an admin panel for managing inventory and orders.",
    ],
    meta: [
      { label: "Type", value: "Full Stack" },
      { label: "Frontend", value: "Next.js" },
      { label: "Backend", value: "Express.js" },
      { label: "Database", value: "MongoDB (native)" },
    ],
  },
];

export const skillGroups = [
  {
    label: "Frontend",
    ext: ".tsx",
    skills: ["Next.js 15", "React.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    label: "Backend & Database",
    ext: ".ts",
    skills: ["MongoDB (Native + Mongoose)", "Node.js", "Express.js", "REST API Design"],
  },
  {
    label: "Auth & Security",
    ext: ".env",
    skills: ["JWT", "Google OAuth", "bcryptjs", "Zod Validation", "Role-Based Access Control"],
  },
  {
    label: "AI Integration",
    ext: ".ai",
    skills: ["OpenAI API", "Streaming Chat Features", "Recommendation Engines"],
  },
  {
    label: "Tools & Deployment",
    ext: ".sh",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Vercel"],
  },
];

export const experience = [
  {
    role: "MERN Stack Developer Trainee",
    org: "Programming Hero / Self-Led Projects",
    period: "Jan 2026 — Present",
    location: "Remote / Self-paced · Dhaka, Bangladesh",
    points: [
      "Completed 800+ hours of hands-on, project-based training in JavaScript, React, Next.js, Node.js, Express.js and MongoDB.",
      "Learned and practiced authentication, API integration, deployment, debugging and proper Git workflow.",
      "Built and deployed 4+ full-stack projects with mobile-first responsive design, reusable components, protected routes, REST API integration and version-controlled Git commits.",
      "Used AI tools (ChatGPT, GitHub Copilot, Cursor) to speed up requirement breakdown, bug tracing, code refactoring and documentation, while manually reviewing and testing every piece of generated code before use.",
    ],
  },
];

export const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    status: "Ongoing, 3rd Semester",
    school: "Mohammadpur Central University",
  },
  {
    degree: "Higher Secondary Certificate (HSC), Science",
    status: "GPA 4.58 / 5 — 2020",
    school: "Begum Sheikh Fazilatunnessa Mujib Govt. College",
  },
  {
    degree: "Secondary School Certificate (SSC), Science",
    status: "GPA 4.58 / 5 — 2018",
    school: "West Dhanmondi Yusuf High School",
  },
];

export const contact = {
  email: "mdbobby51@gmail.com",
  phone: "+880 1719 768050",
  whatsapp: "https://wa.me/8801719768050",
  location: "Dhaka, Bangladesh",
  github: "https://github.com/mndbobby61-blip",
  linkedin:
    "https://www.linkedin.com/in/md-rabbi-sarder-rabbi-3691453b6/",
  facebook: "https://www.facebook.com/share/1EfkQuKuBy/",
  resume: "/resume/Rabbi_Sarder_Resume.pdf",
};
