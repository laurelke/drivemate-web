import { MetadataRoute } from 'next'
import { seoRoutes } from './seo/routes'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://drivemate-tw.com'

  return seoRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(route.lastModified),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}