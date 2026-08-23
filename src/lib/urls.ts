export type RentalType = "bike-rental" | "scooter-rental" | "car-rental";

export const RENTAL_TYPES: RentalType[] = [
  "bike-rental",
  "scooter-rental",
  "car-rental",
];

export const urls = {
  /** /bike-rental */
  rentalHome(type: RentalType): string {
    return `/${type}`;
  },

  /** /bike-rental/delhi */
  rentalCity(type: RentalType, city: string): string {
    return `/${type}/${city}`;
  },

  /** /bike-rental/delhi/near/connaught-place */
  rentalNear(type: RentalType, city: string, place: string): string {
    return `/${type}/${city}/near/${place}`;
  },

  /** /bengaluru (root-level city page) */
  city(slug: string): string {
    return `/${slug}`;
  },

  /** /bengaluru/hauz-khas (root-level city + location) */
  cityLocation(slug: string, location: string): string {
    return `/${slug}/${location}`;
  },

  /** /blog */
  blogHome(): string {
    return "/blog";
  },

  /** /blog/himachal-pradesh */
  blogState(state: string): string {
    return `/blog/${state}`;
  },

  /** /blog/himachal-pradesh/manali */
  blogCity(state: string, city: string): string {
    return `/blog/${state}/${city}`;
  },

  /** /blog/himachal-pradesh/manali/travel-guides */
  blogCityCategory(state: string, city: string, category: string): string {
    return `/blog/${state}/${city}/${category}`;
  },

  /** /blog/himachal-pradesh/manali/solang-valley */
  blogCityLocation(state: string, city: string, location: string): string {
    return `/blog/${state}/${city}/${location}`;
  },

  /** /blog/manali-travel-guide */
  blogPost(slug: string): string {
    return `/blog/${slug}`;
  },
};
