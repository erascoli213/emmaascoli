import { Fragment, useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import { ArrowDown, ArrowUpRight, ArrowRight, Heart, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { StarDoodle, LoopDoodle, ProjectArt } from '@/components/portfolio-art';
import { AboutCarousel } from '@/components/about-carousel';
import { projects } from '@/lib/projects';
import { ExpandableStudyImage } from '@/components/expandable-study-image';
import type { StoryConcept, StoryImage } from '@/lib/projects';
import logoAsset from '@/assets/pink-simple-logo.png.asset.json';

function StoryImages({ images, proportional, stacked }: { images: StoryImage[]; proportional?: boolean; stacked?: boolean }) {
  const plain = images.filter((im) => !im.note);
  const noted = images.filter((im) => im.note);
  const pairStyle = !stacked && plain.length === 2 && plain[0] && plain[1]
    ? (proportional
      ? ({ gridTemplateColumns: `${plain[0].w}fr ${plain[1].w}fr` } as CSSProperties)
      : ({ '--pair-aspect': `${plain[0].w} / ${plain[0].h}` } as CSSProperties))
    : undefined;
  return (
    <>
      {plain.length > 0 && (
        <div
          className={stacked ? 'story-images' : plain.length === 2 ? 'story-images two' : plain.length > 2 ? 'story-images many' : 'story-images'}
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

const DEFAULT_TITLE = 'Emma Ascoli · Product Designer';

function readProjectParam(): string | undefined {
  const p = new URLSearchParams(window.location.search).get('project');
  return p ?? undefined;
}

function useProjectParam(): [string | undefined, (slug: string | null) => void] {
  const [slug, setSlug] = useState<string | undefined>(() => readProjectParam());
  useEffect(() => {
    const onPop = () => setSlug(readProjectParam());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);
  const update = (next: string | null) => {
    const url = new URL(window.location.href);
    if (next) url.searchParams.set('project', next); else url.searchParams.delete('project');
    if (next) window.history.pushState(null, '', url); else window.history.replaceState(null, '', url);
    setSlug(next ?? undefined);
  };
  return [slug, update];
}

export function Index() {
  const [projectSlug, setProjectSlug] = useProjectParam();
  const selected = projects.find((p) => p.slug === projectSlug) ?? null;
  const setSelected = (p: typeof projects[number] | null) => setProjectSlug(p ? p.slug : null);
  useEffect(() => {
    document.title = selected ? `${selected.name} · Emma Ascoli case study` : DEFAULT_TITLE;
  }, [selected]);
  const [openProcess, setOpenProcess] = useState<number | null>(null);
  const process = [
    { name: 'Learn the system', note: 'Understand the tech before the screens.', detail: 'Get fluent in the protocols, APIs, and constraints behind the experience, like SCIM, SSO, and infrastructure graphs, so I can ask engineers sharper questions and spot edge cases early.' },
    { name: 'Talk to the admins', note: 'Real customers, early and often.', detail: 'Interview the security and platform engineers who live with the problem, study the tools they already trust, and keep a feedback loop open with early adopters throughout.' },
    { name: 'Design with engineering', note: 'Engineers are my closest partners.', detail: 'Sketch flows alongside back-end and front-end engineers, pressure-test ideas against real constraints, and jump in wherever the team needs me to keep things moving.' },
    { name: 'Design for day 2', note: 'Trust at scale, long after setup.', detail: 'Go beyond the happy path: system status, failure states, safe ways to undo, and clear documentation, so people can rely on the product once thousands of things are running.' },
  ];
  return (
    <div className="portfolio">
      <header className="site-header"><a href="#home" className="site-logo" aria-label="Emma Ascoli home"><img src={logoAsset.url} alt="Emma Ascoli" width="1000" height="271"/></a><nav aria-label="Main navigation"><a href="#work">Some of my work</a><a href="#about">More about me</a><Button asChild variant="outline" className="nav-contact"><a href="https://www.linkedin.com/in/emma-ascoli" target="_blank" rel="noopener noreferrer">Let’s connect <ArrowUpRight/></a></Button></nav></header>
      <main>
        <section id="home" className="hero">
          <div className="hero-main"><span className="hero-eyebrow"><span className="tiny-spark">✳</span> CURIOUS MIND. THOUGHTFUL DESIGN.</span><div className="hero-title"><h1>EMMA ASCOLI<span className="title-dot">.</span></h1></div><p>A technical product designer with a process rooted<br className="desktop-break"/> in <span>curiosity</span> and <span>collaboration.</span></p><Button asChild className="pill-button"><a href="#work">Take a look at my work <ArrowDown size={17}/></a></Button></div>
          <div className="hero-doodles" aria-hidden="true"><LoopDoodle className="hero-loop"/></div>
        </section>
        <section id="work" className="work-section"><div className="section-wrap"><div className="section-top"><div><span className="eyebrow">01 / SOME OF MY WORK</span><h2>Making complex infrastructure<br/> feel simple<span className="pink-period">.</span></h2></div><p>A couple of my most recent projects.</p></div><div className="project-grid">{projects.map(project => <article className="project-card" key={project.slug}><Button variant="ghost" className="project-image-button" onClick={() => setSelected(project)} aria-label={`Read ${project.name} case study`}><ProjectArt theme={project.theme}/><span className="project-open"><ArrowUpRight/></span></Button><div className="project-meta"><span>{project.category}</span><span>{project.year}</span></div><div className="project-heading"><h3>{project.name}</h3></div><p>{project.description}</p></article>)}</div></div></section>
        
          <section id="about" className="about-section section-wrap"><div className="about-mark"><AboutCarousel/><StarDoodle className="about-star"/></div><div className="about-copy"><span className="eyebrow">02 / MORE ABOUT ME</span><h2>Hi, I’m Emma<span className="pink-period">.</span></h2><p>I’m a product designer drawn to complex, technical products: the identity systems, infrastructure tools, and admin experiences that teams rely on every day. At HashiCorp and Klaviyo, I designed for enterprise scale, where clarity and trust matter more than anything.</p><p>I care about the big picture and the little details: understanding how the system really works, the right words in a confirmation dialog, the status badge that tells an admin everything is OK. Curiosity got me into this work, and collaboration is how the best of it gets made.<br/><br/>On a more personal note, I'm based in Boston, I love the outdoors (exploring national parks), have a 5 year old pup named Winston who I adore, and teach reformer pilates in my free time!</p><span className="handwritten">Curious first, clear always.</span></div></section>
      </main><footer className="site-footer"><a href="#home" className="site-logo" aria-label="Emma Ascoli home"><img src={logoAsset.url} alt="Emma Ascoli" width="1000" height="271"/></a><span>Made with curiosity & a little heart.</span><Button asChild variant="ghost" className="back-top"><a href="#home">Back to top <ArrowUpRight/></a></Button></footer>
      <Dialog open={selected !== null} onOpenChange={(open) => { if (!open) setSelected(null); }}><DialogContent className="case-dialog">{selected && <><span className="eyebrow">{selected.kind === 'concept' ? 'INDEPENDENT CONCEPT' : ''}{selected.category}</span><DialogTitle className="case-title">{selected.name}</DialogTitle>{selected.hook ? <div className="story-hook">{selected.hook.line && <p className="story-hook-line">{selected.hook.line}</p>}{selected.hook.label && <span className="eyebrow">{selected.hook.label}</span>}<div className="story-hook-body">{selected.hook.body.map((t) => <p key={t}>{t}</p>)}</div><dl className="story-glance">{selected.hook.glance.map((g) => <div key={g.label}><dt>{g.label}</dt><dd>{g.href ? <a className="story-link" href={g.href} target="_blank" rel="noopener noreferrer">{g.value} <ArrowUpRight size={14}/></a> : g.value}</dd></div>)}</dl><div className="story-hook-image"><ExpandableStudyImage image={selected.hook.image} /></div></div> : <ProjectArt theme={selected.theme}/>}{selected.story.length > 0 ? <div className="case-story">{selected.story.map((sec) => <Fragment key={sec.heading}><section className={sec.learnings ? 'story-section story-discovery' : 'story-section'}>{sec.learnings && <StarDoodle className="story-discovery-star"/>}<span className="eyebrow">{sec.eyebrow}</span><h3 className="case-subheading">{sec.heading}</h3>{sec.body?.map((t) => <p key={t}>{t}</p>)}{sec.link && <p><a className="story-link" href={sec.link.href} target="_blank" rel="noopener noreferrer">{sec.link.label} <ArrowUpRight size={14}/></a></p>}{sec.bullets && <StoryBullets bullets={sec.bullets} label={sec.learnings ? 'METHODS' : undefined} />}{sec.learnings && <StoryLearnings learnings={sec.learnings} />}{sec.concepts && <StoryConcepts concepts={sec.concepts} />}{sec.highlight && !sec.learnings && <blockquote className="story-highlight">{sec.highlight}</blockquote>}{sec.images && <StoryImages images={sec.images} stacked={sec.stackImages} />}</section>{sec.highlight && sec.learnings && <section className="story-section story-after-discovery"><blockquote className="story-highlight">{sec.highlight}</blockquote></section>}</Fragment>)}</div> : <><div className="case-overview"><div><span className="eyebrow">THE PROBLEM</span><p>{selected.problem}</p></div><div><span className="eyebrow">THE OPPORTUNITY</span><p>{selected.goal}</p></div></div><h3 className="case-subheading">From first step to feeling confident.</h3><div className="case-flow">{selected.flow.map((step,i) => <div key={step}><span>0{i+1}</span><strong>{step}</strong>{i < 2 && <ArrowRight/>}</div>)}</div><h3 className="case-subheading">The thinking behind the details.</h3>{selected.decisions.map(([title,copy]) => <div className="case-decision" key={title}><h4>{title}</h4><p>{copy}</p></div>)}<div className="case-impact"><span className="eyebrow">INTENDED IMPACT & NEXT STEPS</span><p>{selected.impact}</p></div></>}</>}</DialogContent></Dialog>
    </div>
  );
}
