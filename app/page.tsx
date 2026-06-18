import TopPageComponent from "src/components/pages";
import { getBlogPosts } from "src/data/blog";
import { getZennPosts } from "src/data/zenn";

export default async function Page() {
  const [blogPosts, zennPosts] = await Promise.all([
    getBlogPosts(),
    getZennPosts(),
  ]);

  return <TopPageComponent blogPosts={blogPosts} zennPosts={zennPosts} />;
}
