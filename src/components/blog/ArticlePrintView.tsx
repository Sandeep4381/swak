import type { BlogPost } from "@/types/blog";
import { formatDate } from "@/lib/blog/format";

/**
 * Print-only rendering of the article content.
 * Hidden on screen (print:hidden parent), shown only when printing,
 * so the saved PDF contains just the guide — no hero, sidebar or related.
 */
export default function ArticlePrintView({ post }: { post: BlogPost }) {
  return (
    <div className="hidden print:block" aria-hidden>
      {/* Print header */}
      <header className="mb-8 border-b-2 border-[#29566A] pb-6">
        <h1 className="text-3xl font-bold text-[#29566A]">{post.title}</h1>
        <p className="mt-3 text-sm text-[#123149]/85">{post.excerpt}</p>
        <p className="mt-3 text-xs text-[#123149]/70">
          {formatDate(post.publishedAt)} · By {post.authorName} ·{" "}
          {post.readTimeMinutes} min read
        </p>
      </header>

      {/* Article sections */}
      {post.sections.map((section) => (
        <section
          key={section.id}
          id={`print-${section.id}`}
          className="mb-8"
        >
          <h2 className="mb-3 text-xl font-bold text-[#29566A]">
            {section.heading}
          </h2>

          {section.blocks.map((block, index) => {
            const blockKey = `${section.id}-${index}-${block.type}`;
            if (block.type === "image") {
              return (
                <figure key={blockKey} className="my-4">
                  {/* biome-ignore lint/performance/noImgElement: print image */}
                  <img
                    src={block.src}
                    alt={block.alt ?? section.heading}
                    className="w-full rounded-lg"
                  />
                </figure>
              );
            }
            if (block.type === "paragraph") {
              return (
                <p key={blockKey} className="mb-3 text-sm leading-relaxed text-[#123149]">
                  {block.text}
                </p>
              );
            }
            if (block.type === "list") {
              return (
                <ul key={blockKey} className="mb-3 list-disc pl-5">
                  {block.items?.map((item) => (
                    <li key={item} className="mb-1 text-sm text-[#123149]">
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }
            if (block.type === "quote") {
              return (
                <blockquote
                  key={blockKey}
                  className="mb-3 border-l-4 border-[#29566A] pl-4 text-sm italic text-[#29566A]"
                >
                  {block.text}
                </blockquote>
              );
            }
            return null;
          })}
        </section>
      ))}

      {/* Print footer */}
      <footer className="mt-10 border-t border-gray-300 pt-4 text-center text-xs text-gray-500">
        Visit Swarikaro for more travel guides · swarikaro.com
      </footer>
    </div>
  );
}
