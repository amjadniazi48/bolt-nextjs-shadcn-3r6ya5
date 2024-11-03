import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import FeaturedPosts from '@/components/FeaturedPosts';
import RecentPosts from '@/components/RecentPosts';
import NewsletterCTA from '@/components/NewsletterCTA';

export const metadata: Metadata = {
  title: 'Modern Blog - Ideas that shape the future',
  description: 'Discover thought-provoking articles, expert insights, and the latest trends in technology, design, and innovation.',
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedPosts />
      <RecentPosts />
      <NewsletterCTA />
    </main>
  );
}