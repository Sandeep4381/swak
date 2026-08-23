/**
 * Blog image resolution — purely ImageKit naming convention based.
 *
 * Upload images to the ImageKit "Blogs" folder using these names:
 *   - Post hero (desktop):  `{stateSlug}/{key}-hero.webp`
 *     (e.g. himachal-pradesh/shimla-hero.webp)
 *   - Post hero (mobile):   `{stateSlug}/{key}-hero-mob.webp`
 *     (e.g. himachal-pradesh/shimla-hero-mob.webp)
 *   - State hero (desktop): `{stateSlug}/{stateSlug}-hero.webp`
 *     (e.g. himachal-pradesh/himachal-pradesh-hero.webp)
 *   - State hero (mobile):  `{stateSlug}/{stateSlug}-hero-mob.webp`
 *   - Section/location:     `{stateSlug}/{key}.webp`
 *     (e.g. himachal-pradesh/hadimba-temple.webp)
 *
 * `featuredImage` in posts.json is the key (e.g. "shimla") and everything
 * else resolves automatically from that name.
 */

/** Base URL for blog images, from env (IMAGE_URL). */
const IMAGE_BASE_URL =
  process.env.IMAGE_URL?.replace(/\/+$/, "") ??
  "https://ik.imagekit.io/swarikaro4/Swarikar_website/Blogs";

/** Prefix a relative path with the env base URL. */
function toAbsolute(path: string | undefined): string {
  if (!path) return "";
  if (/^https?:\/\//.test(path)) return path;
  return `${IMAGE_BASE_URL}/${path.replace(/^\/+/, "")}`;
}

/**
 * Strip a leading path/folder or extension from an image key, and remove a
 * trailing `-{stateSlug}` suffix so `sangla-valley-himachal-pradesh` resolves
 * to the uploaded `sangla-valley-hero.webp`.
 */
function normalizeKey(
  key: string | undefined,
  stateSlug?: string,
): string {
  if (!key) return "";
  let base =
    key.split("/").pop()?.replace(/\.(webp|png|jpg|jpeg)$/i, "") ?? "";
  if (stateSlug) {
    const suffix = `-${normalizeKey(stateSlug)}`;
    if (base.endsWith(suffix) && base.length > suffix.length) {
      base = base.slice(0, -suffix.length);
    }
  }
  return base;
}

/** Resolve an image entry (or plain path) to a full URL. */
export function resolveBlogImage(path: string | undefined): string {
  return toAbsolute(path);
}

/**
 * Post hero (desktop): `{stateSlug}/{key}-hero.webp`
 * e.g. `shimla` + `himachal-pradesh` → himachal-pradesh/shimla-hero.webp
 */
export function resolvePostImage(
  key: string | undefined,
  stateSlug?: string,
): string {
  if (!key) return "";
  if (/^https?:\/\//.test(key)) return key;
  if (key.includes("/")) return toAbsolute(key);

  const base = normalizeKey(key, stateSlug);
  const folder = normalizeKey(stateSlug);
  return toAbsolute(folder ? `${folder}/${base}-hero.webp` : `${base}-hero.webp`);
}

/**
 * Post hero (mobile): `{stateSlug}/{key}-hero-mob.webp`
 * Falls back to the desktop hero when no mobile variant is uploaded.
 */
export function resolvePostHeroMobImage(
  stateSlug: string,
  _citySlug: string | undefined,
  featuredImageKey: string | undefined,
  fallbackImage: string,
): string {
  if (
    featuredImageKey &&
    !/^https?:\/\//.test(featuredImageKey) &&
    !featuredImageKey.includes("/")
  ) {
    const base = normalizeKey(featuredImageKey, stateSlug);
    const folder = normalizeKey(stateSlug);
    return toAbsolute(
      folder ? `${folder}/${base}-hero-mob.webp` : `${base}-hero-mob.webp`,
    );
  }
  return fallbackImage;
}

/**
 * Section image: `{stateSlug}/{key}.webp`
 * e.g. `hadimba-temple` + `himachal-pradesh` → himachal-pradesh/hadimba-temple.webp
 */
export function resolveSectionImage(
  key: string | undefined,
  stateSlug?: string,
): string {
  if (!key) return "";
  if (/^https?:\/\//.test(key)) return key;

  const base = normalizeKey(key, stateSlug);
  const folder = normalizeKey(stateSlug);
  return toAbsolute(folder ? `${folder}/${base}.webp` : `${base}.webp`);
}

/** Resolve the alt text for a post image key. */
export function resolvePostImageAlt(key: string | undefined): string {
  void key;
  return "";
}

/* ============================================================
   City / state helpers — derived purely from posts.json data.
   A "city" is any unique citySlug present in a post; a "state"
   is any unique stateSlug present in a post.
   Images follow the same naming convention: `{stateSlug}/{slug}-hero.webp`
   (desktop) and `{stateSlug}/{slug}-hero-mob.webp` (mobile).
============================================================ */

/** Hero (desktop) image for a state: `{stateSlug}/{stateSlug}-hero.webp`. */
export function getStateHeroImage(stateSlug: string): string {
  const folder = normalizeKey(stateSlug);
  return toAbsolute(`${folder}/${folder}-hero.webp`);
}

/** Hero (mobile) image for a state, falling back to its desktop hero. */
export function getStateHeroMobImage(stateSlug: string): string {
  const folder = normalizeKey(stateSlug);
  return toAbsolute(`${folder}/${folder}-hero-mob.webp`);
}

/** Hero (desktop) image for a city: `{stateSlug}/{citySlug}-hero.webp`. */
export function getCityHeroImage(stateSlug: string, citySlug: string): string {
  const folder = normalizeKey(stateSlug);
  return toAbsolute(`${folder}/${normalizeKey(citySlug)}-hero.webp`);
}

/** Hero (mobile) image for a city: `{stateSlug}/{citySlug}-hero-mob.webp`. */
export function getCityHeroMobImage(
  stateSlug: string,
  citySlug: string,
): string {
  const folder = normalizeKey(stateSlug);
  return toAbsolute(`${folder}/${normalizeKey(citySlug)}-hero-mob.webp`);
}

/** General images for a state — the hero doubles as the card image. */
export function getStateImages(stateSlug: string): string[] {
  const hero = getStateHeroImage(stateSlug);
  return hero ? [hero] : [];
}

export function getCityImages(stateSlug: string, citySlug: string): string[] {
  const hero = getCityHeroImage(stateSlug, citySlug);
  return hero ? [hero] : [];
}

export function getLocationImages(
  stateSlug: string,
  citySlug: string,
): string[] {
  return getCityImages(stateSlug, citySlug);
}

/** First available general image for a state/city/location. */
export function getBlogImage(
  stateSlug: string,
  citySlug?: string,
  fallback?: string,
): string {
  const images = citySlug
    ? getCityImages(stateSlug, citySlug)
    : getStateImages(stateSlug);
  return images[0] ?? fallback ?? "";
}
