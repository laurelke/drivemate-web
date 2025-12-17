import { MetadataRoute } from 'next'
import { seoRoutes } from './seo/routes'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://drivemate-tw.com'
  const lastModified = new Date()

  return seoRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency as
      | 'always'
      | 'hourly'
      | 'daily'
      | 'weekly'
      | 'monthly'
      | 'yearly'
      | 'never',
    priority: route.priority,
  }))
}
