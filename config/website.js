const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Esseson - Portfolio ', // Navigation and Site Title
  siteTitleAlt: 'Esseson', // Alternative Site title for SEO
  siteTitleShort: 'Esseson', // short_name for manifest
  siteHeadline: 'Creating marvelous art & blazginly fast websites', // Headline for schema.org JSONLD
  siteUrl: 'https://esseson.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/Esseson.jpg', // Used for SEO and manifest
  siteDescription: 'Esseson Web design Service, SEO and Content Writing Portfolio',
  author: 'Esseson', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@esseson', // Twitter Username
  ogSiteName: 'Esseson Peniel Raphael', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-165365882-1',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
