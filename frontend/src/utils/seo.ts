// SEO-friendly slug generation და მეტადატა
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // მხოლოდ ასოები, ციფრები, ცარიელი ადგილები და ტირეები
    .replace(/\s+/g, '-') // ცარიელი ადგილები ტირეებით შეცვლა
    .replace(/--+/g, '-') // მრავალი ტირის ერთით შეცვლა
    .trim()
    .replace(/^-+|-+$/g, ''); // დასაწყისისა და ბოლოს ტირეების წაშლა
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
}

export function generateCategorySEO(category: {
  title: string;
  description: string;
  slug: string;
  complexes: number;
}): SEOMetadata {
  return {
    title: `${category.title} - რეაბილიტაციული ვარჯიშები | GRS`,
    description: `${category.description}. ${category.complexes} კომპლექსი ხელმისაწვდომია. პროფესიონალური რეაბილიტაციული პროგრამები.`,
    keywords: [
      category.title.toLowerCase(),
      'რეაბილიტაცია',
      'ვარჯიშები',
      'ჯანმრთელობა',
      'თერაპია',
      'აღდგენა'
    ],
    canonical: `/categories/${category.slug}`
  };
} 