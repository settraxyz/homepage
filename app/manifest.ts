import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Settra - 跨境支付基础设施',
    short_name: 'Settra',
    description: '为支付公司提供高并发、高成功率的跨境支付系统',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#6366f1',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['business', 'finance', 'productivity'],
    lang: 'zh-CN',
    orientation: 'portrait-primary',
  }
}
