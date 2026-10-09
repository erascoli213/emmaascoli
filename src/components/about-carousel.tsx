import { useEffect, useState } from 'react';
import hike from '@/assets/about/about-hike.jpg.asset.json';
import winny from '@/assets/about/about-winny.jpg.asset.json';
import fenway from '@/assets/about/about-fenway.jpg.asset.json';

const PHOTOS = [
  { url: hike.url, alt: 'Emma Ascoli seen from behind in a red rock tunnel at Bryce Canyon, arms raised toward the view', caption: 'bryce canyon national park' },
  { url: winny.url, alt: 'Winston, a golden retriever in a red harness, sitting on a sofa outside a townhome', caption: 'winny pup (who acts like one)' },
  { url: fenway.url, alt: 'A baseball game at Fenway Park at dusk, with the field, crowd and Boston skyline', caption: 'fenway never gets old' },
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
