import { notFound } from "next/navigation";
import { redirectRentalAlias, redirectRootKeyword } from "@/lib/root-redirect";

interface Props {
  params: Promise<{ slug: string[] }>;
}

/**
 * Root-level keyword fallback. Routes like `/manali` or `/himachal-pradesh`
 * (without the `/blog` prefix) are matched against blog posts, cities and
 * states by slug or keyword, then redirected to the closest related blog page
 * instead of returning a 404. Alternate rental slugs (`/car-renter`, ...) are
 * redirected to the canonical rental page. Static slices (about, contact,
 * rentals, ...) take precedence over this catch-all.
 */
export default async function KeywordCatchAllPage({ params }: Props) {
  const { slug } = await params;

  if (redirectRentalAlias(slug)) {
    return null;
  }

  if (redirectRootKeyword(slug)) {
    return null;
  }

  notFound();
}
