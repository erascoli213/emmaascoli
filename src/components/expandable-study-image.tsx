import { useEffect, useState } from 'react';
import { Maximize2, ZoomIn, ZoomOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import type { StoryImage } from '@/lib/projects';

export function ExpandableStudyImage({ image }: { image: StoryImage }) {
  const [zoomed, setZoomed] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  useEffect(() => {
    const m = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduceMotion(m.matches);
    update();
    m.addEventListener('change', update);
    return () => m.removeEventListener('change', update);
  }, []);
  const media = image.video && !reduceMotion
    ? <video src={image.video} poster={image.poster ?? image.src} autoPlay muted loop playsInline aria-label={image.alt} />
    : <img src={image.src} alt={image.alt} loading="lazy" />;
  return (
    <figure className={image.narrow ? 'narrow' : undefined}>
      <Dialog onOpenChange={() => setZoomed(false)}>
        <DialogTrigger asChild>
          <Button variant="ghost" className="study-image-trigger" aria-label={`Expand image: ${image.alt}`}>
            {media}
            <span className="image-expand-bubble" aria-hidden="true"><Maximize2 /></span>
          </Button>
        </DialogTrigger>
        <DialogContent className="image-lightbox">
          <div className="image-lightbox-heading">
            <DialogTitle className="image-lightbox-caption">{image.caption || image.alt}</DialogTitle>
            <DialogDescription className="sr-only">{image.alt}</DialogDescription>
            <Button variant="outline" size="icon" className="image-zoom-button" onClick={() => setZoomed(!zoomed)} aria-label={zoomed ? 'Fit image' : 'Zoom in'} title={zoomed ? 'Fit image' : 'Zoom in'} aria-pressed={zoomed}>
              {zoomed ? <ZoomOut /> : <ZoomIn />}
            </Button>
          </div>
          <div className={`image-lightbox-viewport${zoomed ? ' is-zoomed' : ''}`}>
            {media}
          </div>
        </DialogContent>
      </Dialog>
      <figcaption>{image.caption}</figcaption>
    </figure>
  );
}
