import { BlogPost } from "src/domain/blog/model";
import { fetchRssPosts } from "src/data/rss";

const RSS_URL = "https://lamechang-dev.hatenablog.com/rss";
const LIMIT = 5;

export const getBlogPosts = (): Promise<BlogPost[]> =>
  fetchRssPosts(RSS_URL, LIMIT);
