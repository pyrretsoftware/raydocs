import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "site",
  
  title: "ray",
  description: "Easily self host your stuff",
  appearance: "force-dark",
  themeConfig: {
    logo: "/pyramid.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'docs', link: '/docs' },
      { text: 'chat', link: 'https://discord.gg/u9nm3jf5q2' }
    ],
    

    sidebar: [
      {
        text: 'Guides',
        items: [
          { text: 'Installation', link: '/guides/installation' },
          {
            text: 'Deploying a project',
            link: '/guides/deploying-a-project/',
            items: [
              { text: 'Project configuration', link: '/guides/deploying-a-project/project-config' },
              { text: 'Making your app ray compatible', link: '/guides/deploying-a-project/ray-compatible' },
              { text: 'Editing your ray config', link: '/guides/deploying-a-project/ray-config' },
              { text: 'Extending your project with ray features', link: '/guides/deploying-a-project/more' }
            ]
          },
          {
            text: 'Getting started with RLS',
            link: '/guides/rls',
            items: [
              { text: 'How RLS works', link: '/guides/rls/theory' },
              { text: 'Using RLS', link: '/guides/rls/practice' },
            ]
          },
          {
            text: 'Troubleshooting',
            link: '/docs/troubleshooting',
            items: [
              { text: 'Common fatal errors', link: '/docs/troubleshooting/fatal-errors' },
              { text: 'Common non-fatal errors', link: '/docs/troubleshooting/nonfatal-errors' },
            ]
          },
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'Ray config', link: '/reference/rayconfig' },
          { text: 'Project config', link: '/reference/projectconfig' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/pyrretsoftware/ray' }
    ]
  }
})
