import { useEffect, useState } from 'react';
import emmaPortrait from '@/assets/emma-portrait.png.asset.json';
import celtics from '@/assets/about/celtics.png.asset.json';
import pilates from '@/assets/about/pilates.png.asset.json';
import dog from '@/assets/about/dog.png.asset.json';

const PHOTOS = [
  { url: emmaPortrait.url, alt: 'Emma Ascoli outdoors at Bryce Canyon', caption: 'bryce canyon national park' },
  { url: dog.url, alt: 'Winston, a golden retriever, sitting in front of blue hydrangeas', caption: 'winny pup (who acts like one)' },
  { url: pilates.url, alt: 'A reformer pilates studio', caption: 'my second home 🫶' },
  { url: celtics.url, alt: 'A Celtics game at TD Garden', caption: 'go Celtics!' },
] as const;

const INTERVAL_MS = 4200;

export function AboutCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % PHOTOS.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <div
      className="about-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="about-carousel-frame">
        {PHOTOS.map((photo, i) => (
          <img
            key={photo.url}
            src={photo.url}
            alt={photo.alt}
            width="491"
            height="651"
            loading={i === 0 ? 'eager' : 'lazy'}
            className={i === index ? 'is-active' : ''}
            aria-hidden={i !== index}
          />
        ))}
      </div>
      <div className="about-carousel-footer">
        <span className="about-carousel-caption" aria-live="polite">
          {PHOTOS[index]?.caption}
        </span>
        <div className="about-carousel-dots" role="tablist" aria-label="About photos">
          {PHOTOS.map((photo, i) => (
            <button
              key={photo.url}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show photo: ${photo.caption}`}
              className={i === index ? 'is-active' : ''}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
