export default {
  github: 'https://github.com/yehezkielgunawan',
  docsRepositoryBase: 'https://github.com/yehezkielgunawan/yehez-docs',
  titleSuffix: ' – YehezGun',
  branch: 'main',
  floatTOC: true,
  darkMode: true,
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Docs</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        YehezGun's Personal Docs
      </span>
    </>
  ),
  head: (
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
        content="https://yehez-og-image.yehezgun.com/**docs**.yehezgun.com.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fres.cloudinary.com%2Fyehez%2Fimage%2Fupload%2Fv1636202181%2Fpeep_amkhuu.svg&widths=250&heights=250"
      />
      <meta name="twitter:site:domain" content="docs.yehezgun.com" />
      <meta name="twitter:url" content="https://docs.yehezgun.com" />
      <meta name="og:title" content="Yehezkiel Gunawan's Personal Docs Site" />
      <meta
        name="og:image"
        content="https://yehez-og-image.yehezgun.com/**docs**.yehezgun.com.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fres.cloudinary.com%2Fyehez%2Fimage%2Fupload%2Fv1636202181%2Fpeep_amkhuu.svg&widths=250&heights=250"
      />
      <meta
        name="apple-mobile-web-app-title"
        content="Yehezkiel Gunawan's Personal Docs Site"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-chrome-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: (
    <>
      MIT {new Date().getFullYear()} ©{' '}
      <a href="https://yehezgun.com" target="_blank">
        Yehezkiel Gunawan
      </a>
    </>
  ),
  unstable_faviconGlyph: '📗',
}
