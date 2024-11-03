import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import type { Post } from "@/types/post";

const recentPosts: Post[] = [
  {
    id: 4,
    title: "Mastering TypeScript: Advanced Patterns",
    excerpt: "Deep dive into advanced TypeScript patterns and best practices for large-scale applications.",
    category: "Development",
    readTime: "10 min read",
    date: "Mar 12, 2024"
  },
  {
    id: 5,
    title: "The Psychology of User Experience",
    excerpt: "Understanding how human psychology influences digital product design and user behavior.",
    category: "UX Design",
    readTime: "7 min read",
    date: "Mar 11, 2024"
  },
  {
    id: 6,
    title: "Cloud Computing Trends 2024",
    excerpt: "Exploring the latest trends and innovations in cloud computing and serverless architecture.",
    category: "Cloud",
    readTime: "8 min read",
    date: "Mar 10, 2024"
  }
];

export default function RecentPosts() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Recent Posts</h2>
        <div className="space-y-6">
          {recentPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <Badge variant="outline" className="mb-2">
                      {post.category}
                    </Badge>
                    <Link href={`/posts/${post.id}`}>
                      <h3 className="text-xl font-semibold hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
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