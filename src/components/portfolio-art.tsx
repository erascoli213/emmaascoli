import { ArrowUpRight, Leaf, Plus, Heart, MapPin } from 'lucide-react';

export function StarDoodle({ className = '' }: { className?: string }) {
  return <svg className={`star-doodle ${className}`} viewBox="0 0 100 100" fill="currentColor" aria-hidden="true"><path d="m48 19 8 23 25-2-20 16 8 24-21-14-20 15 7-24-20-14 25-1Z"/><path className="little-star" d="m77 4 4 11 12-1-9 8 3 11-10-6-9 7 3-12-9-7 12-1Z"/><path className="little-star" d="m17 62 4 10 11-1-9 7 3 10-9-6-9 7 3-11-9-6 11-1Z"/></svg>;
}

export function LoopDoodle({ className = '' }: { className?: string }) {
  return <svg className={`loop-doodle ${className}`} viewBox="0 0 80 150" fill="none" aria-hidden="true"><path d="M47 143c-42-42 25-50-5-79C8 32 3 94 33 87 65 78 5 21 27 9c31-20 47 39 17 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
}

export function ProjectArt({ theme }: { theme: string }) {
  if (theme === 'access') return <div className="project-art access-art" aria-label="Concept mock of HCP single sign-on details with the SCIM provisioning entry point">
    <span className="art-brand">identity <span className="brand-flower">✳</span></span>
    <div className="browser-mock">
      <div className="browser-bar"><span>● ● ●</span><small>identity / organization / sso</small><ArrowUpRight size={12}/></div>
      <div className="scim-shell">
        <div className="scim-side">
          <span>‹ Back to dashboard</span>
          <strong>Organization settings</strong>
          <span>Organization</span>
          <span className="scim-active">SSO</span>
          <span>SCIM provisioning <em>beta</em></span>
        </div>
        <div className="scim-main">
          <div className="scim-title"><h4>Single sign-on details</h4><span className="mock-nav-button">Manage</span></div>
          <div className="scim-rows">
            <div><span>Status</span><b className="scim-ok">✓ Enabled</b></div>
            <div><span>Identity protocol</span><b>SAML</b></div>
            <div><span>Creation date</span><b>Feb 20, 2025</b></div>
            <div><span>Owner</span><b>weidner.com</b></div>
            <div><span>Default organization role</span><b>Admin</b></div>
          </div>
          <div className="scim-card">
            <strong>SCIM provisioning within your SSO-enabled organization</strong>
            <span>Connect your identity provider, and access arrives exactly as expected.</span>
            <a>Enable SCIM provisioning <b>→</b></a>
          </div>
        </div>
      </div>
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
  return <div className="project-art common-art" aria-label="Common Ground community discovery website concept"><span className="art-brand">common ground<span className="brand-flower">✳</span></span><div className="browser-mock"><div className="browser-bar"><span>● ● ●</span><small>commonground / discover</small><ArrowUpRight size={12}/></div><div className="mock-nav"><strong>common ground ✳</strong><span>Explore &nbsp; Our story</span><span className="mock-nav-button">Find your people</span></div><div className="mock-heading"><span>A little closer, together.</span><h4>Your city.<br/>Your kind of people.</h4><p>Good company is just around the corner.</p></div><div className="event-grid"><div className="event-mini"><div className="event-image pottery"><span>◒</span><span>◓</span></div><strong>A slow Sunday, in clay</strong><span><MapPin size={8}/> The pottery studio</span></div><div className="event-mini"><div className="event-image garden"><Leaf/><span>✳</span></div><strong>Grow something together</strong><span><MapPin size={8}/> Community garden</span></div><div className="event-mini"><div className="event-image coffee"><span>☕</span></div><strong>Coffee & new connections</strong><span><MapPin size={8}/> Your neighborhood</span></div></div></div><span className="art-caption">a place to find your people</span></div>;
}
