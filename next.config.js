const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  unstable_stork: false,
})
module.exports = withNextra({
  experimental: {
    optimizeCSs: true,
  },
})
