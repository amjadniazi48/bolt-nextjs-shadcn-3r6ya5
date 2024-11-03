import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { getRecentPosts } from "@/lib/api";

export default async function RecentPosts() {
  const posts = await getRecentPosts();

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Recent Posts</h2>
        <div className="space-y-6">
          {posts.map((post: any) => (
            <Card key={post.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <Badge variant="outline" className="mb-2">
                      {post.attributes.category}
                    </Badge>
                    <Link href={`/posts/${post.id}`}>
                      <h3 className="text-xl font-semibold hover:text-primary transition-colors">
                        {post.attributes.title}
                      </h3>
                    </Link>
                    <p className="text-muted-foreground">{post.attributes.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{new Date(post.attributes.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}</span>
                      <span>•</span>
                      <span>{post.attributes.readTime} min read</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}