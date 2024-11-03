import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Post } from "@/types/post";

const featuredPosts: Post[] = [
  {
    id: 1,
    title: "The Future of AI in Everyday Life",
    excerpt: "Exploring how artificial intelligence is reshaping our daily routines and what to expect in the coming years.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800",
    category: "Technology",
    readTime: "6 min read",
    date: "Mar 15, 2024"
  },
  {
    id: 2,
    title: "Sustainable Design Practices",
    excerpt: "How modern designers are incorporating eco-friendly principles into their work while maintaining aesthetics.",
    image: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=800",
    category: "Design",
    readTime: "5 min read",
    date: "Mar 14, 2024"
  },
  {
    id: 3,
    title: "The Rise of Web3 Technologies",
    excerpt: "Understanding the fundamental shifts in web architecture and what it means for developers.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800",
    category: "Web3",
    readTime: "8 min read",
    date: "Mar 13, 2024"
  }
];

export default function FeaturedPosts() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                {post.image && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                )}
              </CardHeader>
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-4">
                  {post.category}
                </Badge>
                <Link href={`/posts/${post.id}`}>
                  <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-muted-foreground line-clamp-2">
                  {post.excerpt}
                </p>
              </CardContent>
              <CardFooter className="px-6 py-4 border-t flex justify-between text-sm text-muted-foreground">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}