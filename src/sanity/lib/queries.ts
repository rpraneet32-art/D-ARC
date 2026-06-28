import { groq } from 'next-sanity'

export const PORTFOLIO_QUERY = groq`*[_type == "portfolio"] | order(_createdAt desc)`
export const PORTFOLIO_BY_SLUG_QUERY = groq`*[_type == "portfolio" && slug.current == $slug][0]`

export const BLOGS_QUERY = groq`*[_type == "post"] | order(publishedAt desc)`
export const BLOG_BY_SLUG_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`

export const LOCATIONS_QUERY = groq`*[_type == "location"] | order(name asc)`
export const LOCATION_BY_SLUG_QUERY = groq`*[_type == "location" && slug.current == $slug][0]`
