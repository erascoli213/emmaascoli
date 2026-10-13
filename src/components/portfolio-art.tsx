import { ArrowUpRight, Leaf, Plus, Heart } from 'lucide-react';

export function StarDoodle({ className = '' }: { className?: string }) {
  return <svg className={`star-doodle ${className}`} viewBox="0 0 100 100" fill="currentColor" aria-hidden="true"><path d="m48 19 8 23 25-2-20 16 8 24-21-14-20 15 7-24-20-14 25-1Z"/><path className="little-star" d="m77 4 4 11 12-1-9 8 3 11-10-6-9 7 3-12-9-7 12-1Z"/><path className="little-star" d="m17 62 4 10 11-1-9 7 3 10-9-6-9 7 3-11-9-6 11-1Z"/></svg>;
}

export function LoopDoodle({ className = '' }: { className?: string }) {
  return <svg className={`loop-doodle ${className}`} viewBox="0 0 80 150" fill="none" aria-hidden="true"><path d="M47 143c-42-42 25-50-5-79C8 32 3 94 33 87 65 78 5 21 27 9c31-20 47 39 17 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
}

export function ProjectArt({ theme }: { theme: string }) {
  if (theme === 'access') return <div className="project-art access-art" aria-label="HCP users table showing SCIM sync status for every user">
    <span className="art-brand">identity provisioning&nbsp;{'\n'}✳</span>
    <div className="browser-mock">
      <div className="browser-bar"><span>● ● ●</span><small>identity / access control / users</small><ArrowUpRight size={12}/></div>
      <img className="browser-shot" src="images/scim-exports/scim-users-clean.png" alt="" loading="lazy" />
    </div>
    <span className="art-caption">access that sets itself up</span>
  </div>;
  if (theme === 'sprout') return <div className="project-art sprout-art" aria-label="Sprout plant care mobile app concept">
    <span className="art-brand"><Leaf size={24}/> sprout</span>
    <div className="leaf-illustration leaf-one"><Leaf/></div><div className="leaf-illustration leaf-two"><Leaf/></div>
    <div className="phone phone-back"><div className="phone-camera"/><div className="phone-top"><Leaf size={15}/><span>My little jungle</span><Plus size={14}/></div><h4>Room to grow.</h4><p>Meet your happy little family.</p><div className="plant-preview"><Leaf/><span>Monstera deliciosa<small>Your leafy friend</small></span></div><div className="plant-preview small-plant"><Leaf/><span>Golden pothos<small>A little ray of sunshine</small></span></div><div className="phone-nav"><Leaf size={15}/><Heart size={15}/><span>◌</span></div></div>
    <div className="phone phone-front"><div className="phone-camera"/><div className="phone-top"><span>Good morning, Alex</span><span>☀</span></div><h4>Let’s grow<br/>something good.</h4><div className="plant-hero"><Leaf/></div><div className="care-panel"><span>A little love for your Monstera</span><strong>Time for a drink 💧</strong><div className="mock-action">Mark as watered <span>✓</span></div></div><div className="phone-nav"><Leaf size={15}/><Heart size={15}/><span>◌</span></div></div>
    <span className="art-caption">a happier kind of plant care</span>
  </div>;
  return <div className="project-art common-art" aria-label="Illustrated Infragraph query catalog screen">
    <span className="art-brand">query catalog{'\n'}✳</span>
    <div className="browser-mock">
      <div className="browser-bar"><span>● ● ●</span><small>infragraph / query catalog</small><ArrowUpRight size={12}/></div>
      <div className="scim-shell">
        <div className="scim-side">
          <strong>Infragraph</strong>
          <span>Overview</span>
          <span>Query builder</span>
          <span className="scim-active">Query catalog</span>
          <span>Inventory</span>
        </div>
        <div className="scim-main">
          <div className="scim-title"><h4>Query catalog</h4><span className="mock-nav-button">+ New query</span></div>
          <div className="scim-rows">
            <div><span>Resources without an owner</span><b className="scim-ok">Security</b></div>
            <div><span>Outdated AMIs in production</span><b>Health</b></div>
            <div><span>Not provisioned by Terraform</span><b>Compliance</b></div>
            <div><span>Untagged S3 buckets</span><b>Security</b></div>
          </div>
          <div className="scim-card">
            <strong>Save it once. Check in anytime.</strong>
            <span>Share questions with your team and track health over time.</span>
            <a>Open in query builder <b>→</b></a>
          </div>
        </div>
      </div>
    </div>
    <span className="art-caption">questions worth keeping</span>
  </div>;
}
