module.exports = {
   // This path is subpath of your hosting https://domain/portfolio
  siteMetadata: {
    title: 'See The Color',
    image: 'src/images/stc.jpg',
    url: 'https://seethecolor.org',
    description: 'See the color is an orginization focused on incresing diversity in childcare facilities.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'See The Color',
        short_name: 'STC',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'standalone',
        icon: 'src/assets/img/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
};
