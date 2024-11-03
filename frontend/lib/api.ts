const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export async function fetchAPI(path: string) {
  const requestUrl = `${STRAPI_URL}/api${path}`;
  const response = await fetch(requestUrl, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
}

export async function getFeaturedPosts() {
  const data = await fetchAPI('/posts?filters[featured][$eq]=true&populate=*');
  return data.data;
}

export async function getRecentPosts() {
  const data = await fetchAPI('/posts?sort[0]=publishedAt:desc&pagination[limit]=3&populate=*');
  return data.data;
}

export async function subscribeToNewsletter(email: string) {
  const response = await fetch(`${STRAPI_URL}/api/newsletter-subscriptions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data: { email } }),
  });
  return response.json();
}