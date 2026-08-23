import Link from "next/link";
import { getDestinationPostSlug } from "@/data/blog";
import { formatDate } from "@/lib/blog/format";
import type { BlogPost } from "@/types/blog";
import BlogFaqs from "./BlogFaqs";

interface BlogArticleProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogArticle({
  post,
  featured = false,
}: BlogArticleProps) {
  const headingTag = featured ? "h2" : "h3";

  return (
    <article className="prose-teal mx-auto max-w-3xl">
      {post.sections.map((section, sectionIndex) => {
        const imageBlock = section.blocks.find((b) => b.type === "image");
        const hasImage =
          imageBlock?.type === "image" && typeof imageBlock.src === "string";
        const contentBlocks = hasImage
          ? section.blocks.filter((b) => b.type !== "image")
          : section.blocks;

        // If the section id matches a destination post, link to its guide.
        const destinationPostSlug = getDestinationPostSlug(section.id);
        const destinationHref = destinationPostSlug
          ? `/blog/${destinationPostSlug}`
          : undefined;

        // Alternate image side: even index → image left, odd index → image right
        const imageOnRight = hasImage && sectionIndex % 2 === 1;

        return (
          <section
            key={section.id}
            id={section.id}
            className="mt-12 scroll-mt-28 first:mt-0"
          >
            {/* Modern italic section heading */}
            {(() => {
              const Heading = headingTag as "h2";
              return (
                <div className="mb-6 flex items-start gap-3">
                  <span
                    className="mt-2.5 h-px w-10 shrink-0 rounded-full bg-gradient-to-r from-orange-500 to-transparent"
                    aria-hidden
                  />
                  <Heading className="font-serif text-2xl font-semibold italic leading-snug tracking-tight text-[#29566A] md:text-[28px]">
                    {section.heading}
                  </Heading>
                </div>
              );
            })()}

            {hasImage ? (
              <div
                className={`grid items-start gap-6 md:grid-cols-2 ${
                  imageOnRight ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <figure className="overflow-hidden rounded-2xl border border-[#EADFCE] bg-white shadow-soft">
                  {/* biome-ignore lint/performance/noImgElement: demo content images */}
                  <img
                    src={imageBlock.src}
                    alt={imageBlock.alt ?? section.heading}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                  />
                </figure>
                <div className="space-y-4">
                  {contentBlocks.map((block) => {
                    const blockKey = `${section.id}-${block.type}-${
                      block.text ?? block.items?.join("-")
                    }`;
                    if (block.type === "paragraph") {
                      return (
                        <p
                          key={blockKey}
                          className="rounded-xl border border-[#EADFCE]/70 bg-[#FCF7F2]/60 p-4 text-[15px] leading-relaxed text-[#123149]/85 transition-colors hover:border-orange-200 hover:bg-orange-50/40"
                        >
                          {block.text}
                        </p>
                      );
                    }
                    if (block.type === "list") {
                      return (
                        <ul key={blockKey} className="space-y-2">
                          {block.items?.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-3 rounded-xl border border-[#EADFCE]/70 bg-white/70 p-3 text-sm text-[#123149]/85 shadow-soft"
                            >
                              <span
                                className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-orange-500 to-orange-400"
                                aria-hidden
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    if (block.type === "quote") {
                      return (
                        <blockquote
                          key={blockKey}
                          className="relative overflow-hidden rounded-r-2xl border-l-4 border-orange-500 bg-gradient-to-br from-teal-50/80 to-white p-5 text-sm font-medium italic leading-relaxed text-[#29566A] shadow-soft"
                        >
                          <span
                            className="absolute -right-2 -top-3 font-serif text-6xl text-orange-200/60"
                            aria-hidden
                          >
                            &rdquo;
                          </span>
                          {block.text}
                        </blockquote>
                      );
                    }
                    return null;
                  })}

                  {destinationHref && (
                    <Link
                      href={destinationHref}
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-orange-500/20 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/30"
                    >
                      View Full Guide
                      <span aria-hidden>→</span>
                    </Link>
                  )}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {contentBlocks.map((block) => {
                  const blockKey = `${section.id}-${block.type}-${
                    block.text ?? block.src ?? block.items?.join("-")
                  }`;
                  if (block.type === "paragraph") {
                    return (
                      <p
                        key={blockKey}
                        className="rounded-xl border border-[#EADFCE]/70 bg-[#FCF7F2]/60 p-4 text-[15px] leading-relaxed text-[#123149]/85 transition-colors hover:border-orange-200 hover:bg-orange-50/40"
                      >
                        {block.text}
                      </p>
                    );
                  }
                  if (block.type === "list") {
                    return (
                      <ul key={blockKey} className="space-y-2">
                        {block.items?.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 rounded-xl border border-[#EADFCE]/70 bg-white/70 p-3 text-sm text-[#123149]/85 shadow-soft"
                          >
                            <span
                              className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-orange-500 to-orange-400"
                              aria-hidden
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  if (block.type === "quote") {
                    return (
                      <blockquote
                        key={blockKey}
                        className="relative overflow-hidden rounded-r-2xl border-l-4 border-orange-500 bg-gradient-to-br from-teal-50/80 to-white p-5 text-sm font-medium italic leading-relaxed text-[#29566A] shadow-soft"
                      >
                        <span
                          className="absolute -right-2 -top-3 font-serif text-6xl text-orange-200/60"
                          aria-hidden
                        >
                          &rdquo;
                        </span>
                        {block.text}
                      </blockquote>
                    );
                  }
                  return null;
                })}

                {destinationHref && (
                  <Link
                    href={destinationHref}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-orange-500/20 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/30"
                  >
                    View Full Guide
                    <span aria-hidden>→</span>
                  </Link>
                )}

                {section.id === "faqs" && (
                  <BlogFaqs faqs={post.faqs} showHeader={false} />
                )}
              </div>
            )}
          </section>
        );
      })}

      <div className="mt-12 rounded-2xl border border-[#EADFCE]/70 bg-white/60 px-6 py-4 text-sm text-gray-400 shadow-soft">
        Published {formatDate(post.publishedAt)} · By {post.authorName}
      </div>

      {post.seo?.tags && post.seo.tags.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {post.seo.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#EADFCE]/70 bg-white/60 px-3 py-1 text-xs font-medium text-[#29566A] transition-colors hover:border-orange-300 hover:text-orange-600"
            >
              #{tag.replace(/\s+/g, "")}
            </span>
          ))}
        </div>
      )}

      {post.internalLinks && post.internalLinks.length > 0 && (
        <div className="mt-8 rounded-2xl border border-teal-600/10 bg-gradient-to-br from-teal-50/80 to-white p-6 shadow-soft">
          <h3 className="font-serif text-xl font-semibold italic text-[#29566A]">
            Related Guides
          </h3>
          <ul className="mt-3 space-y-2">
            {post.internalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group inline-flex items-center gap-2 text-teal-700 underline-offset-4 transition-colors hover:text-orange-600 hover:underline"
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-orange-500 transition-transform group-hover:scale-125"
                    aria-hidden
                  />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
