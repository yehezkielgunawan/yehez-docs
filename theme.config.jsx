import { useConfig } from 'nextra-theme-docs'

export default {
  project: { link: 'https://github.com/yehezkielgunawan' },
  docsRepositoryBase:
    'https://github.com/yehezkielgunawan/yehez-docs/tree/main',
  useNextSeoProps() {
    const { frontMatter } = useConfig()

    const defaultTitle = frontMatter.overrideTitle || 'YehezGun'

    return {
      description: frontMatter.description,
      defaultTitle,
      titleTemplate: '%s - YehezGun',
    }
  },
  darkMode: true,
  logo: (
    <>
      <span className="text-gray-600 font-normal hidden md:inline">
        YehezGun's Personal Docs
      </span>
    </>
  ),
  head: () => (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="This is my personal documentation site."
      />
      <meta
        name="og:description"
        content="This is my personal documentation site."
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image"
        content="https://og.yehezgun.com/api/base?description=A%20personal%20docs%20site%20by%20Yehezkiel%20Gunawan&logo=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F1246%2F1246882.png%3Fw%3D740&siteName=docs.yehezgun.com&templateTitle=Yehez-Docs&theme=dark"
      />
      <meta name="twitter:site:domain" content="docs.yehezgun.com" />
      <meta name="twitter:url" content="https://docs.yehezgun.com" />
      <meta name="og:title" content="Yehezkiel Gunawan's Personal Docs Site" />
      <meta
        name="og:image"
        content="https://og.yehezgun.com/api/base?description=A%20personal%20docs%20site%20by%20Yehezkiel%20Gunawan&logo=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F1246%2F1246882.png%3Fw%3D740&siteName=docs.yehezgun.com&templateTitle=Yehez-Docs&theme=dark"
      />
      <link rel="manifest" href="/manifest.json" />
      <meta
        name="apple-mobile-web-app-title"
        content="Yehezkiel Gunawan's Personal Docs Site"
      />
    </>
  ),
  navigation: {
    prev: true,
    next: true,
  },
  footer: {
    text: (
      <p>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://yehezgun.com" target="_blank">
          Yehezkiel Gunawan
        </a>{' '}
        <br />
        If you've found that there's some contents that needs to be updated or
        fixed, feel free to email me{' '}
        <a href="mailto:yehezkiel.gunawan28@gmail.com?subject=docs.yehezgun.com">
          <b>here</b>
        </a>
      </p>
    ),
  },

  faviconGlyph: '📗',
}
