import {defineQuery} from 'next-sanity'

export const BLOG_POSTS_QUERY = defineQuery(`
  *[_type == "blogPost" && language == $locale && defined(slug.current)] 
  | order(publishedAt desc)[0...100] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage
  }
`);

export const BLOG_POST_QUERY = defineQuery(`
  *[_type == "blogPost" && slug.current == $slug && language == $locale][0] {
    _id,
    title,
    slug,
    body,
    publishedAt,
    mainImage
  }
`);

export const PRODUCTS_QUERY = defineQuery(`
  *[_type == "product" && language == $locale] {
    _id,
    title,
    description,
    price,
    currency,
    pdfFile,
    coverImage,
    slug,
    stripePaymentLink
  }
`);

export const PRODUCT_QUERY = defineQuery(`
  *[_type == "product" && slug.current == $slug && language == $locale][0] {
    _id,
    title,
    description,
    price,
    currency,
    pdfFile,
    coverImage,
    slug,
    stripePaymentLink
  }
`);
