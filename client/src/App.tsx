/**
 * 4tify — structurally divergent security themes.
 * Asset Protocol: a bright fixed-rail field dossier for considered commercial decisions.
 * Response Signal: a full-screen night-shift feed for immediate client confidence.
 */
import { useEffect, useState } from "react";
import "./overrides.css";
import "./corporate-themes.css";
import "./corporate-refinements.css";
import "./values-refinements.css";
import { CivicGuard, MetroVector, Watchtower } from "./CorporateThemes";
import { themeOptions, type ThemeMode } from "./theme";
import {
  ArrowDown,
  ArrowRight,
  Building2,
  Check,
  ChevronDown,
  ClipboardCheck,
  Clock3,
  Crosshair,
  MapPin,
  Menu,
  MonitorDot,
  Phone,
  Radio,
  ShieldCheck,
  Siren,
  UsersRound,
  X,
} from "lucide-react";

const ASSET_V = "?v=2";
const assets = {
  estateAccess: "/images/4tify-estate-access.jpg" + ASSET_V,
  estateHandover: "/images/4tify-estate-handover.jpg" + ASSET_V,
  responseHero: "/images/4tify-response-hero.jpg" + ASSET_V,
  responsePatrol: "/images/4tify-response-patrol.jpg" + ASSET_V,
};

const services = [
  { n: "01", title: "Access Control", copy: "Robust systems to manage commercial entry points, visitors and critical zones across your premises.", icon: ShieldCheck },
  { n: "02", title: "Intelligent CCTV", copy: "Proactive surveillance around stock, equipment, cash points, loading areas and perimeter pressure points.", icon: MonitorDot },
  { n: "03", title: "24/7 Monitoring", copy: "Our command center stays alert around security, medical or fire alarms and planned business escalation.", icon: Radio },
  { n: "04", title: "On-Site Personnel", copy: "Trained, accountable officers who provide a visible, professional presence where your operation needs it.", icon: UsersRound },
  { n: "05", title: "Armed Response", copy: "Rapid, vetted armed-response units ready to deploy the moment a threat is detected.", icon: Siren },
];

const portfolio = ["Guarding", "Access Control", "Investigations", "Risk Analysis", "Patrols", "Casual Guarding", "Cameras", "Pre-Employment Clearance", "Safe Call"];
const navItems = ["home", "services", "about", "areas", "faq", "contact"];
const faqs = [
  ["Are you registered with PSIRA?", "Yes. 4tify operates under PSIRA Registration 4899123 and is registered as Fourfify Services Gauteng (Pty) Ltd, Company No. 2022/631889/07."],
  ["Which areas do you cover?", "We operate across Benoni, Rynfield, Johannesburg and greater Gauteng."],
  ["Do you provide 24/7 monitoring?", "Our command center is always on alert, ready to dispatch assistance for any medical, fire or security alarm — day or night."],
  ["Can you secure business assets and stock?", "Yes. We build security layers around controlled access, visible deterrence, surveillance, professional presence and response planning."],
  ["Do you offer armed response?", "Yes. We provide rapid, vetted armed-response units ready to deploy the moment a threat is detected."],
  ["How do I request a security assessment?", "Use the contact form below or call us directly on 072 412 3856 for a complimentary, no-obligation assessment."],
];

function Mark({ inverse = false }: { inverse?: boolean }) {
  return <span className={`mark ${inverse ? "mark-inverse" : ""}`} aria-hidden="true"><i /><i /><i /><i /></span>;
}

function Brand({ compact = false }: { compact?: boolean }) {
  return <a className={`brand ${compact ? "brand-compact" : ""}`} href="#home" aria-label="4tify Specialized Security home"><Mark /><span><b>4TIFY</b><small>Specialized security</small></span></a>;
}

function ModeSwitch({ theme, onChange, condensed = false }: { theme: ThemeMode; onChange: (value: ThemeMode) => void; condensed?: boolean }) {
  const [open, setOpen] = useState(false);
  const active = themeOptions.find((option) => option.id === theme)?.label ?? "Response Signal";
  return <div className={`mode-switch ${condensed ? "mode-condensed" : ""}`}><button onClick={() => setOpen(!open)} aria-label="Change visual mode" aria-expanded={open}><span>{active}</span><ChevronDown size={16} /></button>{open && <div className="mode-list">{themeOptions.map((option) => <button key={option.id} className={theme === option.id ? "selected" : ""} onClick={() => { onChange(option.id); setOpen(false); }}><i />{option.label}</button>)}</div>}</div>;
}

function EstateDossier({ theme, onTheme }: { theme: ThemeMode; onTheme: (value: ThemeMode) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return <div className="estate-mode">
    <aside className="estate-rail">
      <Brand />
      <div className="estate-rail-meta"><span>Gauteng, RSA</span><i /><span>Commercial field dossier</span></div>
      <nav aria-label="Asset Protocol navigation">{navItems.map((item, index) => <a href={`#${item}`} key={item}><small>{String(index + 1).padStart(2, "0")}</small><span>{item}</span></a>)}</nav>
      <div className="estate-rail-bottom"><a className="estate-rail-call" href="tel:+27724123856"><Phone size={15} />Call 072 412 3856</a><ModeSwitch theme={theme} onChange={onTheme} condensed /></div>
    </aside>
    <header className="estate-mobile-head"><Brand compact /><div><ModeSwitch theme={theme} onChange={onTheme} condensed /><button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle estate navigation">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button></div></header>
    {menuOpen && <nav className="estate-mobile-nav">{navItems.map((item) => <a onClick={() => setMenuOpen(false)} href={`#${item}`} key={item}>{item}<ArrowRight size={17} /></a>)}<a href="tel:+27724123856">Call 072 412 3856</a></nav>}
    <main className="estate-canvas">
      <section id="home" className="dossier-cover">
        <div className="dossier-cover-copy"><p className="dossier-code">FILE // GP-4899123 / ASSET PROTECTION</p><h1>Protection that keeps business <em>moving forward.</em></h1><p className="dossier-intro">Professional commercial security for offices, retail sites, industrial facilities and logistics operations across Benoni, Johannesburg, and greater Gauteng.</p><div className="dossier-actions"><a href="#contact">Request an assessment <ArrowRight size={17} /></a><a href="tel:+27724123856"><Phone size={16} />Call now</a></div></div>
        <figure className="dossier-cover-image"><img src={assets.estateAccess} alt="Controlled private-security access at a Gauteng business site" /><figcaption><span className="status-pip" /> Perimeter / Access control <b>01</b></figcaption></figure>
        <div className="dossier-cover-index"><span>PSIRA Reg <b>4899123</b></span><span>Operating <b>Gauteng</b></span><span>Command <b>24 / 7</b></span></div>
      </section>
      <section id="services" className="estate-layers">
        <div className="dossier-section-head"><p>Protective map // layers of readiness</p><h2>Every layer has a purpose. <em>Every business has a plan.</em></h2><span>Swipe through the protection route <ArrowRight size={15} /></span></div>
        <div className="layer-track">{services.map((service) => { const Icon = service.icon; return <article className="layer-sheet" key={service.title}><div className="layer-sheet-top"><span>{service.n}</span><Icon size={27} /><b>Protective layer</b></div><div><h3>{service.title}</h3><p>{service.copy}</p></div><button aria-label={`Read about ${service.title}`}><ArrowRight size={21} /></button></article>; })}</div>
      </section>
      <section className="estate-assurance"><div><p>Why 4tify // commercial confidence</p><h2>Firm at the perimeter. <em>Focused on the operation.</em></h2><p className="estate-body-copy">Choosing a security partner for a business is a decision built on trust and accountability. From Benoni to Johannesburg, our systems are designed to protect premises, stock, equipment, people and operational continuity with a disciplined professional presence.</p><a href="#contact">Build a site-specific plan <ArrowRight size={17} /></a></div><aside><span>Security posture</span><b>24<br /><em>/ 7</em></b><p>Command remains ready around the business interests in your care.</p></aside></section>
      <section id="about" className="estate-profile"><div className="profile-image-wrap"><figure><img src={assets.estateHandover} alt="Officers completing a professional operational security handover" /><figcaption><ClipboardCheck size={19} />Operational handover / Field-ready personnel</figcaption></figure><span className="image-coordinate">S26° 10’ / E28° 18’</span></div><div className="profile-sheet"><p>Unit profile // who we are</p><h2>Local knowledge. <em>Disciplined standards.</em></h2><p>A South African security services provider registered and operating out of Benoni, Gauteng. We support commercial clients with trained personnel, technology and round-the-clock command structured around access, asset protection and business continuity.</p><p>Every site plan starts with its manager. Together we agree practical instructions; each officer owns their shift, reports risks to people or property, and is treated with respect by a company that manages its finances with integrity.</p><blockquote>“Precautions are better than a cure.”</blockquote><dl><div><dt>Director</dt><dd>Khethwayo Phillip Zulu</dd></div><div><dt>Consultant</dt><dd>Peter Edmund Vosloo</dd></div><div><dt>PSIRA registration</dt><dd>4899123</dd></div><div><dt>Company registration</dt><dd>2022/631889/07</dd></div></dl></div></section>
      <section className="estate-portfolio"><p>Full service portfolio // Fourfify Services Gauteng (Pty) Ltd</p><div>{portfolio.map((item, index) => <span key={item}><b>{String(index + 1).padStart(2, "0")}</b>{item}</span>)}</div></section>
      <section id="areas" className="estate-coverage"><div className="coverage-title"><p>Area of operations // Gauteng</p><h2>Close to your business. <em>Clear on the ground.</em></h2><p>Proudly protecting commercial interests across Gauteng — from Benoni and Rynfield to the wider Johannesburg metro.</p></div><div className="coverage-map" aria-label="Gauteng coverage locations"><div className="map-route" /><span className="pin pin-1"><i /><b>Benoni</b><small>Head office base</small></span><span className="pin pin-2"><i /><b>Rynfield</b><small>Rynfield, Benoni</small></span><span className="pin pin-3"><i /><b>Johannesburg</b><small>Greater Jozi metro</small></span><span className="pin pin-4"><i /><b>Gauteng</b><small>Province-wide</small></span></div></section>
      <section id="faq" className="estate-faq"><div><p>Briefing // frequently asked</p><h2>Clear answers, before you <em>need to ask twice.</em></h2><a href="tel:+27724123856"><Phone size={16} />Speak to a person</a></div><div className="estate-faq-list">{faqs.map(([q, a], index) => <details open={index === 0} key={q}><summary><span>{String(index + 1).padStart(2, "0")}</span>{q}<ChevronDown size={17} /></summary><p>{a}</p></details>)}</div></section>
      <section id="contact" className="estate-contact"><div className="estate-contact-intro"><p>Request assessment // next action</p><h2>Tell us what needs protecting. <em>We will help map the response.</em></h2><p>Contact 4tify for a complimentary, no-obligation business security assessment.</p><a href="tel:+27724123856"><Phone size={17} />072 412 3856</a></div><form action="mailto:phillip.zulu@ymail.com" method="post" encType="text/plain"><label>Full name<input name="name" required placeholder="Your full name" /></label><label>Business email<input name="email" type="email" required placeholder="name@company.co.za" /></label><label>Phone<input name="phone" type="tel" placeholder="Your contact number" /></label><label>Site or requirement<textarea name="message" rows={5} required placeholder="Tell us about your premises, assets or concern" /></label><button type="submit">Send assessment request <ArrowRight size={17} /></button><small>Your enquiry opens in your email app.</small></form></section>
    </main>
    <footer className="estate-footer"><Brand compact /><span>© {new Date().getFullYear()} 4tify Services</span><a href="mailto:info@fourtifyservices.co.za">info@fourtifyservices.co.za</a></footer>
  </div>;
}

function ResponseFeed({ theme, onTheme }: { theme: ThemeMode; onTheme: (value: ThemeMode) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return <div className="response-mode">
    <section id="home" className="night-command">
      <img className="night-command-image" src={assets.responseHero} alt="Private-security response vehicle at a secured Gauteng property at night" />
      <div className="night-command-filter" />
      <div className="night-command-top"><Brand /><span className="night-status"><i />Command posture / 24-7</span><ModeSwitch theme={theme} onChange={onTheme} /><button className="night-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle response navigation">{menuOpen ? <X size={21} /> : <Menu size={21} />}</button></div>
      {menuOpen && <nav className="night-mobile-nav">{navItems.map((item) => <a onClick={() => setMenuOpen(false)} href={`#${item}`} key={item}>{item}<ArrowRight size={17} /></a>)}</nav>}
      <div className="night-command-core"><p><span className="status-pip" />Gauteng after dark // Ready to act</p><h1>When the operation changes, your response <em>should not hesitate.</em></h1><p className="night-intro">Private-security coverage for corporate offices, retail sites, industrial facilities and logistics operations across Benoni, Johannesburg, and greater Gauteng.</p><div className="night-core-actions"><a href="tel:+27724123856"><Phone size={19} />Call 072 412 3856</a><a href="#contact">Request assessment <ArrowRight size={18} /></a></div></div>
      <aside className="readiness-ring"><span>Response<br />readiness</span><b>24<em>/7</em></b><i className="ring-sweep" /><small>Prepared. present.<br />professional.</small></aside>
      <div className="command-dock"><a href="#services"><small>01</small><b>Capabilities</b><ArrowDown size={16} /></a><a href="#about"><small>02</small><b>Who we are</b><ArrowDown size={16} /></a><a href="#areas"><small>03</small><b>Gauteng coverage</b><ArrowDown size={16} /></a><a className="dock-call" href="tel:+27724123856"><Phone size={18} />Direct call route</a></div>
    </section>
    <section className="signal-ticker" aria-label="4tify core services"><div><span>Access control</span><i /> <span>Intelligent CCTV</span><i /> <span>24 / 7 monitoring</span><i /> <span>On-site personnel</span><i /> <span>Armed response</span><i /> <span>Gauteng private security</span><i /></div></section>
    <section className="response-first-step"><div className="first-step-intro"><p>First move // in a moment that matters</p><h2>Make the call. <em>We map the next layer.</em></h2><p>No generic security packages. Start with the site, the risk, and the people inside it.</p><a href="#contact">Start an assessment <ArrowRight size={17} /></a></div><ol><li><span>01</span><b>Brief the site manager</b><p>Agree the site instructions, priorities and business interests that need protection.</p></li><li><span>02</span><b>Assign accountable shifts</b><p>Each officer owns their duties, arrival, reporting and professional conduct.</p></li><li><span>03</span><b>Identify protective gaps</b><p>Understand access, visibility, assets, personnel and response needs.</p></li><li><span>04</span><b>Act before loss occurs</b><p>Report activity that could endanger people, damage property or interrupt operations.</p></li></ol></section>
    <section id="services" className="response-capabilities"><figure><img src={assets.responsePatrol} alt="Private-security patrol managing a commercial perimeter at night" /><figcaption><span className="status-pip" />Live posture / Perimeter control</figcaption></figure><div className="capability-console"><div className="capability-console-head"><p>Response protocol // capabilities</p><h2>The whole <em>operation.</em></h2><span>Scroll to inspect</span></div><div className="capability-stack">{services.map((service) => { const Icon = service.icon; return <article key={service.title}><span>{service.n}</span><Icon size={24} /><div><h3>{service.title}</h3><p>{service.copy}</p></div><ArrowRight size={18} /></article>; })}</div></div></section>
    <section id="about" className="response-protocol"><div className="protocol-image"><img src={assets.estateHandover} alt="Security officers completing a disciplined operational handover" /><span>Field handover<br /> / 01</span></div><div className="protocol-copy"><p>Unit profile // who we are</p><h2>Composure comes from <em>preparation.</em></h2><p>A South African security services provider registered and operating out of Benoni, Gauteng. We protect commercial clients with a blend of trained personnel, technology and round-the-clock command around their people, premises, stock and critical operations.</p><blockquote>“It is wiser to take preventive measures to avoid problems rather than trying to fix them after they occur.”</blockquote><div className="protocol-record"><span><small>Director</small>Khethwayo Phillip Zulu</span><span><small>Consultant</small>Peter Edmund Vosloo</span><span><small>PSIRA registration</small>4899123</span><span><small>Company registration</small>2022/631889/07</span></div></div></section>
    <section className="response-portfolio"><p>Full service portfolio / 09 protective lines</p><div>{portfolio.map((item, index) => <span key={item}><b>{String(index + 1).padStart(2, "0")}</b>{item}</span>)}</div></section>
    <section id="areas" className="response-coverage"><div><p>Area of operations // Gauteng</p><h2>Positioned for the businesses that <em>cannot be left to chance.</em></h2><p>Protecting commercial interests across Gauteng — from Benoni and Rynfield to the wider Johannesburg metro.</p></div><div className="response-zone-list">{[["Benoni", "Head office base"], ["Rynfield", "Rynfield, Benoni"], ["Johannesburg", "Greater Jozi metro"], ["Gauteng", "Province-wide"]].map(([name, detail], index) => <article key={name}><span>{String(index + 1).padStart(2, "0")}</span><MapPin size={18} /><h3>{name}</h3><p>{detail}</p></article>)}</div></section>
    <section id="faq" className="response-faq"><div className="response-faq-intro"><p>Briefing // frequently asked</p><h2>Answers at the <em>speed you need them.</em></h2><a href="tel:+27724123856"><Phone size={17} />Speak to a person</a></div><div>{faqs.map(([q, a], index) => <details open={index === 0} key={q}><summary><span>{String(index + 1).padStart(2, "0")}</span>{q}<ChevronDown size={18} /></summary><p>{a}</p></details>)}</div></section>
    <section id="contact" className="response-contact"><div className="response-contact-call"><p><span className="status-pip" />Command channels</p><h2>Need a clear next step? <em>Make the direct call.</em></h2><a href="tel:+27724123856">072 412 3856 <Phone size={22} /></a><div><span>Land line <b>087 700 4492</b></span><span>Email <b>phillip.zulu@ymail.com</b></span><span>Head office <b>84 Pretoria Road, Rynfield, Benoni</b></span></div></div><form action="mailto:phillip.zulu@ymail.com" method="post" encType="text/plain"><p>Request assessment // secure the next move</p><label>Full name<input name="name" required placeholder="Your full name" /></label><label>Email<input name="email" type="email" required placeholder="name@email.com" /></label><label>Phone<input name="phone" type="tel" placeholder="Your contact number" /></label><label>How can we help?<textarea name="message" rows={4} required placeholder="Tell us what needs securing" /></label><button type="submit">Send request <ArrowRight size={18} /></button><small>Your enquiry opens in your email app.</small></form></section>
    <footer className="response-footer"><Brand compact /><span>PSIRA REG 4899123</span><span>© {new Date().getFullYear()} 4tify Services</span></footer>
    <a className="response-mobile-call" href="tel:+27724123856"><Phone size={18} />Call 072 412 3856 <ArrowRight size={17} /></a>
  </div>;
}

function ThemeDock({ theme, onTheme }: { theme: ThemeMode; onTheme: (value: ThemeMode) => void }) {
  return (
    <div className="theme-dock">
      <span className="theme-dock-label">Theme</span>
      <ModeSwitch theme={theme} onChange={onTheme} />
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState<ThemeMode>("response");
  useEffect(() => { const query = new URLSearchParams(window.location.search).get("theme"); const saved = window.localStorage.getItem("4tify-theme"); if (themeOptions.some((option) => option.id === query)) setTheme(query as ThemeMode); else if (themeOptions.some((option) => option.id === saved)) setTheme(saved as ThemeMode); }, []);
  const onTheme = (next: ThemeMode) => { setTheme(next); window.localStorage.setItem("4tify-theme", next); window.setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50); };
  let body = null;
  if (theme === "estate") body = <EstateDossier theme={theme} onTheme={onTheme} />;
  else if (theme === "response") body = <ResponseFeed theme={theme} onTheme={onTheme} />;
  else if (theme === "metro") body = <MetroVector theme={theme} onTheme={onTheme} />;
  else if (theme === "watchtower") body = <Watchtower theme={theme} onTheme={onTheme} />;
  else body = <CivicGuard theme={theme} onTheme={onTheme} />;
  return <>{body}<ThemeDock theme={theme} onTheme={onTheme} /></>;
}

export default App;
