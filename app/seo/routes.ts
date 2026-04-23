export type SeoRoute = {
  path: string
  priority: number
  changeFrequency:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never'
  lastModified: string
  seoType?: 'core' | 'conversion' | 'content' | 'support'
}

export const seoRoutes: SeoRoute[] = [
  {
    path: '/',
    priority: 1,
    changeFrequency: 'weekly',
    lastModified: '2026-04-23',
    seoType: 'core',
  },

  {
    path: '/courses',
    priority: 0.9,
    changeFrequency: 'monthly',
    lastModified: '2026-04-23',
    seoType: 'support',
  },

  {
    path: '/courses/road-driving',
    priority: 0.98,
    changeFrequency: 'weekly',
    lastModified: '2026-04-23',
    seoType: 'conversion',
  },

  {
    path: '/road-driving-course',
    priority: 0.95,
    changeFrequency: 'weekly',
    lastModified: '2026-04-23',
    seoType: 'content',
  },

  {
    path: '/afraid-of-driving',
    priority: 0.95,
    changeFrequency: 'weekly',
    lastModified: '2026-04-23',
    seoType: 'content',
  },

  {
    path: '/courses/road-driving/instructor-car',
    priority: 0.78,
    changeFrequency: 'monthly',
    lastModified: '2026-04-23',
    seoType: 'support',
  },

  {
    path: '/courses/sport-driving',
    priority: 0.84,
    changeFrequency: 'monthly',
    lastModified: '2026-04-23',
    seoType: 'conversion',
  },

  {
    path: '/courses/track-driving',
    priority: 0.82,
    changeFrequency: 'monthly',
    lastModified: '2026-04-23',
    seoType: 'conversion',
  },

  {
    path: '/courses/instructor-training',
    priority: 0.8,
    changeFrequency: 'monthly',
    lastModified: '2026-04-23',
    seoType: 'conversion',
  },
]