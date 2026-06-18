import TopPageComponent from "src/components/pages";
import { getBlogPosts } from "src/data/blog";

export default async function Page() {
  const blogPosts = await getBlogPosts();
  return <TopPageComponent blogPosts={blogPosts} />;
}
