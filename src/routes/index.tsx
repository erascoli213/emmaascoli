import { createFileRoute } from "@tanstack/react-router";
import { useState } from 'react';
import type { CSSProperties } from 'react';
import { ArrowDown, ArrowUpRight, ArrowRight, Heart, Hand, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { StarDoodle, LoopDoodle, ProjectArt } from '@/components/portfolio-art';
import emmaPortrait from '@/assets/emma-portrait.png.asset.json';
import { projects } from '@/lib/projects';
import logoAsset from '@/assets/pink-simple-logo.png.asset.json';

function StoryImages({ images }: { images: StoryImage[] }) {
  const plain = images.filter((im) => !im.note);
  const noted = images.filter((im) => im.note);
  return (
    <>
      {plain.length > 0 && (
        <div
          className={plain.length === 2 ? 'story-images two' : plain.length > 2 ? 'story-images many' : 'story-images'}
          style={plain.length === 2 ? ({ '--pair-aspect': `${plain[0].w} / ${plain[0].h}` } as CSSProperties) : undefined}
        >
          {plain.map((im) => <ExpandableStudyImage key={im.src} image={im} />)}
        </div>
      )}
      {noted.map((im) => (
        <div className="story-inline-row" key={im.src}>
          <ExpandableStudyImage image={im} />
          <p className="story-inline-note">{im.note}</p>
        </div>
      ))}
    </>
  );
}
import type { StoryImage } from '@/lib/projects';
import logoAsset from '@/assets/pink-simple-logo.png.asset.json';
import logoAsset from '@/assets/pink-simple-logo.png.asset.json';

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: 'Emma Ascoli — Product Designer' },
    { name: 'description', content: 'A product design portfolio rooted in curiosity, collaboration, and a little playful thinking. Explore Emma Ascoli’s work and process.' },
    { property: 'og:title', content: 'Emma Ascoli — Product Designer' },
    { property: 'og:description', content: 'Thoughtful experiences, playful details. Explore product design work and the process behind it.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Index,
});

function Index() {
  const [selected, setSelected] = useState<typeof projects[number] | null>(null);
  const [openProcess, setOpenProcess] = useState<number | null>(null);
  const process = [
    { name: 'Get curious', note: 'Listen first. Ask better questions.', detail: 'Start with the people, not the pixels. Understand their needs, the context, and the problem worth solving through conversations and discovery.' },
    { name: 'Connect the dots', note: 'Make sense of the messy middle.', detail: 'Bring observations together, frame the opportunity, and map the journey. Align on a clear direction before exploring solutions.' },
    { name: 'Make it tangible', note: 'Explore, sketch, and bring it to life.', detail: 'Turn ideas into flows, wireframes, and interactive prototypes. Collaborate early, explore alternatives, and make the details feel intentional.' },
    { name: 'Learn & refine', note: 'Test the little things. Keep growing.', detail: 'Put the experience in people’s hands, listen to what works and what doesn’t, and refine it. Good design leaves room to keep learning.' },
  ];
  return (
    <div className="portfolio">
      <header className="site-header"><a href="#home" className="site-logo" aria-label="Emma Ascoli home"><img src={logoAsset.url} alt="Emma Ascoli" width="1029" height="279"/></a><nav aria-label="Main navigation"><a href="#work">Some of my work</a><a href="#about">More about me</a><Button asChild variant="outline" className="nav-contact"><a href="https://www.linkedin.com/in/emma-ascoli" target="_blank" rel="noopener noreferrer">Let’s connect <ArrowUpRight/></a></Button></nav></header>
      <main>
        <section id="home" className="hero">
          <div className="hero-main"><span className="hero-eyebrow"><span className="tiny-spark">✳</span> CURIOUS MIND. THOUGHTFUL DESIGN.</span><div className="hero-title"><h1>EMMA ASCOLI<span className="title-dot">.</span></h1></div><p>A technical product designer with a process rooted<br className="desktop-break"/> in <span>curiosity</span> and <span>collaboration.</span></p><Button asChild className="pill-button"><a href="#work">Take a look at my work <ArrowDown size={17}/></a></Button></div>
          <div className="hero-doodles" aria-hidden="true"><LoopDoodle className="hero-loop"/></div>
        </section>
        <section id="work" className="work-section"><div className="section-wrap"><div className="section-top"><div><span className="eyebrow">01 / SOME OF MY WORK</span><h2>A few things I’ve<br/> put my heart into<span className="pink-period">.</span></h2></div><p>Turning complex challenges into <br/>simple, meaningful experiences.</p></div><div className="project-grid">{projects.map(project => <article className="project-card" key={project.slug}><Button variant="ghost" className="project-image-button" onClick={() => setSelected(project)} aria-label={`Read ${project.name} case study`}><ProjectArt theme={project.theme}/><span className="project-open"><ArrowUpRight/></span></Button><div className="project-meta"><span>{project.category}</span><span>{project.year}</span></div><div className="project-heading"><h3>{project.name}</h3><Button variant="ghost" size="icon" className="project-link" onClick={() => setSelected(project)} aria-label={`Open ${project.name}`}><ArrowUpRight/></Button></div><p>{project.description}</p></article>)}</div><p className="concept-note">Independent concepts are marked as such · A glimpse of the approach, not client work.</p></div></section>
        <section id="process" className="process-section"><div className="section-wrap"><div className="section-top"><div><span className="eyebrow">02 / THE WAY I WORK</span><h2>A curious process.<br/>A considered outcome.</h2></div><LoopDoodle className="process-loop"/></div><div className="process-grid">{process.map((step, i) => <div className="process-item" key={step.name}><span className="process-number">0{i + 1}</span><Button variant="ghost" className="process-toggle" onClick={() => setOpenProcess(openProcess === i ? null : i)} aria-expanded={openProcess === i}><span>{step.name}</span><span className="process-icon" aria-hidden="true"><Minus style={{display: openProcess === i ? undefined : 'none'}}/><Plus style={{display: openProcess === i ? 'none' : undefined}}/></span></Button><p>{step.note}</p><p className="process-detail" hidden={openProcess !== i}>{step.detail}</p></div>)}</div><div className="process-footer"><Heart size={16}/><span>Always collaborative. Never a straight line.</span><svg viewBox="0 0 200 24" fill="none" aria-hidden="true"><path d="M2 12c30-35 25 35 50 0s25 35 50 0 25 35 50 0 30 0 45 0" stroke="currentColor" strokeWidth="1.5"/></svg></div></div></section>
        <section id="about" className="about-section section-wrap"><div className="about-mark"><img className="about-photo" src={emmaPortrait.url} alt="Emma Ascoli outdoors at Bryce Canyon" width="1080" height="1440"/><StarDoodle className="about-star"/></div><div className="about-copy"><span className="eyebrow">03 / MORE ABOUT ME</span><h2>Hi, I’m Emma<span className="pink-period">.</span></h2><p>I’m a product designer who believes the best ideas happen when we stay curious and create together.</p><p>I care about the big picture and the little details, the thoughtful flow, the right words, the tiny moment that makes an experience feel human.<br/><br/>On a more personal note, I love the outdoors (exploring national parks), have a 5 year old pup named Winston who I adore, and teach reformer pilates in my free time!</p><span className="handwritten">A little empathy goes a long way.</span></div></section>
        <section id="contact" className="contact-section"><div className="section-wrap"><span className="eyebrow">HAVE SOMETHING IN MIND?</span><div className="contact-heading"><h2>Let’s make something<br/><em>thoughtful, together.</em></h2><Hand className="contact-wave" size={70} strokeWidth={1.1} aria-hidden="true"/></div><p>Good conversations are where good ideas begin.</p><span className="contact-pending">Contact details coming soon</span></div></section>
      </main><footer className="site-footer"><a href="#home" className="site-logo" aria-label="Emma Ascoli home"><img src={logoAsset.url} alt="Emma Ascoli" width="1029" height="279"/></a><span>Made with curiosity & a little heart.</span><Button asChild variant="ghost" className="back-top"><a href="#home">Back to top <ArrowUpRight/></a></Button></footer>
      <Dialog open={selected !== null} onOpenChange={(open) => { if (!open) setSelected(null); }}><DialogContent className="case-dialog">{selected && <><span className="eyebrow">{selected.kind === 'concept' ? 'INDEPENDENT CONCEPT' : 'CASE STUDY'} / {selected.category}</span><DialogTitle className="case-title">{selected.name}</DialogTitle><DialogDescription className="case-description">{selected.title}</DialogDescription><ProjectArt theme={selected.theme}/>{selected.story.length > 0 ? <div className="case-story">{selected.story.map((sec) => <section className="story-section" key={sec.heading}><span className="eyebrow">{sec.eyebrow}</span><h3 className="case-subheading">{sec.heading}</h3>{sec.body?.map((t) => <p key={t}>{t}</p>)}{sec.bullets && <ul className="story-bullets">{sec.bullets.map((b) => <li key={b}>{b}</li>)}</ul>}{sec.highlight && <blockquote className="story-highlight">{sec.highlight}</blockquote>}{sec.images && <div className={sec.images.length > 1 ? "story-images two" : "story-images"}>{sec.images.map((im) => <ExpandableStudyImage key={im.src} image={im}/>)}</div>}</section>)}</div> : <><div className="case-overview"><div><span className="eyebrow">THE PROBLEM</span><p>{selected.problem}</p></div><div><span className="eyebrow">THE OPPORTUNITY</span><p>{selected.goal}</p></div></div><h3 className="case-subheading">From first step to feeling confident.</h3><div className="case-flow">{selected.flow.map((step,i) => <div key={step}><span>0{i+1}</span><strong>{step}</strong>{i < 2 && <ArrowRight/>}</div>)}</div><h3 className="case-subheading">The thinking behind the details.</h3>{selected.decisions.map(([title,copy]) => <div className="case-decision" key={title}><h4>{title}</h4><p>{copy}</p></div>)}<div className="case-impact"><span className="eyebrow">INTENDED IMPACT & NEXT STEPS</span><p>{selected.impact}</p></div></>}</>}</DialogContent></Dialog>
    </div>
  );
}
