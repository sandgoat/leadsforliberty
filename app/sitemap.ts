import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.leadsforliberty.com'
  const now = new Date()
  
  const pages = [
    ['', 1, 'weekly'],
    ['/the-offer', 0.9, 'monthly'],
    ['/pricing', 0.9, 'monthly'],
    ['/liberty-hill', 0.8, 'monthly'],
    ['/about', 0.7, 'monthly'],
    ['/book', 0.8, 'monthly'],
    ['/contact', 0.7, 'monthly'],
    ['/case-studies', 0.7, 'weekly'],
    ['/resources', 0.8, 'weekly'],
    ['/services', 0.8, 'monthly'],
    ['/services/websites', 0.7, 'monthly'],
    ['/services/google-business-profile', 0.7, 'monthly'],
    ['/services/facebook-ads', 0.7, 'monthly'],
    ['/services/google-ads', 0.7, 'monthly'],
    ['/services/email-marketing', 0.7, 'monthly'],
    ['/services/sms-marketing', 0.7, 'monthly'],
    ['/services/ai-lead-management', 0.7, 'monthly'],
    ['/services/reputation-management', 0.7, 'monthly'],
    ['/services/local-seo', 0.7, 'monthly'],
    ['/services/press-releases', 0.7, 'monthly'],
    ['/industries/home-services', 0.7, 'monthly'],
    ['/industries/contractors', 0.7, 'monthly'],
    ['/industries/real-estate', 0.7, 'monthly'],
    ['/industries/dental-medical', 0.7, 'monthly'],
    ['/industries/professional-services', 0.7, 'monthly'],
    ['/industries/auto-services', 0.7, 'monthly'],
    ['/legal/privacy', 0.3, 'yearly'],
    ['/legal/terms', 0.3, 'yearly'],
    ['/legal/accessibility', 0.3, 'yearly'],
  ] as const

  return pages.map(([path, priority, freq]) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: freq as MetadataRoute.Sitemap[number]['changeFrequency'],
    priority: priority as number,
  }))
}
