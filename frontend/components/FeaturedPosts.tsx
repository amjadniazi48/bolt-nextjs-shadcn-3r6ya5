import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getFeaturedPosts } from "@/lib/api";

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: any) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                {post.attributes.coverImage?.data?.attributes?.url && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${post.attributes.coverImage.data.attributes.url}`}
                      alt={post.attributes.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                )}
              </CardHeader>
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-4">
                  {post.attributes.category}
                </Badge>
                <Link href={`/posts/${post.id}`}>
                  <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                    {post.attributes.title}
                  </h3>
                </Link>
                <p className="text-muted-foreground line-clamp-2">
                  {post.attributes.excerpt}
                </p>
              </CardContent>
              <CardFooter className="px-6 py-4 border-t flex justify-between text-sm text-muted-foreground">
                <span>{new Date(post.attributes.publishedAt).toLocaleDateString('en-US', { 
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}</span>
                <span>{post.attributes.readTime} min read</span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}