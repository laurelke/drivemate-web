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
}

export const seoRoutes: SeoRoute[] = [
  {
    path: '/',
    priority: 1,
    changeFrequency: 'weekly',
    lastModified: '2026-04-23',
  },

  {
    path: '/courses',
    priority: 0.92,
    changeFrequency: 'monthly',
    lastModified: '2026-04-23',
  },

  {
    path: '/courses/road-driving',
    priority: 0.95,
    changeFrequency: 'weekly',
    lastModified: '2026-04-23',
  },

  {
    path: '/road-driving-course',
    priority: 0.9,
    changeFrequency: 'weekly',
    lastModified: '2026-04-23',
  },

  {
    path: '/afraid-of-driving',
    priority: 0.9,
    changeFrequency: 'weekly',
    lastModified: '2026-04-23',
  },

  {
    path: '/courses/road-driving/instructor-car',
    priority: 0.78,
    changeFrequency: 'monthly',
    lastModified: '2026-04-23',
  },

  {
    path: '/courses/sport-driving',
    priority: 0.85,
    changeFrequency: 'monthly',
    lastModified: '2026-04-23',
  },

  {
    path: '/courses/track-driving',
    priority: 0.82,
    changeFrequency: 'monthly',
    lastModified: '2026-04-23',
  },

  {
    path: '/courses/instructor-training',
    priority: 0.8,
    changeFrequency: 'monthly',
    lastModified: '2026-04-23',
  },
]