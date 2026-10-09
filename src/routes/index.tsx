import { createFileRoute } from "@tanstack/react-router";
import { useState } from 'react';
import type { CSSProperties } from 'react';
import { ArrowDown, ArrowUpRight, ArrowRight, Heart, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { StarDoodle, LoopDoodle, ProjectArt } from '@/components/portfolio-art';
import { AboutCarousel } from '@/components/about-carousel';
import { projects } from '@/lib/projects';
import { ExpandableStudyImage } from '@/components/expandable-study-image';
import type { StoryConcept, StoryImage } from '@/lib/projects';
import logoAsset from '@/assets/pink-simple-logo.png.asset.json';

function StoryImages({ images, proportional }: { images: StoryImage[]; proportional?: boolean }) {
  const plain = images.filter((im) => !im.note);
  const noted = images.filter((im) => im.note);
  const pairStyle = plain.length === 2 && plain[0] && plain[1]
    ? (proportional
      ? ({ gridTemplateColumns: `${plain[0].w}fr ${plain[1].w}fr` } as CSSProperties)
      : ({ '--pair-aspect': `${plain[0].w} / ${plain[0].h}` } as CSSProperties))
    : undefined;
  return (
    <>
      {plain.length > 0 && (
        <div
          className={plain.length === 2 ? 'story-images two' : plain.length > 2 ? 'story-images many' : 'story-images'}
          style={pairStyle}
        >
          {plain.map((im) => <ExpandableStudyImage key={im.src} image={im} />)}
        </div>
      )}
      {noted.map((im) => (
        <div className="story-noted" key={im.src}>
          <ul className="story-bullets story-note-bullets"><li>{im.note}</li></ul>
          <ExpandableStudyImage image={im} />
        </div>
      ))}
    </>
  );
}


function StoryBullets({ bullets, label }: { bullets: string[]; label?: string | undefined }) {
  const list = <ul className="story-bullets">{bullets.map((b) => <li key={b}>{b}</li>)}</ul>;
  return label ? <div className="story-methods"><span className="story-methods-label">{label}</span>{list}</div> : list;
}

function StoryLearnings({ learnings }: { learnings: string[] }) {
  return (
    <div className="story-learnings">
      <span className="story-learnings-label">what we learned</span>
      <ul className="story-learnings-grid">
        {learnings.map((l) => <li className="story-learning-card" key={l}><span className="story-learnings-mark" aria-hidden="true">✳</span><p>{l}</p></li>)}
      </ul>
    </div>
  );
}

function StoryConcepts({ concepts }: { concepts: StoryConcept[] }) {
  return (
    <div className="story-concepts">
      {concepts.map((c) => (
        <div className="story-concept-card" key={c.title}>
          <div className="story-concept-head"><span className="story-concept-mark" aria-hidden="true">✳</span><h4 className="story-concept-title">{c.title}</h4></div>
          <StoryImages images={c.images} proportional />
        </div>
      ))}
    </div>
  );
}

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>): { project?: string } =>
    typeof search['project'] === 'string' ? { project: search['project'] } : {},
  head: ({ match }) => {
    const p = projects.find((x) => x.slug === match.search.project);
    const title = p ? `${p.name} · Emma Ascoli case study` : 'Emma Ascoli · Product Designer';
    const description = p ? p.description : 'A product design portfolio rooted in curiosity, collaboration, and a little playful thinking. Explore Emma Ascoli’s work and process.';
    return { meta: [
      { title },
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: p ? p.description : 'Thoughtful experiences, playful details. Explore product design work and the process behind it.' },
      { property: 'og:type', content: p ? 'article' : 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ] };
  },
  component: Index,
});

function Index() {
  const { project: projectSlug } = Route.useSearch();
  const navigate = Route.useNavigate();
  const selected = projects.find((p) => p.slug === projectSlug) ?? null;
  const setSelected = (p: typeof projects[number] | null) =>
    navigate({ search: p ? { project: p.slug } : {}, resetScroll: false, replace: !p });
  const [openProcess, setOpenProcess] = useState<number | null>(null);
  const process = [
    { name: 'Learn the system', note: 'Understand the tech before the screens.', detail: 'Get fluent in the protocols, APIs, and constraints behind the experience, like SCIM, SSO, and infrastructure graphs, so I can ask engineers sharper questions and spot edge cases early.' },
    { name: 'Talk to the admins', note: 'Real customers, early and often.', detail: 'Interview the security and platform engineers who live with the problem, study the tools they already trust, and keep a feedback loop open with early adopters throughout.' },
    { name: 'Design with engineering', note: 'Engineers are my closest partners.', detail: 'Sketch flows alongside back-end and front-end engineers, pressure-test ideas against real constraints, and jump in wherever the team needs me to keep things moving.' },
    { name: 'Design for day 2', note: 'Trust at scale, long after setup.', detail: 'Go beyond the happy path: system status, failure states, safe ways to undo, and clear documentation, so people can rely on the product once thousands of things are running.' },
  ];
  return (
    <div className="portfolio">
      <header className="site-header"><a href="#home" className="site-logo" aria-label="Emma Ascoli home"><img src={logoAsset.url} alt="Emma Ascoli" width="1029" height="279"/></a><nav aria-label="Main navigation"><a href="#work">Some of my work</a><a href="#about">More about me</a><Button asChild variant="outline" className="nav-contact"><a href="https://www.linkedin.com/in/emma-ascoli" target="_blank" rel="noopener noreferrer">Let’s connect <ArrowUpRight/></a></Button></nav></header>
      <main>
        <section id="home" className="hero">
          <div className="hero-main"><span className="hero-eyebrow"><span className="tiny-spark">✳</span> CURIOUS MIND. THOUGHTFUL DESIGN.</span><div className="hero-title"><h1>EMMA ASCOLI<span className="title-dot">.</span></h1></div><p>A technical product designer with a process rooted<br className="desktop-break"/> in <span>curiosity</span> and <span>collaboration.</span></p><Button asChild className="pill-button"><a href="#work">Take a look at my work <ArrowDown size={17}/></a></Button></div>
          <div className="hero-doodles" aria-hidden="true"><LoopDoodle className="hero-loop"/></div>
        </section>
        <section id="work" className="work-section"><div className="section-wrap"><div className="section-top"><div><span className="eyebrow">01 / SOME OF MY WORK</span><h2>A few things I’ve<br/> put my heart into<span className="pink-period">.</span></h2></div><p>Turning complex challenges into <br/>simple, meaningful experiences.</p></div><div className="project-grid">{projects.map(project => <article className="project-card" key={project.slug}><Button variant="ghost" className="project-image-button" onClick={() => setSelected(project)} aria-label={`Read ${project.name} case study`}><ProjectArt theme={project.theme}/><span className="project-open"><ArrowUpRight/></span></Button><div className="project-meta"><span>{project.category}</span><span>{project.year}</span></div><div className="project-heading"><h3>{project.name}</h3><Button variant="ghost" size="icon" className="project-link" onClick={() => setSelected(project)} aria-label={`Open ${project.name}`}><ArrowUpRight/></Button></div><p>{project.description}</p></article>)}</div></div></section>
        <section id="process" className="process-section"><div className="section-wrap"><div className="section-top"><div><span className="eyebrow">02 / THE WAY I WORK</span><h2>A curious process.<br/>A considered outcome.</h2></div><LoopDoodle className="process-loop"/></div><div className="process-grid">{process.map((step, i) => <div className="process-item" key={step.name}><span className="process-number">0{i + 1}</span><Button variant="ghost" className="process-toggle" onClick={() => setOpenProcess(openProcess === i ? null : i)} aria-expanded={openProcess === i}><span>{step.name}</span><span className="process-icon" aria-hidden="true"><Minus style={{display: openProcess === i ? undefined : 'none'}}/></span></Button><p>{step.note}</p><p className="process-detail" hidden={openProcess !== i}>{step.detail}</p></div>)}</div><div className="process-footer"><Heart size={16}/><span>Always collaborative. Never a straight line.</span><svg viewBox="0 0 200 24" fill="none" aria-hidden="true"><path d="M2 12c30-35 25 35 50 0s25 35 50 0 25 35 50 0 30 0 45 0" stroke="currentColor" strokeWidth="1.5"/></svg></div></div></section>
          <section id="about" className="about-section section-wrap"><div className="about-mark"><AboutCarousel/><StarDoodle className="about-star"/></div><div className="about-copy"><span className="eyebrow">03 / MORE ABOUT ME</span><h2>Hi, I’m Emma<span className="pink-period">.</span></h2><p>I’m a product designer who believes the best ideas happen when we stay curious and create together.</p><p>I care about the big picture and the little details, the thoughtful flow, the right words, the tiny moment that makes an experience feel human.<br/><br/>On a more personal note, I'm based in Boston, I love the outdoors (exploring national parks), have a 5 year old pup named Winston who I adore, and teach reformer pilates in my free time!</p><span className="handwritten">A little empathy goes a long way.</span></div></section>
      </main><footer className="site-footer"><a href="#home" className="site-logo" aria-label="Emma Ascoli home"><img src={logoAsset.url} alt="Emma Ascoli" width="1029" height="279"/></a><span>Made with curiosity & a little heart.</span><Button asChild variant="ghost" className="back-top"><a href="#home">Back to top <ArrowUpRight/></a></Button></footer>
      <Dialog open={selected !== null} onOpenChange={(open) => { if (!open) setSelected(null); }}><DialogContent className="case-dialog">{selected && <><span className="eyebrow">{selected.kind === 'concept' ? 'INDEPENDENT CONCEPT' : ''}{selected.category}</span><DialogTitle className="case-title">{selected.name}</DialogTitle><DialogDescription className="case-description">{selected.title}</DialogDescription>{selected.hook ? <div className="story-hook"><p className="story-hook-line">{selected.hook.line}</p><div className="story-hook-body">{selected.hook.body.map((t) => <p key={t}>{t}</p>)}</div><dl className="story-glance">{selected.hook.glance.map((g) => <div key={g.label}><dt>{g.label}</dt><dd>{g.value}</dd></div>)}</dl><div className="story-hook-image"><ExpandableStudyImage image={selected.hook.image} /></div></div> : <ProjectArt theme={selected.theme}/>}{selected.story.length > 0 ? <div className="case-story">{selected.story.map((sec) => <section className={sec.learnings ? 'story-section story-discovery' : 'story-section'} key={sec.heading}>{sec.learnings && <StarDoodle className="story-discovery-star"/>}<span className="eyebrow">{sec.eyebrow}</span><h3 className="case-subheading">{sec.heading}</h3>{sec.body?.map((t) => <p key={t}>{t}</p>)}{sec.bullets && <StoryBullets bullets={sec.bullets} label={sec.learnings ? 'METHODS' : undefined} />}{sec.learnings && <StoryLearnings learnings={sec.learnings} />}{sec.concepts && <StoryConcepts concepts={sec.concepts} />}{sec.highlight && <blockquote className="story-highlight">{sec.highlight}</blockquote>}{sec.images && <StoryImages images={sec.images} />}</section>)}</div> : <><div className="case-overview"><div><span className="eyebrow">THE PROBLEM</span><p>{selected.problem}</p></div><div><span className="eyebrow">THE OPPORTUNITY</span><p>{selected.goal}</p></div></div><h3 className="case-subheading">From first step to feeling confident.</h3><div className="case-flow">{selected.flow.map((step,i) => <div key={step}><span>0{i+1}</span><strong>{step}</strong>{i < 2 && <ArrowRight/>}</div>)}</div><h3 className="case-subheading">The thinking behind the details.</h3>{selected.decisions.map(([title,copy]) => <div className="case-decision" key={title}><h4>{title}</h4><p>{copy}</p></div>)}<div className="case-impact"><span className="eyebrow">INTENDED IMPACT & NEXT STEPS</span><p>{selected.impact}</p></div></>}</>}</DialogContent></Dialog>
    </div>
  );
}
