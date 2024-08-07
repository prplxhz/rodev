import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Top Dev",
  description: "A Roblox Development Group",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Roblox Group', link: 'https://www.roblox.com/groups/33875607/Top-Dev' }
    ],

    sidebar: [
      {
        text: 'About',
        items: [
          { text: 'About Us', link: '/about-us' },
          { text: 'Community', link: '/community' }
        ]
      },
      {
        text: 'Projects',
        items: [
          { text: 'Overview', link: '/projects' },
          { text: 'RoDNS', link: 'https://dns.rodev.top' },
          { text: 'RoAPI', link: 'https://api.rodev.top' }
        ]
      },
            {
        text: 'Links',
        items: [
          { text: 'Top Dev', link: 'https://www.roblox.com/groups/33875607/Top-Dev' },
          { text: 'Motion Games Studio', link: 'https://www.roblox.com/groups/33386979/Motion-Games-Studio' },
          { text: 'MotionTech', link: 'https://www.roblox.com/groups/33386989/MotionTech' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/GCM4SAzvfg' }
    ],

    footer: {
      copyright: "Copyright@ 2024 <a href=http://rodev.top>Top Dev</a> | Powered by <a href=http://rodev.top>Top Dev</a>"
    },
  }
})
