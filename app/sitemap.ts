import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://drivemate-tw.com'
  const lastModified = new Date()

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/courses/instructor-training`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]
}
