/**
 * Header loop: attach the <video> only when motion and data are allowed.
 * Reduced-motion and save-data both keep the poster <img> only.
 */
export function shouldAttachHeaderClip({ reducedMotion, saveData }) {
  return !reducedMotion && !saveData;
}

/** DOM tag the header renders for a given preference pair. */
export function headerMediaTag({ reducedMotion, saveData }) {
  return shouldAttachHeaderClip({ reducedMotion, saveData }) ? 'video' : 'img';
}
