import { BlogPost } from "src/domain/blog/model";
import { fetchRssPosts } from "src/data/rss";

const FEED_URL = "https://zenn.dev/lamechang/feed";
const LIMIT = 5;

export const getZennPosts = (): Promise<BlogPost[]> =>
  fetchRssPosts(FEED_URL, LIMIT);
