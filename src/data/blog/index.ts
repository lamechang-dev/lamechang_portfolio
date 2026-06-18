import { BlogPost } from "src/domain/blog/model";
import { decodeHtmlEntities } from "src/lib/string";

const RSS_URL = "https://lamechang-dev.hatenablog.com/rss";
const LIMIT = 5;

const extractTag = (xml: string, tag: string): string => {
  const match = xml.match(
    new RegExp(`<${tag}[^>]*>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?<\\/${tag}>`)
  );
  return decodeHtmlEntities(match?.[1]?.trim() ?? "");
};

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const res = await fetch(RSS_URL, { next: { revalidate: 3600 } });
    const xml = await res.text();
    const items = Array.from(xml.matchAll(/<item>([\s\S]*?)<\/item>/g));
    return items.slice(0, LIMIT).map((match) => {
      const item = match[1];
      return {
        title: extractTag(item, "title"),
        url: extractTag(item, "link"),
        publishedAt: extractTag(item, "pubDate"),
      };
    });
  } catch {
    return [];
  }
};
