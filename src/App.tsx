import { FormEvent, useEffect, useState } from "react"

type IconName = "arrow" | "calendar" | "certificate" | "check" | "chevron" | "clock" | "document" | "facebook" | "heart" | "home" | "location" | "mail" | "menu" | "people" | "phone" | "search" | "shield" | "user" | "x"

const paths: Record<IconName, React.ReactNode> = {
  arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
    </>
  ),
  certificate: (
    <>
      <path d="M6 3h12v14H6zM9 7h6M9 11h4" />
      <path d="m9 17-1 4 4-2 4 2-1-4" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  chevron: <path d="m9 18 6-6-6-6" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  document: (
    <>
      <path d="M6 2h8l4 4v16H6z" />
      <path d="M14 2v5h5M9 12h6M9 16h6" />
    </>
  ),
  facebook: (
    <path d="M14 8h3V4h-3c-3 0-5 2-5 5v2H6v4h3v7h4v-7h3l1-4h-4V9c0-.7.3-1 1-1Z" />
  ),
  heart: (
    <path d="M20.8 5.6a5.4 5.4 0 0 0-7.6 0L12 6.8l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6L12 22l8.8-8.8a5.4 5.4 0 0 0 0-7.6Z" />
  ),
  home: (
    <>
      <path d="m3 11 9-8 9 8" />
      <path d="M5 10v11h14V10M9 21v-7h6v7" />
    </>
  ),
  location: (
    <>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  people: (
    <>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2" />
      <path d="M3 20c0-4 2-7 6-7s6 3 6 7M15 14c3 0 5 2 5 5" />
    </>
  ),
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 1.9Z" />
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5z" />
      <path d="m9 12 2 2 4-5" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 22c0-5 3-8 8-8s8 3 8 8" />
    </>
  ),
  x: <path d="m6 6 12 12M18 6 6 18" />,
}

function Icon({ name, size = 22 }: { name: IconName size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  )
}

const heroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1654661080533-79be835bad57?auto=format&fit=crop&w=1800&q=88",
    eyebrow: "Mabuhay! Welcome to our community",
    title: "Serving every family. Building a stronger barangay.",
    text: "Barangay M. Pandeño is committed to responsive public service, inclusive development, and a safe community for all.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1714746093194-90606d562049?auto=format&fit=crop&w=1800&q=88",
    eyebrow: "A progressive community in Laguna",
    title: "Rooted in service, growing together.",
    text: "Discover local programs, public information, and services designed to support our residents and their everyday needs.",
  },
]

const services = [
  [
    "certificate",
    "Barangay Clearance",
    "For employment, identification, and other lawful purposes.",
  ],
  [
    "home",
    "Certificate of Residency",
    "Proof of residence within the barangay.",
  ],
  [
    "heart",
    "Certificate of Indigency",
    "Support document for qualified residents.",
  ],
  [
    "document",
    "Business Clearance",
    "Barangay-level requirement for local businesses.",
  ],
  [
    "shield",
    "Blotter & Incident Reports",
    "Report and document community incidents.",
  ],
  [
    "people",
    "Community Assistance",
    "Guidance for available barangay support.",
  ],
] as const

const news = [
  {
    date: "Sample • 18 June",
    title: "Community clean-up drive scheduled for all puroks",
    text: "Residents are encouraged to join the coordinated clean-up and waste segregation activity.",
    image:
      "https://images.unsplash.com/photo-1596367437430-ba4c9a7456ac?auto=format&fit=crop&w=700&q=80",
  },
  {
    date: "Sample • 12 June",
    title: "Free health consultation and wellness day",
    text: "A community health activity is being prepared for residents of all ages.",
    image:
      "https://images.unsplash.com/photo-1663265159276-9f716dda0e83?auto=format&fit=crop&w=700&q=80",
  },
  {
    date: "Sample • 05 June",
    title: "Youth volunteers support local greening program",
    text: "Young community volunteers take part in a neighborhood environmental initiative.",
    image:
      "https://images.unsplash.com/photo-1610987219435-484c9a553483?auto=format&fit=crop&w=700&q=80",
  },
]

type ProjectStatus = "Completed" | "Planned" | "Ongoing" | "Unverified"
type ProjectFilter = "All Projects" | "Infrastructure" | "Community Development" | "Planned Projects" | "Completed Projects"

type Project = {
  id: string
  scope: "barangay" | "municipal"
  title: string
  category: "Infrastructure" | "Community Development"
  location: string
  cost: string
  start: string
  completion: string
  status: ProjectStatus
  statusNote?: string
  description: string
  source: string
  contractor?: string
  image: string
}

const projects: Project[] = [
  {
    id: "multi-purpose-building",
    scope: "barangay",
    title: "Construction of Multi-Purpose Building",
    category: "Infrastructure",
    location: "Barangay M. Pandeño, Siniloan, Laguna",
    cost: "₱2,960,000",
    start: "April 4, 2022",
    completion: "September 30, 2022",
    status: "Completed",
    description:
      "Construction of a multi-purpose building intended to provide the community with a facility for barangay activities, public gatherings, meetings, and community programs.",
    source: "Verified project information provided by the Barangay",
    contractor: "Triple Eagle Construction and Trading",
    image:
      "https://images.unsplash.com/photo-1652303518372-79ad122e3181?auto=format&fit=crop&w=1000&q=82",
  },
  {
    id: "barangay-road",
    scope: "barangay",
    title: "Concreting of Barangay Road",
    category: "Infrastructure",
    location: "Barangay M. Pandeño",
    cost: "₱1,000,000 listed allocation",
    start: "Not specified",
    completion: "Not verified",
    status: "Planned",
    statusNote: "Development-plan entry; implementation remains unverified",
    description:
      "A proposed infrastructure improvement focused on improving road accessibility and transportation within the barangay.",
    source:
      "Laguna Provincial Development and Physical Framework Plan 2021–2030",
    image:
      "https://images.unsplash.com/photo-1577335029365-35029f68d093?auto=format&fit=crop&w=1000&q=82",
  },
  {
    id: "sports-complex",
    scope: "municipal",
    title: "Multi-Purpose Sports Complex",
    category: "Community Development",
    location: "Municipality of Siniloan",
    cost: "Approximately ₱74.9 million",
    start: "December 27, 2022",
    completion: "December 13, 2023",
    status: "Completed",
    description:
      "A municipal-level sports and recreational infrastructure project intended to support sports activities and community recreation.",
    source: "Documented Siniloan municipal project record",
    image:
      "https://images.unsplash.com/photo-1609051985139-24f071506c40?auto=format&fit=crop&w=1000&q=82",
  },
  {
    id: "romelo-river-flood-control",
    scope: "municipal",
    title: "Flood Control Structure along Romelo River",
    category: "Infrastructure",
    location: "Siniloan, Laguna",
    cost: "Approximately ₱96.5 million",
    start: "March 22, 2024",
    completion: "March 7, 2025",
    status: "Completed",
    description:
      "A flood control infrastructure project intended to improve flood protection and support community safety.",
    source: "Documented Siniloan municipal project record",
    image:
      "https://images.unsplash.com/photo-1610164989165-0c4701bc4ce2?auto=format&fit=crop&w=1000&q=82",
  },
]

const projectFilters: ProjectFilter[] = [
  "All Projects",
  "Infrastructure",
  "Community Development",
  "Planned Projects",
  "Completed Projects",
]

const futureProgramCategories = [
  "Health and Nutrition",
  "Education and Youth Development",
  "Senior Citizen and PWD Assistance",
  "Environmental Programs",
  "Disaster Risk Reduction and Management",
  "Livelihood and Community Assistance",
]

const officials = [
  ["Barangay Captain", "Name to be confirmed"],
  ["Barangay Kagawad", "Name to be confirmed"],
  ["Barangay Secretary", "Name to be confirmed"],
  ["Barangay Treasurer", "Name to be confirmed"],
  ["SK Chairperson", "Name to be confirmed"],
]

function SectionHeading({
  kicker,
  title,
  text,
  light = false,
}: {
  kicker: string
  title: string
  text?: string
  light?: boolean
}) {
  return (
    <div className={`section-heading ${light ? "light" : ""}`}>
      <span>{kicker}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}

function ProjectCard({
  project,
  featured = false,
  open,
  onToggle,
}: {
  project: Project
  featured?: boolean
  open: boolean
  onToggle: () => void
}) {
  return (
    <article
      className={`program-card project-card ${
        featured ? "featured-project" : ""
      }`}
    >
      <div className="program-image">
        <img
          src={project.image}
          alt={`Representative image for ${project.title}`}
        />
        <span className={`status-badge ${project.status.toLowerCase()}`}>
          {project.status}
        </span>
        <em>Representative image</em>
      </div>
      <div className="project-content">
        <div className="project-card-topline">
          <small>{project.category}</small>
          <b>{project.scope === "barangay" ? "Barangay" : "Municipal"}</b>
        </div>
        <h3>{project.title}</h3>
        <dl className="project-facts">
          <div>
            <dt>Location</dt>
            <dd>{project.location}</dd>
          </div>
          <div>
            <dt>
              {project.status === "Planned" ? "Listed allocation" : "Cost"}
            </dt>
            <dd>{project.cost}</dd>
          </div>
          <div>
            <dt>Start</dt>
            <dd>{project.start}</dd>
          </div>
          <div>
            <dt>Completion</dt>
            <dd>{project.completion}</dd>
          </div>
        </dl>
        {project.statusNote && (
          <p className="project-caution">
            <Icon name="document" size={16} /> {project.statusNote}
          </p>
        )}
        <p className="project-description">{project.description}</p>
        <p className="project-source">
          <strong>Source / reference:</strong> {project.source}
        </p>
        <button
          type="button"
          className="project-details-button"
          onClick={onToggle}
          aria-expanded={open}
        >
          {open ? "Hide Details" : "View Details"}{" "}
          <Icon name={open ? "chevron" : "arrow"} size={18} />
        </button>
        {open && (
          <div className="project-expanded">
            {project.contractor && (
              <p>
                <strong>Contractor</strong>
                <span>{project.contractor}</span>
              </p>
            )}
            {project.scope === "municipal" && (
              <p className="scope-note">
                This municipal project is provided for broader development
                context only. Its exact location within Barangay M. Pandeño has
                not been independently verified.
              </p>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

function ProjectEmptyState({
  filter,
  compact = false,
}: {
  filter: ProjectFilter
  compact?: boolean
}) {
  return (
    <div className={`project-empty ${compact ? "compact" : ""}`}>
      <Icon name="document" size={28} />
      <div>
        <strong>No published records in this view</strong>
        <p>
          No verified {filter.toLowerCase()} records are currently available for
          this project group.
        </p>
      </div>
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [slide, setSlide] = useState(0)
  const [sent, setSent] = useState(false)
  const [projectFilter, setProjectFilter] =
    useState<ProjectFilter>("All Projects")
  const [openProject, setOpenProject] = useState<string | null>(null)

  useEffect(() => {
    const timer = window.setInterval(
      () => setSlide((current) => (current + 1) % heroSlides.length),
      7000,
    )
    return () => window.clearInterval(timer)
  }, [])

  const submitForm = (event: FormEvent) => {
    event.preventDefault()
    setSent(true)
  }

  const matchesProjectFilter = (project: Project) => {
    if (projectFilter === "Infrastructure")
      return project.category === "Infrastructure"
    if (projectFilter === "Community Development")
      return project.category === "Community Development"
    if (projectFilter === "Planned Projects")
      return project.status === "Planned"
    if (projectFilter === "Completed Projects")
      return project.status === "Completed"
    return true
  }

  const barangayProjects = projects.filter(
    (project) => project.scope === "barangay" && matchesProjectFilter(project),
  )
  const municipalProjects = projects.filter(
    (project) => project.scope === "municipal" && matchesProjectFilter(project),
  )

  return (
    <div className="site-shell">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <header className="site-header">
        <div className="utility-bar">
          <div className="container utility-inner">
            <p>Republic of the Philippines</p>
            <div>
              <span>Accessibility</span>
              <span>Filipino</span>
              <span>English</span>
            </div>
          </div>
        </div>
        <div className="container brand-row">
          <a
            className="brand"
            href="#home"
            aria-label="Barangay M. Pandeño home"
          >
            <img
              src="/public/assets/barangay-seal.png"
              alt="Barangay M. Pandeño official seal"
            />
            <div>
              <small>Official Website of</small>
              <strong>Barangay M. Pandeño</strong>
              <span>Siniloan, Laguna, Philippines</span>
            </div>
          </a>
          <div className="header-actions">
            <button
              className="icon-button"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Open search"
            >
              <Icon name="search" />
            </button>
            <a className="button gold compact" href="#services">
              Online Services <Icon name="arrow" size={18} />
            </a>
            <button
              className="menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
            >
              <Icon name={menuOpen ? "x" : "menu"} />
            </button>
          </div>
        </div>
        {searchOpen && (
          <div className="search-panel">
            <form className="container" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="site-search">Search this website</label>
              <div>
                <input
                  id="site-search"
                  autoFocus
                  placeholder="What are you looking for?"
                />
                <button aria-label="Submit search">
                  <Icon name="search" />
                </button>
              </div>
            </form>
          </div>
        )}
        <nav
          className={menuOpen ? "main-nav open" : "main-nav"}
          aria-label="Primary navigation"
        >
          <div className="container">
            {[
              ["Home", "home"],
              ["About Barangay", "about"],
              ["Officials", "officials"],
              ["Programs & Projects", "programs"],
              ["News & Announcements", "news"],
              ["Transparency", "transparency"],
              ["Public Services", "services"],
              ["Contact Us", "contact"],
            ].map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero" id="home" aria-label="Welcome carousel">
          {heroSlides.map((item, index) => (
            <div
              key={item.title}
              className={`hero-bg ${index === slide ? "active" : ""}`}
              style={{ backgroundImage: `url("${item.image}")` }}
            />
          ))}
          <div className="hero-shade" />
          <div className="container hero-content">
            <div className="hero-copy">
              <span className="eyebrow">{heroSlides[slide].eyebrow}</span>
              <h1>{heroSlides[slide].title}</h1>
              <p>{heroSlides[slide].text}</p>
              <div className="button-row">
                <a className="button gold" href="#about">
                  Explore Our Barangay <Icon name="arrow" size={19} />
                </a>
                <a className="button outline" href="#services">
                  Access Public Services
                </a>
              </div>
            </div>
            <div className="hero-index">
              <strong>0{slide + 1}</strong>
              <span>/ 0{heroSlides.length}</span>
            </div>
          </div>
          <div className="container slider-controls">
            <div>
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  className={index === slide ? "active" : ""}
                  onClick={() => setSlide(index)}
                  aria-label={`Show slide ${index + 1}`}
                />
              ))}
            </div>
            <p>Public Service • Community • Progress</p>
          </div>
        </section>

        <section className="notice-wrap" aria-label="Important notice">
          <div className="container notice">
            <div className="notice-label">
              <span>Important</span>
              <strong>Public Advisory</strong>
            </div>
            <p>
              Official announcements and emergency advisories will be posted
              here once verified by the Barangay Office.
            </p>
            <a href="#news">
              View notices <Icon name="arrow" size={18} />
            </a>
          </div>
        </section>

        <section className="section news-section" id="news">
          <div className="container">
            <div className="heading-row">
              <SectionHeading
                kicker="Stay informed"
                title="News & announcements"
                text="Updates from the barangay and the community."
              />
              <a className="text-link" href="#news">
                View all updates <Icon name="arrow" size={18} />
              </a>
            </div>
            <div className="news-grid">
              <div className="news-list">
                {news.map((item, index) => (
                  <article className="news-card" key={item.title}>
                    <img src={item.image} alt="" />
                    <div>
                      <span>{item.date}</span>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                      <a
                        href="#contact"
                        aria-label={`Read more about ${item.title}`}
                      >
                        Read more <Icon name="arrow" size={17} />
                      </a>
                    </div>
                    {index === 0 && <b>Latest</b>}
                  </article>
                ))}
              </div>
              <aside className="events-card">
                <div className="aside-header">
                  <div>
                    <span>Community calendar</span>
                    <h3>Upcoming events</h3>
                  </div>
                  <Icon name="calendar" size={28} />
                </div>
                {[
                  [
                    "24",
                    "JUN",
                    "Barangay Assembly",
                    "Schedule to be confirmed",
                  ],
                  [
                    "29",
                    "JUN",
                    "Community Clean-up Day",
                    "7:00 AM • Assembly area TBA",
                  ],
                  [
                    "06",
                    "JUL",
                    "Health & Wellness Day",
                    "Schedule to be confirmed",
                  ],
                ].map(([day, month, title, time]) => (
                  <div className="event" key={title}>
                    <time>
                      <strong>{day}</strong>
                      <span>{month}</span>
                    </time>
                    <div>
                      <h4>{title}</h4>
                      <p>
                        <Icon name="clock" size={15} /> {time}
                      </p>
                    </div>
                    <Icon name="chevron" size={18} />
                  </div>
                ))}
                <a className="button navy full" href="#contact">
                  View all events <Icon name="arrow" size={18} />
                </a>
                <small>
                  Sample schedules only. Please wait for official confirmation.
                </small>
              </aside>
            </div>
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="container">
            <SectionHeading
              light
              kicker="Serve with ease"
              title="Quick access to public services"
              text="Start with the service you need. Requirements and online request features are ready for future official integration."
            />
            <div className="services-grid">
              {services.map(([icon, title, text]) => (
                <a className="service-card" href="#contact" key={title}>
                  <div className="service-icon">
                    <Icon name={icon} size={28} />
                  </div>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                  <span>
                    <Icon name="arrow" size={19} />
                  </span>
                </a>
              ))}
              <a className="service-card accent-card" href="#contact">
                <div className="service-icon">
                  <Icon name="document" size={28} />
                </div>
                <div>
                  <h3>Request Documents</h3>
                  <p>Submit a general request or ask about requirements.</p>
                </div>
                <span>
                  <Icon name="arrow" size={19} />
                </span>
              </a>
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container about-grid">
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1714746093194-90606d562049?auto=format&fit=crop&w=1200&q=85"
                alt="Rice fields and mountains in the Philippines"
              />
              <div>
                <strong>One community</strong>
                <span>Working together for inclusive progress</span>
              </div>
            </div>
            <div className="about-copy">
              <SectionHeading
                kicker="About our barangay"
                title="A community built on malasakit and shared responsibility"
              />
              <p>
                This portal is designed to bring public information and
                essential barangay services closer to every resident of M.
                Pandeño.
              </p>
              <div className="values">
                <div>
                  <Icon name="shield" />
                  <span>
                    <strong>Transparent governance</strong>
                    <small>Public information made clear and accessible.</small>
                  </span>
                </div>
                <div>
                  <Icon name="people" />
                  <span>
                    <strong>Inclusive service</strong>
                    <small>Programs that consider every sector.</small>
                  </span>
                </div>
                <div>
                  <Icon name="heart" />
                  <span>
                    <strong>Community first</strong>
                    <small>Responsive care rooted in local needs.</small>
                  </span>
                </div>
              </div>
              <a className="text-link" href="#officials">
                Meet your barangay leadership <Icon name="arrow" size={18} />
              </a>
            </div>
          </div>
        </section>

        <section className="stats-section" aria-label="Barangay statistics">
          <div className="container">
            <div className="stats-intro">
              <span>Barangay at a glance</span>
              <h2>Community information</h2>
              <p>
                Official figures will be published after validation by the
                Barangay Office.
              </p>
            </div>
            <div className="stats-grid">
              {[
                ["Total Population", "—", "people"],
                ["Households", "—", "home"],
                ["Registered Voters", "—", "check"],
                ["Puroks / Sitios", "—", "location"],
              ].map(([label, value, icon]) => (
                <div className="stat" key={label}>
                  <Icon name={icon as IconName} size={27} />
                  <strong>{value}</strong>
                  <span>{label}</span>
                  <small>Data to be confirmed</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section officials-section" id="officials">
          <div className="container">
            <div className="heading-row">
              <SectionHeading
                kicker="Public servants"
                title="Barangay officials"
                text="Your local leaders and public service team."
              />
              <a className="text-link" href="#contact">
                View all officials <Icon name="arrow" size={18} />
              </a>
            </div>
            <div className="officials-grid">
              {officials.map(([role, name], index) => (
                <article
                  className={`official-card ${index === 0 ? "lead" : ""}`}
                  key={role}
                >
                  <div className="portrait">
                    <Icon name="user" size={46} />
                  </div>
                  <span>{role}</span>
                  <h3>{name}</h3>
                  <p>Official profile pending publication.</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section programs-section" id="programs">
          <div className="container">
            <div className="projects-heading-row">
              <SectionHeading
                kicker="Building a better community"
                title="Projects & accomplishments"
                text="Documented barangay initiatives presented with clear status, project information, and source references."
              />
              <a className="button navy" href="#project-registry">
                View All Projects <Icon name="arrow" size={18} />
              </a>
            </div>

            <div
              className="project-filters"
              id="project-registry"
              aria-label="Filter projects"
            >
              {projectFilters.map((filter) => (
                <button
                  key={filter}
                  className={projectFilter === filter ? "active" : ""}
                  type="button"
                  aria-pressed={projectFilter === filter}
                  onClick={() => setProjectFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="project-scope-heading">
              <div>
                <span>Barangay projects</span>
                <h3>Local Projects & Accomplishments</h3>
              </div>
              <p>
                Projects directly documented for Barangay M. Pandeño are listed
                in this group.
              </p>
            </div>

            {barangayProjects.length > 0 ? (
              <div className="program-grid barangay-projects">
                {barangayProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    featured={project.id === "multi-purpose-building"}
                    open={openProject === project.id}
                    onToggle={() =>
                      setOpenProject(
                        openProject === project.id ? null : project.id,
                      )
                    }
                  />
                ))}
              </div>
            ) : (
              <ProjectEmptyState filter={projectFilter} />
            )}

            <div className="municipal-projects">
              <div className="project-scope-heading municipal">
                <div>
                  <span>Municipal context</span>
                  <h3>Related Municipal Development Projects</h3>
                </div>
                <p>
                  Municipality of Siniloan projects shown for public context.
                  These are not presented as Barangay M. Pandeño
                  accomplishments, and their exact barangay locations are not
                  claimed.
                </p>
              </div>

              {municipalProjects.length > 0 ? (
                <div className="program-grid municipal-grid">
                  {municipalProjects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      open={openProject === project.id}
                      onToggle={() =>
                        setOpenProject(
                          openProject === project.id ? null : project.id,
                        )
                      }
                    />
                  ))}
                </div>
              ) : (
                <ProjectEmptyState filter={projectFilter} compact />
              )}
            </div>

            <div className="future-programs">
              <div className="future-programs-intro">
                <span>Ready for future updates</span>
                <h3>Additional Community Development Categories</h3>
                <p>
                  No verified accomplishment records have been published in
                  these categories yet.
                </p>
              </div>
              <div className="future-category-grid">
                {futureProgramCategories.map((category) => (
                  <div key={category}>
                    <Icon name="document" size={20} />
                    <span>
                      <strong>{category}</strong>
                      <small>Awaiting official project information</small>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="transparency-section" id="transparency">
          <div className="container transparency-grid">
            <div>
              <SectionHeading
                light
                kicker="Open government"
                title="Transparency & financial information"
                text="Public access to verified budgets, reports, procurement notices, and accomplishment records."
              />
              <a className="button gold" href="#contact">
                View transparency documents <Icon name="arrow" size={18} />
              </a>
            </div>
            <div className="document-grid">
              {[
                "Annual Barangay Budget",
                "Budget Allocation",
                "Financial Reports",
                "Receipts & Expenditures",
                "Procurement Documents",
                "Accomplishment Reports",
                "Annual Investment Program",
              ].map((item) => (
                <a href="#contact" key={item}>
                  <Icon name="document" />
                  <span>
                    {item}
                    <small>Awaiting official upload</small>
                  </span>
                  <Icon name="arrow" size={17} />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="emergency-section">
          <div className="container emergency-inner">
            <div className="emergency-icon">
              <Icon name="phone" size={32} />
            </div>
            <div>
              <span>Emergency & public assistance</span>
              <h2>Know where to ask for help</h2>
              <p>
                Barangay hotline details are awaiting official verification. For
                immediate life-threatening emergencies, contact the appropriate
                national emergency service.
              </p>
            </div>
            <a className="button white" href="#contact">
              Contact Barangay Office <Icon name="arrow" size={18} />
            </a>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container">
            <SectionHeading
              kicker="We are here to help"
              title="Contact & location"
              text="Reach out to the Barangay Office for questions, assistance, and public service concerns."
            />
            <div className="contact-grid">
              <div className="contact-info">
                <div>
                  <Icon name="location" />
                  <span>
                    <small>Barangay Hall</small>
                    <strong>Barangay M. Pandeño, Siniloan, Laguna</strong>
                    <em>Exact address to be confirmed</em>
                  </span>
                </div>
                <div>
                  <Icon name="phone" />
                  <span>
                    <small>Contact number</small>
                    <strong>To be published</strong>
                    <em>Awaiting official verification</em>
                  </span>
                </div>
                <div>
                  <Icon name="mail" />
                  <span>
                    <small>Official email</small>
                    <strong>To be published</strong>
                    <em>Awaiting official verification</em>
                  </span>
                </div>
                <div>
                  <Icon name="clock" />
                  <span>
                    <small>Office hours</small>
                    <strong>To be confirmed</strong>
                    <em>Please check official advisories before visiting</em>
                  </span>
                </div>
                <div className="map-wrap">
                  <iframe
                    title="Map showing Barangay M. Pandeño area"
                    src="https://www.google.com/maps?q=Barangay%20M.%20Pande%C3%B1o%2C%20Siniloan%2C%20Laguna%2C%20Philippines&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
              <form className="contact-form" onSubmit={submitForm}>
                <div>
                  <span>Send an inquiry</span>
                  <h3>How can we assist you?</h3>
                  <p>
                    This demonstration form is ready to connect to the
                    barangay’s official request system.
                  </p>
                </div>
                <label>
                  Full name
                  <input required placeholder="Enter your full name" />
                </label>
                <div className="form-row">
                  <label>
                    Email address
                    <input
                      required
                      type="email"
                      placeholder="you@example.com"
                    />
                  </label>
                  <label>
                    Contact number
                    <input placeholder="Your contact number" />
                  </label>
                </div>
                <label>
                  Subject
                  <select defaultValue="">
                    <option value="" disabled>
                      Select a concern
                    </option>
                    <option>Public service inquiry</option>
                    <option>Document request</option>
                    <option>Community assistance</option>
                    <option>Other concern</option>
                  </select>
                </label>
                <label>
                  Message
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us how we can help"
                  />
                </label>
                <button className="button navy" type="submit">
                  Submit inquiry <Icon name="arrow" size={18} />
                </button>
                {sent && (
                  <p className="form-note" role="status">
                    <Icon name="check" size={18} /> Demo received. Online
                    submission will be enabled after official system
                    integration.
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-main">
          <div className="container footer-grid">
            <div className="footer-brand">
              <img src="/public/assets/barangay-seal.png" alt="" />
              <div>
                <span>Official Website</span>
                <strong>Barangay M. Pandeño</strong>
                <small>Siniloan, Laguna, Philippines</small>
              </div>
              <p>
                A modern public information and service portal for a connected,
                informed, and empowered community.
              </p>
            </div>
            <div>
              <h3>Government</h3>
              <a href="#about">About the Barangay</a>
              <a href="#officials">Barangay Officials</a>
              <a href="#programs">Programs & Projects</a>
              <a href="#transparency">Transparency</a>
            </div>
            <div>
              <h3>Public Services</h3>
              <a href="#services">Barangay Clearance</a>
              <a href="#services">Residency Certificate</a>
              <a href="#services">Business Clearance</a>
              <a href="#services">Community Assistance</a>
            </div>
            <div>
              <h3>Contact</h3>
              <p>M. Pandeño, Siniloan, Laguna</p>
              <p>Phone and email to be published</p>
              <a href="#contact">Send an inquiry</a>
              <div className="socials">
                <a href="#contact" aria-label="Facebook">
                  <Icon name="facebook" size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p>
              © {new Date().getFullYear()} Barangay M. Pandeño. For official use
              upon validation.
            </p>
            <div>
              <a href="#contact">Privacy Policy</a>
              <a href="#contact">Terms of Use</a>
              <a href="#home">Back to top ↑</a>
            </div>
          </div>
        </div>
        <div className="flag-line">
          <i />
          <i />
          <i />
        </div>
      </footer>
    </div>
  )
}
